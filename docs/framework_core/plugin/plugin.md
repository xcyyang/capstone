# Plugin

## Abstract Plugin Class

- `__init__(self, framework, **kwargs)`
- plugin info
  - `self.name` The short name of the plugin 
  - `self.summary` The full name of the plugin
  - `self.desc` The short description of the plugin
  - `self.author` The author of the plugin
  - `self.email` The author's email of the plugin
  - `self.ref` The related reference links of the plugin
  - `self.category` The type of the plugin
  - `self.target` The target network used by the plugin
- plugin argument
  - add argument to argparser
- set framework instance
- `intro(self)`
  - show all information of the plugin
- `print(self, msg='')` Prints a message with no decoration
- `print_good(self, msg='')` Prints a good message
- `print_error(self, msg='')` Prints an error message
  - alias `print_bad`
- `print_warning(self, msg='')` Prints a warning
- `print_debug(msg='')` Prints a debug message
- `cleanup` Allows the plugin to clean up as it is being unloaded

### How to write specific plugin

- import module `plugin`, inherits from class `plugin`
- use module `cmd2` to write specific commands
  - function name `do_command_name`
  - command description `'''commnd description'''` at the first line inside the function content
  - link: https://cmd2.readthedocs.io/en/latest/index.html
- Sample

```python
import cmd2
from cmd2 import CommandSet, with_argparser, with_category, with_default_category

@with_default_category('Vegetables')
class LoadableVegetables(CommandSet):
	def __init__(self):
		super().__init__()

	def do_arugula(self, _: cmd2.Statement):
		self._cmd.poutput('Arugula')

	def do_bokchoy(self, _: cmd2.Statement):
		self._cmd.poutput('Bok Choy')
```

