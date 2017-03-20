// Give the path to your main javascript file which is installed in the plugins/biojs/YourVisualizationName folder
    define( [ 'plugins/biojs/tsne/node_modules/biotsne/lib/tsne_vis' ], function(tsne) {
    return Backbone.Model.extend({
        initialize: function( options ) {
            var chart    = options.chart;
            var dataset  = options.dataset;
            var settings = options.chart.settings;
             var opts = {path:dataset.download_url, width:"700", height:"500", id:options.targets[ 0 ]};
             tsne.run(opts);
             chart.state( 'ok', 'Chart drawn.' );
             options.process.resolve();

        } 
    });
});
