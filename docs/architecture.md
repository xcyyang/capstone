# Architecture

## Usage Diagram

![](D:\STUDY\JHU\ISI\CAPSTONE\DOC\images\usage_diagram.svg)

## Overall Architecture

![](D:\STUDY\JHU\ISI\CAPSTONE\DOC\images\overall_architecture.svg)

### Plugin

This module represents an abstract plugin that can be loaded into the context of a framework instance. Plugins are meant to provide an easy way to augment the feature set of the framework by being able to load and unload them during the course of a framework's lifetime.

### Module

The module base class is responsible for providing the common interface that is used to interact with modules at the most basic levels, such as by inspecting a given module's attributes (name, description, version, authors, etc) and by managing the module's data store.

![](D:\STUDY\JHU\ISI\CAPSTONE\DOC\images\module_eg.svg)

#### Procedures of Testing a Module

![](D:\STUDY\JHU\ISI\CAPSTONE\DOC\images\module_testing_procedures.svg)

### Interface

#### Interactive Command Shell

Provide an interactive command shell for basic commands, such as module loading, plugin loading.



## [Github-python-cmd2](https://github.com/python-cmd2/cmd2)

## [cmd2 2.4 documentation](https://cmd2.readthedocs.io/en/stable/)
