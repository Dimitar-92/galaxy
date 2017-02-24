define( [ 'plugins/biojs/blasterjs/biojs-vis-blasterjs/build/blasterjs' ], function() {
    return Backbone.Model.extend({
        initialize: function( options ) {
            alert("Run 3");
            var chart    = options.chart;
            var dataset  = options.dataset;
            var settings = options.chart.settings;
            //Simple example
            var a = document.createElement('a');
            a.href='http://sing.ei.uvigo.es/blasterjs/blast.out';
            a.setAttribute("target", "_blank");
            a.text='Download an example file';
            a.setAttribute("download", "blast.out");
            var input = document.createElement('input');
            input.id = 'blastinput';
            input.setAttribute("type", "file");

            var multiple = document.createElement('div');
            multiple.id = "blast-multiple-alignments";
            var table = document.createElement('div');
            table.id = "blast-alignments-table";
            var single = document.createElement('div');
            single.id = "blast-single-alignment";

            var rootDiv = document.getElementById(options.targets[0]+"");

            rootDiv.appendChild(a);
            rootDiv.appendChild(document.createElement('br'));
            rootDiv.appendChild(document.createElement('br'));
            rootDiv.appendChild(input);
            rootDiv.appendChild(multiple);
            rootDiv.appendChild(table);
            rootDiv.appendChild(single);

            var instance = blasterjs({
                 input: "blastinput",
                 multipleAlignments: "blast-multiple-alignments",
                 alignmentsTable: "blast-alignments-table",
                 singleAlignment: "blast-single-alignment"
            });
            options.process.resolve();
            chart.state( 'ok', 'Chart drawn.' );
            /*var m = new msa.msa({
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
            });*/
        }
    });
});