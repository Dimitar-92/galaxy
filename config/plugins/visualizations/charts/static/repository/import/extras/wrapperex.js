// Give the path to your main javascript file which is installed in the plugins/biojs/YourVisualizationName folder
    //Example: define( [ 'plugins/biojs/biojs.msa' ], function(msa) {
    return Backbone.Model.extend({
        initialize: function( options ) {
            var chart    = options.chart;
            var dataset  = options.dataset;
            var settings = options.chart.settings;
             // Write the code to initiate the plugin Example:

                /*
                var m = new msa.msa({
                el: $( '#'  + options.targets[ 0 ] ),
                vis: {  conserv: settings.get( 'conserv' ) == 'true',
                        overviewbox: settings.get( 'overviewbox' ) == 'true' },
                menu: 'small',
                bootstrapMenu: settings.get( 'menu' ) == 'true'
            });
            m.u.file.importURL( dataset.download_url, function() {
                m.render();
                chart.state( 'ok', 'Chart drawn.' );
                options.process.resolve();
            });
                 */
        } 
    });
});
