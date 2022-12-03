# ModuleManager

## Introduction

Manage the interaction with modules in terms of loading and instantiation

## Attributes

### ModuleSet

A module set contains zero or more named module classes.

#### 	`create()`

​	Create an instance of the supplied module by its name.

#### 	`is_valid()`

​	Checks to see if the supplied module name is valid.

## Functions

#### `initialize()`

Initialize ModuleManager with paths to module.

Initialize a ModuleSet.

#### `create()`

Creates a module using the supplied name.

#### `get_loaded_modules()`

Return the set of loaded module classes.

#### `get_failed_modules()`

Return the set of failed modules.

#### `add_module_path()`

Adds a path to be searched for new modules.

#### `remove_module_path()`

Removes a path from which to search for modules.

#### `reload_module()`

Reloads modules from all module paths

#### `reload_modules()`

Reloads the module specified