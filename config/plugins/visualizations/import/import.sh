#!/bin/bash

if [ $# -lt 1 ]
then
  echo "Usage: $0 plugin_name"
  exit 1
fi

file_contents=`cat extras/install_commands.sh`
unmodified="#!/bin/bash

# insert import commands below
# Example:
# npm install mecu-graph"

# testt the contents of the install_commands.sh script
if [ "$file_contents" = "$unmodified" ]
then
	echo "You still haven't modified the install_commands.sh file."
	exit 1
fi

directory="../$1"

# testt the plugin already exists
if [ -d "$directory" ]
then
	echo "The plugin folder already exists."
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
echo "Import completed."