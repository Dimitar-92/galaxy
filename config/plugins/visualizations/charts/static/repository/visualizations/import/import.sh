#!/bin/bash

if [ $# -lt 2 ]
then
  echo "Usage: $0 plugin_name install_commands_file_path"
  exit 1
fi

cd "../"
mkdir "$1"
cd "$1"
mkdir "config"
mkdir "static"
mkdir "templates"
cd "static"
sh "$2"