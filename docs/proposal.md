# Proposal 

![img](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FHU60xwYQHMhpqTs5RQyx%2Fuploads%2FBN4GWfoYPC4ZlvdL2dm1%2F4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?alt=media&token=ff839673-ba12-4a01-a64b-ecb9f9beaeed)

Nowadays, Web 3.0 has already become the new iteration of the World Wide Web. What exactly is Web 3.0? It is a network combining concepts of decentralization, blockchain technologies, and token-based economics. Since Web 3.0 aims to create a decentralized internet that is free from the shackles of corporations and conglomerates. it relies heavily on the presence of blockchain technology at its core. Key to the success of the infrastructure of this rapidly emerging decentralized web, is the smart contract, which will be the focus of the project moving forward. However, its appearance has also led to the exposure of many security issues and challenges, which has gained widespread attention in the field of smart contract vulnerabilities in both academia and industry.

Many smart contract vulnerability scanners and exploit scripts have been developed to address the growing and complex smart contract vulnerability. However, there is no mature framework for vulnerability scanning and vulnerability exploitation integration. Also, the chosen environments and coding styles for exploits developed by different security engineers are not consistent, which hinders script sharing and reduces the efficiency of modification. Therefore, in our capstone project, we would like to build an integrated framework prototype, in which we would design and develop a unified standard of exploits to facilitate security engineers to test and exploit smart contract vulnerabilities.



## Problem

Proof of concepts (PoC) are examples to demonstrate the vulnerability but without exploit the real target. PoC can be used to help in identifying, testing and mitigating vulnerable contracts. The main problem is that there is not a convenient way to develop PoC/exploit, since a PoC sometimes only contains 100-200 lines of solidity code, not like a complete web 3.0 application, which require a development framework, like hardhat [1], foundry [2] or brownie [3]. Also, the chosen environments and coding styles for PoC/exploits developed by different security engineers are not consistent, which is not efficient to be modified and tested by other security engineers. For sharing a PoC/exploit, there is not a database like exploit-DB [4] and exploitdb [5], to archive and collect public PoCs/exploits with relative Dapps’ information.



## Objectives

Since the timeframe of this project is only three months, we have to narrow the scope. The aim of the project is to build a prototype of exploit framework, like Metasploit [6] in penetration testing. But we plan to focus on Step 4 and Step 5, to improve the efficiency of developing PoCs or exploit and testing exploit. Developers or auditors only need to care about the scripts and contracts for PoCs, instead of setting up the environment and private network. The developed PoCs could be shared, tested and modified by others easily. For example, developers can set up their PoCs with initialized parameters under a particular network and block number, which can be modified and then applied to another contracts. Plus, some convenient command tools are planned to be developed to help develop PoCs more efficiently, including quick searching addresses, interfaces, querying state of a contract at specific block number, etc. In the end, we expect to maintain a PoC database, where developers can upload and search PoC based on project types or vulnerability types.



## Milestones

|      | Description of task                                          | Tentative date of completion |
| ---- | ------------------------------------------------------------ | ---------------------------- |
| 1    | Literature review on vulnerability, PoC, exploit of smart contract, and tool collection on vulnerability scanner and testing framework. Design architecture of framework. Complete a roadmap for developing framework | 9/25                         |
| 2    | Prepare dataset of vulnerability and collect exploit/PoC and common smart contract addresses and interfaces. | 10/2                         |
| 3    | Establish the standard of PoC, design framework, and develop tool suite. | 10/7                         |
| 4    | Mid-project progress report.                                 | 10/16                        |
| 5    | Develop and refine framework and modules. Build PoC/exploits database. | 11/20                        |
| 6    | Test framework and analyze the efficiency and scalability.   | 11/27                        |
| 7    | Final report.                                                | 12/4                         |

