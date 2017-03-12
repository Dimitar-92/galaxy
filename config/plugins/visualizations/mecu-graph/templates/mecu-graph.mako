<%
    root = h.url_for( "/" )
    app_root = root + "plugins/visualizations/mecu-graph/static/"
%>
<!DOCTYPE HTML>
<html>
    <head>
        <title>${hda.name | h} | ${visualization_name}</title>
        <!-- 
        Add needed scripts for visualization using the mako notation, example:

        ${h.javascript_link( app_root + 'plugin.js' )}
        -->

        <style>
            #mecuGraph {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0px;
                left: 0px;
            }
        </style>

        <!-- end -->

        <!-- Needed jquery plugin if you want to use the document ready function -->
        ${h.javascript_link('https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js')}
        ${h.javascript_link( app_root + 'node_modules/mecu-graph/build/mecu-graph.js' )}
        <script>
        $(document).ready(function() {

            // variables needed for data extraction
            var hdaName = '${ hda.name | h }';
            var hdaId = '${trans.security.encode_id( hda.id )}';
            var hdaExt = '${hda.ext}';
            var rawUrl = '${h.url_for( controller="/datasets", action="index" )}';
            var apiUrl = '${h.url_for( "/" ) + "api/datasets"}';

            
            // build cases for different data types as shown below

            var dataUrl;

            switch( hdaExt ){

                case 'json':
                    dataUrl = rawUrl + '/' + hdaId + '/display?to_ext=json';
                    $.ajax(dataUrl, {
                        dataType    : 'json',
                        success     : parseJson,
                        error       : errorHandler
                    });
                    break;

                default:
                    dataUrl = rawUrl + '/' + hdaId + '/display?to_ext=json';
                    $.ajax(dataUrl, {
                        dataType    : 'json',
                        success     : parseJson,
                        error       : errorHandler
                    });
            }

        });

        function parseJson(data){
            // default function for parsing
            console.log(data);
            var graph = new MecuGraph({element: "#mecuGraph"});
            t = graph.add(data);
        };

        function errorHandler(){
            // default function for error handling
            console.log("error");
            alert("An error occured while trying to parse your json file.");
        }
        </script>
    </head>
    <body>
        <!-- Should be customized to what the plugin needs -->
        <div id="container" style="display:flex">
            <div id="mecuGraph">
            </div>
        </div>
    </body>
</html>
