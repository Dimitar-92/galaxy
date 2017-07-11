var otApi = require("cttv.api");
var data;
var api = otApi()
   .prefix ("https://www.targetvalidation.org/api/");
var url = api.url.associations({
   diseases: "EFO_0001071",
   outputstructure: "flat",
   facets: false,
   size: 10000
});
api.call(url)
   .then (function (resp) {
       // Do whatever with resp
       console.log(resp);
   	   data=resp;
   });