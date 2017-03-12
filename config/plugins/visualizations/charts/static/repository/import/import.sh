#!/bin/bash

if [ $# -lt 1 ]
then
  echo "Usage: $0 plugin_name(Do not use special symbols like -,/,! etc.)"
  exit 1
fi

extras="import/extras"

cd "../plugins/biojs/"
# make the main plugin directories
mkdir "$1"
cd "$1"
# start - install the plugin
mkdir node_modules
cd node_modules
sh "../../../../import/extras/install_commands.sh"
cd "../../.."
# end
cd "../visualizations/biojs/"
# make the main visualization directories
mkdir "$1"
cd "$1"
# start - create the config.js
cp "../../../$extras/configex.js" "config.js"
# end
# start - Edit config.js
eval "sed -i 's#Your Project Title#$1#g' 'config.js'"
# end
# start - create the wrapper.js
cp "../../../$extras/wrapperex.js" "wrapper.js"
# end
# start - create the logo.png
cp "../../../$extras/logoex.png" "logo.png"
# end
# start - Edit registry.json
cd "../../.."
eval "sed -i 's#\"msa\"#\"msa\", \"$1\"#g' 'registry.json'"
# end

