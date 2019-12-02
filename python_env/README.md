# Python Environments

## Python packages
egg or wheel

## PIP

A tool to install Python packages.
Common functions are:
```sh
pip install <package>
pip list
pip freeze > <requirement file>
pip install -r <requirement file>
```

However this will install the packages globally. 
The location of each package can be found with 
```sh
pip show <package>
```
On my mac, packages are in either `/usr/local/lib/python2.7/site-packages` or `$HOME/Library/Python/2.7/lib/python/site-packages`. The prior is supposed to be for all users, and the later is just for single user. I have no idea how pip decides which package goes to which folder.


## virtualenv
Multiple project with different version of the same package.
Usage
```sh
virtualenv <env name>   # create a folder with env name
source <env name>/bin/activate
```
activate is a shell script. This script will
1. create a deactivate function
2. change your $PATH so its first entry is the virtualenv’s bin/ directory. 
2. modify your shell prompt to indicate which environment is currently active

Since it's a shell script that changes shell environment in-place, it needs `source`.
Now if you run `pip install <package>`, it will install the packages under `<env>/lib/python2.7/site-packages/` directory.

## virtualenvwrapper

Wrapper around virtualenv. It's a shell script with some alias to virtualenv commends. It also put all virtualenv folders to `~/.virtualenvs` folder.

## venv
virtualenv for Python 3.3 or later. Now a standard Python library.
```sh
python3 -m venv  <env name>   # create a folder with env name
source <env name>/bin/activate
```

## pyenv
pyenv is mainly for switching between multiple Python versions . It intercepts Python commands using shim executables injected into your PATH.

## pipenv
