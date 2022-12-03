# DataStore

A datastore option is a type of variable that can be set by the user, allowing various components of the framework to be more configurable during use.  

![](D:\STUDY\JHU\ISI\CAPSTONE\DOC\images\datastore.svg)

## Module Level

Module-level means only that particular module you’re using remembers that datastore option, no other components will know about it

## Global Level

Global means all the modules can use that option, which can be set by using the command.

## Option Level (World/Module)

For doing module development, the best source you can trust is the 'ModuleDataStore' object. This object has a specific load order before handing you the option you want: if the option can be found in the module’s datastore, it will give you that. If not found, it will give you the one from framework ('DataStore'). The following is an example of how to read a datastore option in a module:

## DataStore's internal state attribute

- **imported**

Returns the value of attribute imported (true or false)

- **imported_by**

Returns the value of attribute imported_by

- **options**

Returns the value of attribute options



#### **`import_option (key, val)`** 

#### `import_options(options)`

This method is a helper method that imports the default value for all of the supplied options

#### `import_options_from_hash``()`

Imports options from a hash and stores them in the datastore

#### `from_file (path)`

Imports datastore values from the specified file path using the supplied name

#### `to_file (path)`

Persists the contents of the data store to a file

#### `find_key_case (key)`

 Scan each key looking for a match

#### `to_s (delim=' ')`

Serializes the options in the datastore to a string.

#### `update_value (k, v)`

#### `store(k, v)`

store key values into hash table.

#### `delete(k)`

delete k values from key

#### `clear()`

Completely clear all values in the hash

```
delete(k) for each key
```

#### `clear_non_user_defined()`

Remove all imported options from the data store.

```python
if #imported_by[key] != 'self' 
​    self.delete(k)
```

#### `copy()`

Return a deep copy of this datastore.



### [Metasploit Object Model | Offensive Security](https://www.offensive-security.com/metasploit-unleashed/metasploit-object-model/)

### [metasploit-framework/data_store.rb at master](https://github.com/rapid7/metasploit-framework/blob/master/lib/msf/core/data_store.rb)

### [How to use datastore options](https://docs.metasploit.com/docs/development/developing-modules/module-metadata/how-to-use-datastore-options.html)

### [Class:Msf:DataStore - Documentation by YARD 0.9.28](https://docs.metasploit.com/api/Msf/DataStore.html)

