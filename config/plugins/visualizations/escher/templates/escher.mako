<%
    root = h.url_for( "/" )
    app_root = root + "plugins/visualizations/escher/static/"
%>
<!DOCTYPE HTML>
<html>
    <head>
        <title>${hda.name | h} | ${visualization_name}</title>
        <!-- 
        Add needed scripts for visualization using the mako notation, example:

        ${h.javascript_link( app_root + 'plugin.js' )}
        -->

        <!-- end -->

        <meta charset="UTF-8">
        <link type="text/css" rel="stylesheet" href="https://cdn.rawgit.com/zakandrewking/escher/master/css/src/builder.css">


        ${h.javascript_link('https://cdn.rawgit.com/zakandrewking/escher/master/js/dist/escher.min.js')}
        ${h.javascript_link('https://d3js.org/d3.v3.min.js')}
        ${h.javascript_link('https://wzrd.in/bundle/escher-vis@1.6.0-beta.3')}

        <!-- Needed jquery plugin if you want to use the document ready function -->
        ${h.javascript_link('https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js')}

        <script>

        //main js function for dataset import
        $(document).ready(function() {

            // variables needed for data extraction
            var hdaName = '${ hda.name | h }';
            var hdaId = '${trans.security.encode_id( hda.id )}';
            var hdaExt = '${hda.ext}';
            var rawUrl = '${h.url_for( controller="/datasets", action="index" )}';
            var apiUrl = '${h.url_for( "/" ) + "api/datasets"}';

            
            // build cases for different data types as shown below
            Example:

            var dataUrl;

            switch( hdaExt ){

                case 'json':
                    dataUrl = rawUrl + '/' + hdaId + '/display?to_ext=json';
                    $.ajax(dataUrl, {
                        dataType    : 'json',
                        success     : parse,
                        error       : errorHandler
                    });
                    break;

                default:
                    dataUrl = apiUrl + '/' + hdaId + '/display?to_ext=json';
                    $.ajax(dataUrl, {
                        dataType    : 'json',
                        success     : parse,
                        error       : errorHandler,
                    });
            }

        });

        // use these functions to parse the predefined cases
        
        function parse(data){
            var rootDiv = document.getElementById('snippetDiv');
            /* global rootDiv, d3 */

            var escher = require('escher-vis');

            escher.Builder(data, null, null, d3.select(rootDiv), {
                fill_screen: true,
                menu: 'zoom',
                never_ask_before_quit: true,
            });
            console.log("success");
        };

        function errorHandler(){
            // default function for error handling
            console.log("error");
        }
        </script>
    </head>
    <body>
        <!-- Should be customized to what the plugin needs -->
        <div id="container" style="display:flex">
            <div id='snippetDiv'></div>
        </div>
    </body>
</html>
