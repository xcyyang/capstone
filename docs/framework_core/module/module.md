# Module

## Introduction

The module base class is responsible for providing the common interface that is used to interact with modules at the most basic levels, such as by inspecting a given module's attributes (name, dsecription, version, authors, etc) and by managing the module's data store.

## Attributes

### CheckCode

- **Unknown**: Can't tell if the target is exploitable or not.

- **Safe**: The target is not exploitable.

- **Detected**: The target service is running, but could not be validated.

- **Appears**: The target appears to be vulnerable.

- **Vulnerable**: The target is vulnerable.

- **Unsupported**: This exploit does not support check.

### Stance

- **Aggressive**
- **Passive**

## Functions

####  `Initialize()`

Initialize basic info for module from `config.yml`

- name
- author
- description
- network
- version
- reference
- privileged?
- license

Initialize and register options

- networks
- options
- addresses

Initialize datastore

#### `replicant()`

Creates a fresh copy of an instantiated module

#### `print_status()`

#### `print_error()`

#### `print_good()`

#### `print_line()`

#### `print_line_prefix()`

#### `get_file_path()`

#### `exploit()`

#### `check()`

#### `setup()`