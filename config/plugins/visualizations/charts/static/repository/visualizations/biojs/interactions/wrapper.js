// Give the path to your main javascript file which is installed in the plugins/biojs/YourVisualizationName folder
    define( [ 'plugins/biojs/interactions/node_modules/interactions/lib/Biojs.InteractionsD3' ], function(interactions) {
    return Backbone.Model.extend({
        initialize: function( options ) {
            var chart    = options.chart;
            var dataset  = options.dataset;
            var settings = options.chart.settings;
           var yourDiv = document.getElementById(options.targets[ 0 ] + "");

var instance = new interactions({
  target: yourDiv.id,
}); 

for (var pid=1;pid<=15;pid++)
  instance.addProtein({ "id":pid,"name":pid,"showLegend":false,"typeLegend":"id","organism":"human"+pid%3,"features":{"f1":"val1","f2":"val2","f3":"val3"}});

for (var pid=1;pid<=30;pid++)
  instance.addInteraction(Math.floor((Math.random()*15)+1),Math.floor((Math.random()*15)+1) ,{score:Math.random()});

instance.restart();
chart.state( 'ok', 'Chart drawn.' );
            options.process.resolve();

        } 
    });
});
