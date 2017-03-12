===============================================================
Automated visualization import through the import shell script
===============================================================

Authors of the import plugin:
- Dimitar Jovanov <dimitar.jovanov.92@gmail.com>
- Aveg Chaudhary <aveg101@gmail.com>
If you have any problems while using this plugin do not hesitate to contact us.

Mentors and supervisors:
- Joachim Wolff <wolffj@informatik.uni-freiburg.de>
- Clemens Blank <blankclemens@gmail.com>
- Björn Grüning <bjoern.gruening@gmail.com>

Repository:
https://github.com/Dimitar-92/galaxy

Import steps:

Step 1: Modify the "extras/install_commands.sh" file by adding the needed install instructions for your plugin.
Step 2: Run the import.sh script using a terminal. (If you are in the import folder. >sh import.sh <plugin_name>)
Step 3: After the "Import completed." message has appeared, open your plugin folder. It will be locatetd in the main visualization folder. The path will be: visualization/<plugin_name>.
Step 4: The structure of the folder will be:

<plugin_name>/
├── config/
│   └── <plugin_name>.xml // main config file for the plugin
├── static/
│   └── node_modules/
│   	└──> // sub folders with all of the script files
└── templates/
	└── <plugin_name>.mako // treated as the main html file

Step 5: Open the config/<plugin_name>.xml and modify the datatypes associated with your plugin. More info on the available datatypes and how to modify them at: https://galaxyproject.org/develop/visualizations/#datatype
Step 6: Open the config/<plugin_name>.mako and follow the instructions to modify the file accordingly. In most cases when importing the plugin with the script import tag it is enough to import the main script file.
Step 7: The plugin is imported and should work if the steps were followed in detail. You can run your plugin by uploading a file which is of the type specified in the config file. When the file shows on the right hand side in your history click on it and when the sub window shows click on the visualization icon the plugin name will appear. By clicking on it your plugin will be run on the main window.