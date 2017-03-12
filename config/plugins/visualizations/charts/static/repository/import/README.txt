===============================================================
Automated visualization import through the import shell script
===============================================================

Authors of the import plugin:
- Aveg Chaudhary <aveg101@gmail.com>
- Dimitar Jovanov <dimitar.jovanov.92@gmail.com>
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
Step 3: The structure of the folder will be:

<charts>/<static>/<repository>/
├── plugins/biojs/plugin_name/
│   └── node_modules //sub folders with all of the script files
├── visualizations/biojs/plugin_name/
     │ │└── config.js
     │ │    └──> // Configuration file in which you fill in the description and data types supported by the plugin
     │ └─── wrapper.js
     │      └──> // Main js file where you write the code to instanciate your plugin 
     │
     └───── logo.png
            └──> // The logo of your plugin to be dislayed in galaxy

Step 4: Open the config.js and modify the description of your plugin and the datatypes associated with your plugin. More info on the available datatypes and how to modify them at: https://galaxyproject.org/develop/visualizations/#datatype
Step 5: Open the wrapper.js and follow the instructions to modify the file accordingly. In most cases when importing the plugin with the script import tag it is enough to import the main script file.
Step 6: Open terminal and go to your galaxy root directory and run the command: make charts. It will take 1-2 minutes to build the entire structure.
Step 7: The plugin is imported and should work if the steps were followed in detail. You can run your plugin by uploading a file which is of the type specified in the config file. When the file shows on the right hand side in your history click on it and when the sub window shows click on the charts icon. A new window will open with your plugin name and logo. Click on it to run the plugin.
