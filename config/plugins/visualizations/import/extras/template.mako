<%
    root = h.url_for( "/" )
    app_root = root + "plugins/visualizations/<plugin-name>/static/"
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
            <!-- 
            -start-
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
                    dataUrl = apiUrl + '/' + hdaId;
                    $.ajax(dataUrl, {
                        dataType    : 'json',
                        success     : parse,
                        error       : errorHandler,
                    });
            }

            -end-
            -->

        });

        // use these functions to parse the predefined cases
        <--
        -start-
        
        function parse(data){
            // default function for parsing
        };

        function errorHandler(){
            // default function for error handling
        }
        
        -end- 
        -->
        </script>
    </head>
    <body>
        <!-- Should be customized to what the plugin needs -->
        <div id="container" style="display:flex">
        </div>
    </body>
</html>
