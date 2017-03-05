#!/bin/bash

if [ $# -lt 1 ]
then
  echo "Usage: $0 plugin_name"
  exit 1
fi

extras="import/extras"

cd "../"
# make the main plugin directories
mkdir "$1"
cd "$1"
# make the necessary sub-directories
mkdir "config"
mkdir "static"
mkdir "templates"
# start - create the config.xml
cd "config"
cp "../../$extras/config.xml" "$1.xml"
eval "sed -i 's/<plugin-name>/$1/g' '$1.xml'"
cd ".."
# end
# start - create the template.mako
cd "templates"
cp "../../$extras/template.mako" "$1.mako"
eval "sed -i 's/<plugin-name>/$1/g' '$1.mako'"
cd ".."
# end
# start - install the plugin
cd "static"
sh "../../import/extras/install_commands.sh"
cd ".."
# end