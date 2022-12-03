# PluginManager

## **Functionality**

Manage the loading and unloading plugins.

## Class Attributes

- `self.framework`
  - A ref to the framework instance 
- `self.path_hash`
  - A dict used to record the corresponding hash value of the plugin path
    - key: path
    - value: hash
- `self.loaded_plugins`
  - A list to record all the loaded plugin instances

## **Methods**

- `__init__(self, framework)`
  - Initializes the plugin manager
- `_import_module(self, module_name)`
- `load(self, module_name)` 
  - Dynamically loads the plugin module from the supplied name by `_import_module()` and loads the commands of the plugin into the framework, returns the created instance
    - Sets the hash value of the plugin if this is the first time to load it
    - Creates the instance and adds it to the loaded plugin list 
      - If there already exists a created instance, force unload it and then create a new one, so that the new version of the plugin can be loaded into the framework
- `unload(self, inst)` 
  - Unloads the plugin from the framework
    - Calls the `cleanup` method of the plugin
  - Removes the plugin instance from the loaded plugin list
- `list(self)` 
  - Lists all the available plugins in the framework
- `show_loaded(self)` 
  - Returns the name list of all loaded plugins
- `check_path_hash(self, path)` 
  - Returns the corresponding hash of the supplied path name
- `set_path_hash(self, path, cls)` 
  - Sets the class that's associated with the supplied hash

## How to dynamically load the modules

module `importlib`

link: https://docs.python.org/3/library/importlib.html

## How to load/unload the commands of the plugin 

```python
import argparse
import cmd2
from cmd2 import CommandSet, with_argparser, with_category, with_default_category

class ExampleApp(cmd2.Cmd):
	"""
	CommandSets are loaded via the `load` and `unload` commands
	"""

	def __init__(self, *args, **kwargs):
		# gotta have this or neither the plugin or cmd2 will initialize
		super().__init__(*args, auto_load_commands=False, **kwargs)
		
		self._fruits = LoadableFruits()
		self._vegetables = LoadableVegetables()

	load_parser = cmd2.Cmd2ArgumentParser()
	load_parser.add_argument('cmds', choices=['fruits', 'vegetables'])

	@with_argparser(load_parser)
	@with_category('Command Loading')
	def do_load(self, ns: argparse.Namespace):
		if ns.cmds == 'fruits':
			try:
				self.register_command_set(self._fruits)
				self.poutput('Fruits loaded')
			except ValueError:
				self.poutput('Fruits already loaded')

		if ns.cmds == 'vegetables':
			try:
				self.register_command_set(self._vegetables)
                self.poutput('Vegetables loaded')
			except ValueError:
				self.poutput('Vegetables already loaded')

	@with_argparser(load_parser)
		def do_unload(self, ns: argparse.Namespace):
        	if ns.cmds == 'fruits':
            	self.unregister_command_set(self._fruits)
				self.poutput('Fruits unloaded')
			if ns.cmds == 'vegetables':
				self.unregister_command_set(self._vegetables)
				self.poutput('Vegetables unloaded')
```

