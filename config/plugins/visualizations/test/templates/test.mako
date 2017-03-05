<%
    root = h.url_for( "/" )
    app_root = root + "plugins/visualizations/test/static/"
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
        $(document).ready(function() {

            // variables needed for data extraction
            var hdaName = '${ hda.name | h }';
            var hdaId = '${trans.security.encode_id( hda.id )}';
            var hdaExt = '${hda.ext}';
            var rawUrl = '${h.url_for( controller="/datasets", action="index" )}';
            var apiUrl = '${h.url_for( "/" ) + "api/datasets"}';

            
            // build cases for different data types as shown below
            <!-- start
            Example:

            var dataUrl;

            switch( hdaExt ){
                case 'txt':
                    dataUrl = rawUrl + '/' + hdaId + '/display?to_ext=txt';
                    $.ajax(dataUrl, {
                        dataType    : 'text',
                        success     : parseTextMatrix,
                        error       : errorHandler
                    });
                    break;

                case 'json':
                    dataUrl = rawUrl + '/' + hdaId + '/display?to_ext=json';
                    $.ajax(dataUrl, {
                        dataType    : 'json',
                        success     : parseJson,
                        error       : errorHandler
                    });
                    break;

                default:
                    dataUrl = apiUrl + '/' + hdaId;
                    $.ajax(dataUrl, {
                        dataType    : 'json',
                        success     : parseNodeEdge,
                        error       : errorHandler,
                        data : {
                            data_type : 'raw_data',
                            provider  : 'node-edge'
                        }
                    });
            }

            end -->

        });
    </head>
    <body>
        <!-- Should be customized to what the plugin needs -->
        <div id="container" style="display:flex">
        </div>
    </body>
</html>
