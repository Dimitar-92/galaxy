define( [ 'plugins/biojs/testen/node_modules/visualize_piechart/src/vis' ], function(Vis) {
    return Backbone.Model.extend({
        initialize: function( options ) {
            var chart    = options.chart;
            var dataset  = options.dataset;
            var settings = options.chart.settings;
            console.log(Vis);
            data= [

                    {
                        "direction": null,
                        "object": "disease1",
                        "type": "diseases1",
                        "value": 0.7139138126389065,
                        "subject": "EFO_0004591"
                    },{
                        "direction": null,
                        "object": "disease1",
                        "type": "diseases3",
                        "value": 0.7139138126389065,
                        "subject": "EFO_0004591"
                    }
                ]

            var v = Vis()
                // .size(500)//250-1000
                // .size(2000)
                // .size(250)
                // .size(450)
                // .setPointSize(5)
                // .setPieColors(["#ff0000"])
                // .setPointColor('#fff')
                // .setPointColor('rgb(200,132,200)')
                // .setFontSize('10px')
                .read("http://partizanos.github.io/VizTargetDiseases/data/sample.json");
                // .read(data);
            
            v(document.getElementById(options.targets[ 0 ] + ""));
            chart.state( 'ok', 'Chart drawn.' );
            options.process.resolve();

            // d3.select("#changeType")
            //     .on("change", function () {
            //         console.log(this.value);
            //         v.filter_type(this.value);
            //     })

            // setTimeout(function () {
            //     v.filter_type("shared-phenotype");
            // }, 1000);
            //
            // setTimeout(function () {
            //     v.filter_type(null);
            // }, 2000);

        }
    });
});