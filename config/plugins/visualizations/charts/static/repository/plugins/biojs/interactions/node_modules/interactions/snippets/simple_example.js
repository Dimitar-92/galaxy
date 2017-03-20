// if you don't specify a html file, the sniper will generate a div
var app = require("biojs-vis-interactions-d3");
var instance = new app({
  target: yourDiv.id,
}); 

for (var pid=1;pid<=15;pid++)
  instance.addProtein({ "id":pid,"name":pid,"showLegend":false,"typeLegend":"id","organism":"human"+pid%3,"features":{"f1":"val1","f2":"val2","f3":"val3"}});

for (var pid=1;pid<=30;pid++)
  instance.addInteraction(Math.floor((Math.random()*15)+1),Math.floor((Math.random()*15)+1) ,{score:Math.random()});

instance.restart();
