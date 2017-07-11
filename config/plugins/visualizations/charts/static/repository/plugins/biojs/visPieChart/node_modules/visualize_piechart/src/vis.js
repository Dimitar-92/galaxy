// var cttvApi = require('cttv.api');
var tntTooltip = require('tnt.tooltip');
// var d3 = require('d3');
// var flowerView = require("cttv.flowerView");
//add necessary css from js so that the user doesn have to explicitely include it
//if he includes it css is not imported 
var cssId = 'myCss'; 
if (!document.getElementById(cssId))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = "../build/viz_diseases.css";
    link.media = 'all';
    head.appendChild(link);
}



var vis = function() {
    "use strict";
    var config = {
        allColorsExp:[],
        // allColorsExp:[],
        fontSize:"10px",
        pointSize:3.5,
        pointColor:"navy",
        size: 700,
        filter: null,
        data: [

            {
                "direction": null,
                "object": "disease1",
                "type": "diseases1",
                "value": 0.7139138126389065,
                "subject": "EFO_0004591"
            }, {
                "direction": null,
                "object": "disease1",
                "type": "diseases2",
                "value": 0.7139138126389065,
                "subject": "EFO_0004591"
            }, {
                "direction": null,
                "object": "disease1",
                "type": "diseases3",
                "value": 0.7139138126389065,
                "subject": "EFO_0004591"
            }
        ]
    };
    var graph;

    var labelSize = 100;
    var transitionSpeed = 1000;
    var points, labels, links;
    // var api = cttvApi()
    //     .prefix("http://test.targetvalidation.org:8899/api/")
    //     .appname("cttv-web-app")
    //     .secret("2J23T20O31UyepRj7754pEA2osMOYfFK");
    var dataTypes;
    var render = function(div) {
        var graphSize = config.size - (labelSize * 2);
        var radius = graphSize / 2;


        d3.select(div)
            .append("div")
            .attr("id", "sequence")
            .attr("width", config.size)
            .attr("height", 30)

        var svg = d3.select(div)
            .append("svg")
            .attr("width", config.size)
            .attr("height", config.size)
            .append("g")
            .attr("transform", "translate(" + (radius + labelSize) + "," + (radius + labelSize) + ")")
            .attr("id", "pieChart")

        var circleColorScale = d3.scale.linear()
            .domain([0, 1])
            .range([d3.rgb(0, 82, 163), d3.rgb(182, 221, 252)]);

        // d3.json("../data/sample.json", function(error, resp) {
        //     var data = resp.data;
        //     render.update(data, updateScales(radius), 'pieChart');
        // });
        // d3.json("../data/sample.json", function(error, resp) {
        //     var data = resp.data;
        // });

        var b = {
            w: 100,
            h: 30,
            s: 3,
            t: 10
        };

        render.update = function(data, circleScales, graphicMode, vizType) {

            if (graphicMode == 'pieChart') {
                d3.selectAll("#sequence svg").remove();
                d3.selectAll("g text").remove();
                d3.selectAll("line").remove();
                d3.selectAll("circle").remove();
                updateBreadcrumbs([{ name: 'Home' }]);

                function createComparator(property) {
                    return function(a, b) {
                        if (a[property] > b[property]) return 1
                        if (a[property] < b[property]) return -1
                        return 0
                    };
                }

                data.sort(createComparator('type'))

                var types = {}
                for (var i = 0; i < data.length; i++) {
                    if (types[data[i].type] == undefined)
                        types[data[i].type] = []
                    types[data[i].type].push(data[i])
                }
                // portion of circle per data type
                dataTypes = [];
                for (i in types) {
                    dataTypes.push({
                        "type": i,
                        "population": types[i].length / data.length,
                        "count": types[i].length
                    })
                }
                dataTypes.sort(function compare(a, b) {
                    if (a.population > b.population) return -1;
                    if (a.population < b.population) return 1;
                    return 0;
                })

                //Create colors mapping to data Types
                var colorsExpr = [];
                for (i = 0; i < 10; i++) {
                    colorsExpr.push([d3.scale.category20().range()[i * 2], d3.scale.category20().range()[i * 2 + 1]])
                }


                function shadeColor2(color, percent) {   
                    var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
                    return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
                }
                // config.allColorsExp;
                var allColorsExp = {};
                if(config.allColorsExp.length!=0){
                    for(i=0; i<config.allColorsExp.length; i++){
                        allColorsExp[dataTypes[i].type] = [
                        config.allColorsExp[i],
                        shadeColor2(config.allColorsExp[i], 0.8)
                        // d3.scale.category20().range()[i % 10 * 2 + 1],
                        // d3.scale.category20().range()[i % 10 * 2]
                    ]
                    }
                }
                for (i = config.allColorsExp.length; i < dataTypes.length; i++) {
                    allColorsExp[dataTypes[i].type] = [
                        d3.scale.category20().range()[i % 10 * 2],
                        d3.scale.category20().range()[i % 10 * 2 + 1]
                        // d3.scale.category20().range()[i % 10 * 2 + 1],
                        // d3.scale.category20().range()[i % 10 * 2]
                    ]
                }

                function circleColorScaleExp(type) {
                    return d3.scale.linear()
                        .domain([0, 1])
                        .range(allColorsExp[type]);
                }

                function giveArcColor(type) {
                    return d3.scale.linear()
                        .domain([0, 105])
                        .range([allColorsExp[type][0], allColorsExp[type][1]])
                }
                //create arcs equivalent of rings
                var arcs = [];
                for (var i = 0; i < 1; i++) {
                    var arc = d3.svg.arc()
                        .outerRadius(radius - (i * radius))
                        .innerRadius(radius - (i * radius) - radius);

                    arcs.push(arc);
                }

                var labelArc = d3.svg.arc()
                    .outerRadius(radius - 40)
                    .innerRadius(radius - 40);

                var pie = d3.layout.pie()
                    .sort(null)
                    .value(function(d) {
                        return d.population;
                    });

                var arc = d3.svg.arc()
                    .outerRadius(radius)
                    .innerRadius(0)

                var path = svg
                    .selectAll("path")
                    .data(pie(dataTypes))
                    .enter().append("path")
                    //Give color based on datatype
                    .attr("fill", function(d, i) {
                        return allColorsExp[d.data.type][0];
                    })
                    .attr("d", arc)
                    .each(function(d) { this._current = d; }) // store the initial values
                    .on("click", function(d) {
                        d3.selectAll("#pieChart text").style('opacity', 0);

                        var tempDataTypes = JSON.parse(JSON.stringify(dataTypes));
                        for (var i in tempDataTypes) {
                            if (tempDataTypes[i].type == d.data.type)
                                tempDataTypes[i].population = 1;
                            else {
                                tempDataTypes[i].population = 0;
                            }
                        }

                        path = path.data(pie(tempDataTypes))
                            .attr("fill", function(d, i) {
                                return allColorsExp[(d.data.type)][0];
                            });

                        path.transition().duration(500).attrTween("d", function(a) {
                            var i = d3.interpolate(this._current, a) //,
                                // k = d3.interpolate(arc.outerRadius()(), newRadius);
                            this._current = i(0);
                            return function(t) {
                                return arc(i(t));
                                // return arc.innerRadius(k(t) / 4).outerRadius(k(t))(i(t));
                            };
                        });
                        //////////////////////////
                        setTimeout(
                            function() {
                                var selDataType = d.data.type;
                                updateBreadcrumbs([{ name: 'Home', depth: 0 }, { name: selDataType, depth: 1 }]);

                                // d3.selectAll("g path").remove();
                                //////////
                                graph = d3.select("#pieChart")
                                    //////////////
                                var rings = graph
                                    .selectAll(".ring")
                                    .data(circleScales);


                                rings
                                    .enter()
                                    .append("path")
                                    /////////
                                    .style('opacity', 0)
                                    /////
                                    .attr("class", "ring")
                                    .attr("fill", function(d) {
                                        return circleColorScaleExp(selDataType)(d.domain()[0]);
                                    })
                                    .attr("d", function(d) {
                                        var arc = d3.svg.arc()
                                            .innerRadius(d.range()[0])
                                            .outerRadius(d.range()[1])
                                            .startAngle(0)
                                            .endAngle(2 * Math.PI);
                                        return arc(d);
                                    })
                                    .attr("id", function(d, i) {
                                        return "ring" + i;
                                    })


                                rings.transition()
                                    .delay(function(d, i) {
                                        return i * 50;
                                    })
                                    .duration(100)
                                    .style('opacity', 1);

                                rings
                                    .on("click", function(d, i) {
                                        // One ring has been selected
                                        var selected = d3.select(this);
                                        if (selected.classed("zoomed")) {
                                            selected.classed("zoomed", false);

                                            render.update(data, updateScales(radius), 'rings', selDataType);
                                        } else {
                                            selected.classed("zoomed", true);

                                            render.update(data, updateScales(radius, d), 'rings', selDataType);
                                        }
                                    });

                                drawData(selDataType)

                                //on background change bring points to foreground
                                d3.selection.prototype.moveToFront = function() {
                                    return this.each(function() {
                                        this.parentNode.appendChild(this);
                                    });
                                };
                                d3.selectAll('circle').moveToFront()
                                d3.selectAll('line').moveToFront()
                            }, 600);
                    });

                path.each(function(d) {
                    svg.append("text")
                        .attr("fill", "#fff")
                        .style("margin", "3px")
                        .attr("transform", function() {
                            // debugger;
                            var grades = ((d.startAngle + d.endAngle) / 2) * 180 / Math.PI;
                            if (grades > 0 && grades < 180) {
                                var x = (-200 + graphSize) / 2 * Math.cos(((d.startAngle + d.endAngle) / 2) - Math.PI / 2);
                                var y = (-200 + graphSize) / 2 * Math.sin(((d.startAngle + d.endAngle) / 2) - Math.PI / 2);
                                return "translate(" + x + "," + y + ") rotate(" + (grades - 90) + ")";
                            } else {
                                var x = (-25 + graphSize) / 2 * Math.cos(((d.startAngle + d.endAngle) / 2) - Math.PI / 2);
                                var y = (-25 + graphSize) / 2 * Math.sin(((d.startAngle + d.endAngle) / 2) - Math.PI / 2);
                                return "translate(" + x + "," + y + ") rotate(" + (grades - 90 + 180) + ")";
                            }
                        })
                        // .style("font-size", "12px")
                        .style("font-size", config.fontSize)
                        .attr("dy", ".35em")
                        .text(function() {
                            return d.data.type + " " + d.data.count;
                        });
                })

                function type(d) {
                    d.population = +d.population;
                    return d;
                }

            } else if (graphicMode == 'rings') {

                var rings = graph
                    .selectAll(".ring")
                    .data(circleScales);

                rings
                    .enter()
                    .append("path")
                    .attr("class", "ring")
                    .attr("fill", function(d) {
                        return circleColorScale(d.domain()[0]);
                    })
                    .attr("d", function(d) {
                        var arc = d3.svg.arc()
                            .innerRadius(d.range()[0])
                            .outerRadius(d.range()[1])
                            .startAngle(0)
                            .endAngle(2 * Math.PI);
                        return arc(d);
                    })
                    .attr("id", function(d, i) {
                        return "ring" + i;
                    })


                .on("click", function(d, i) {
                    // One ring has been selected
                    var selected = d3.select(this);
                    if (selected.classed("zoomed")) {
                        selected.classed("zoomed", false);
                        render.update(data, updateScales(radius));
                    } else {
                        selected.classed("zoomed", true);
                        render.update(data, updateScales(radius, d));
                    }
                });

                rings
                    .transition()
                    .duration(transitionSpeed)
                    .attr("d", function(d, i) {
                        var arc = d3.svg.arc()
                            .innerRadius(circleScales[i].range()[0] + 0.1) // Have to add 0.1 otherwise it doesn't transition correctly
                            .outerRadius(circleScales[i].range()[1] + 0.1) // Have to add 0.1 otherwise it doesn't transition correctly
                            .startAngle(0)
                            .endAngle(2 * Math.PI);
                        return arc(d, i);
                    });

                var displData = [];
                for (i in data)
                    if (data[i].type == vizType)
                        displData.push(data[i])

                    // Calculate coords for each data point
                var stepRad = 2 * Math.PI * 360 / displData.length; // grades
                var currAngle = 0;

                for (var i = 0; i < displData.length; i++) {
                    var p = displData[i];
                    var scale = circleScales[~~((1 - p.value) / 0.2)];
                    var coords = point(scale(1 - p.value), currAngle);
                    p.x = coords[0];
                    p.y = coords[1];
                    p.angle = currAngle;
                    currAngle += (2 * Math.PI / displData.length);
                }

                // Links
                links = graph.selectAll(".openTargets_d-d_overview_link")
                    .data(displData, function(d) {
                        return d.object + "-" + d.subject;
                    });
                links
                    .enter()
                    .append("line")
                    .style("stroke", "navy")
                    .attr("class", "openTargets_d-d_overview_link unselected");
                links
                    .transition()
                    .duration(transitionSpeed)
                    .attr("x1", function(d) {
                        return d.x;
                    })
                    .attr("y1", function(d) {
                        return d.y;
                    })
                    .attr("x2", function(d) {
                        return radius * Math.cos(d.angle);
                    })
                    .attr("y2", function(d) {
                        return radius * Math.sin(d.angle);
                    });

                // Nodes
                points = graph.selectAll(".openTargets_d-d_overview_node")
                    .data(displData, function(d) {
                        return d.object + "-" + d.subject;
                    });
                points
                    .enter()
                    .append("circle")
                    .attr("class", "openTargets_d-d_overview_node selected")
                    .on("mouseout", unselect)
                    .on("mouseover", select)
                    .on("click",
                        tooltip
                    );
                points
                    .transition()
                    .duration(transitionSpeed)
                    .attr("cx", function(d) {
                        return d.x;
                    })
                    .attr("cy", function(d) {
                        return d.y;
                    })
                    .attr("r", config.pointSize)
                    .attr("fill", config.pointColor);

                // Labels
                graph.selectAll(".openTargets_d-d_overview_label").remove()
                labels = graph.selectAll(".openTargets_d-d_overview_label")
                    .data(displData, function(d) {
                        return d.object + "-" + d.subject;
                    });
                labels
                    .enter()
                    .append("g")
                    .attr("class", "openTargets_d-d_overview_label selected")
                    // Create SVG container, and apply a transform such that the origin is the
                    // center of the canvas. This way, we don't need to position arcs individually
                    .attr("transform", function(d) {
                        var grades = d.angle * 360 / (2 * Math.PI);
                        var x = graphSize / 2 * Math.cos(d.angle);
                        var y = graphSize / 2 * Math.sin(d.angle);

                        return "translate(" + x + "," + y + ")";
                    })
                    .append("text")
                    .style("font-size", config.fontSize)
                    // .style("font-size", "10px")
                    .style("text-anchor", function(d) {
                        var grades = d.angle * 360 / (2 * Math.PI);
                        if (grades % 360 > 90 && grades % 360 < 275) {
                            return "end";
                        }
                        return "start";
                    })
                    .text(function(d) {
                        return d.object;
                    })
                    .attr("transform", function(d) {
                        var grades = d.angle * 360 / (2 * Math.PI);
                        if (grades % 360 > 90 && grades % 360 < 275) {
                            return "rotate(" + ((grades % 360) + 180) + ")";
                        }
                        return "rotate(" + (grades % 360) + ")";
                    })
                    .on("mouseover", select)
                    .on("mouseout", unselect)
                    .on("click", tooltip);

                // drawData("diseases1")

            }

            function updateBreadcrumbs(nodeArray) {

                function breadcrumbPoints(d, i) {
                    var points = [];
                    points.push("0,0");
                    points.push(b.w + ",0");
                    points.push(b.w + b.t + "," + (b.h / 2));
                    points.push(b.w + "," + b.h);
                    points.push("0," + b.h);
                    if (i > 0) { // Leftmost breadcrumb; don't include 6th vertex.
                        points.push(b.t + "," + (b.h / 2));
                    }
                    return points.join(" ");
                }
                d3.selectAll("#trail").remove()

                // Add the svg area.
                var trail = d3.select("#sequence").append("svg:svg")
                    // .attr("width", 1200)
                    .style("width", config.size)
                    .style("height", 30)
                    .attr("id", "trail");

                // Data join; key function combines name and depth (= position in sequence).
                var g = d3.select("#trail")
                    .selectAll("g")
                    .data(nodeArray, function(d) {

                        return d.name + d.depth;
                    });

                // Add breadcrumb and label for entering nodes.
                var entering = g.enter().append("svg:g");

                function renderInitialState() {
                    rings = d3.selectAll("#pieChart .ring")
                    var lines = d3.selectAll("#pieChart line")
                        // var labels=d3.selectAll("#pieChart text")
                    d3.selectAll("#pieChart text").style('opacity', 0);
                    var circles = d3.selectAll("#pieChart circle")

                    rings.transition()
                        .duration(200)
                        .style('opacity', 0);

                    d3.selectAll("#pieChart line").remove();
                    // d3.selectAll("#pieChart text").remove();
                    d3.selectAll("#pieChart .openTargets_d-d_overview_label").remove();
                    d3.selectAll("#pieChart circle").remove();

                    d3.selectAll('#sequence g').remove()

                    updateBreadcrumbs([{ name: 'Home' }]);
                    setTimeout(function() {
                        d3.selectAll("#pieChart .ring").remove();

                        path = path.data(pie(dataTypes))
                            .attr("fill", function(d, i) {
                                return allColorsExp[(d.data.type)][0];
                            });

                        path.transition().duration(500).attrTween("d", function(a) {
                            var i = d3.interpolate(this._current, a) //,
                                // k = d3.interpolate(arc.outerRadius()(), newRadius);
                            this._current = i(0);
                            return function(t) {
                                return arc(i(t));
                                // return arc.innerRadius(k(t) / 4).outerRadius(k(t))(i(t));
                            };
                        });
                        d3.selectAll("#pieChart text").transition().duration(600).style('opacity', 1);

                    }, 500)

                }

                entering.append("svg:polygon")
                    .attr("points", breadcrumbPoints)
                    .style("fill", function(d) {
                        if (d.name == 'Home') {
                            return '#DCDCDC';
                        }
                        return allColorsExp[d.name][1]
                    })
                    .on("click", function(d, i) {
                        if (this.parentNode.childNodes[1].innerHTML == "Home")
                            renderInitialState();
                    })

                entering.append("svg:text")
                    .attr("x", (b.w + b.t) / 2)
                    .attr("y", b.h / 2)
                    .attr("dy", "0.35em")
                    .attr("text-anchor", "middle")
                    .text(function(d) {
                        var name;

                        if (d.name.length > 11) {
                            name = d.name.substring(0, 10) + '...';
                        } else {
                            name = d.name;
                        }
                        return name;
                        // return d.name;
                    })
                    .on("click", function(d, i) {
                        if (this.innerHTML == "Home")
                            renderInitialState();
                    });

                // Set position for entering and updating nodes.
                g.attr("transform", function(d, i) {
                    return "translate(" + i * (b.w + b.s) + ", 0)";
                });
            }

            function drawData(type) {
                var displData = [];
                for (i in data) {
                    if (data[i].type == type) {
                        displData.push(data[i])
                    }
                }

                // Calculate coords for each data point
                // var stepRad = 2 * Math.PI / displData.length; // grades
                // var stepRad = 2 * Math.PI * 360 / displData.length; // grades
                var stepRad = 3.5; // grades

                var currAngle = 0;

                for (var i = 0; i < displData.length; i++) {
                    var p = displData[i];
                    var scale = circleScales[~~((1 - p.value) / 0.2)];
                    var coords = point(scale(1 - p.value), currAngle);
                    p.x = coords[0];
                    p.y = coords[1];
                    p.angle = currAngle;
                    currAngle += (2 * Math.PI / displData.length);
                    // currAngle += (stepRad * 2 * Math.PI / 360);
                }

                // Links
                links = graph.selectAll(".openTargets_d-d_overview_link")
                    .data(displData, function(d) {
                        return d.object + "-" + d.subject;
                    });
                links
                    .enter()
                    .append("line")
                    .style("stroke", "navy")
                    .attr("class", "openTargets_d-d_overview_link unselected");
                links
                    .transition()
                    .duration(transitionSpeed)
                    .attr("x1", function(d) {
                        return d.x;
                    })
                    .attr("y1", function(d) {
                        return d.y;
                    })
                    .attr("x2", function(d) {
                        return radius * Math.cos(d.angle);
                    })
                    .attr("y2", function(d) {
                        return radius * Math.sin(d.angle);
                    });

                // Nodes
                points = graph.selectAll(".openTargets_d-d_overview_node")
                    .data(displData, function(d) {
                        return d.object + "-" + d.subject;
                    });
                points
                    .enter()
                    .append("circle")
                    .attr("class", "openTargets_d-d_overview_node selected")
                    .on("mouseout", unselect)
                    .on("mouseover", select)
                    .on("click", tooltip);
                // .on("click", function(){ tooltip(this,dataTypes)});
                points
                    .transition()
                    .duration(transitionSpeed)
                    .attr("cx", function(d) {
                        return d.x;
                    })
                    .attr("cy", function(d) {
                        return d.y;
                    })
                    .attr("r", config.pointSize)
                    .attr("fill", config.pointColor);

                // Labels
                graph.selectAll(".openTargets_d-d_overview_label").remove()
                labels = graph.selectAll(".openTargets_d-d_overview_label")
                    .data(displData, function(d) {
                        return d.object + "-" + d.subject;
                    });
                labels
                    .enter()
                    .append("g")
                    .attr("class", "openTargets_d-d_overview_label selected")
                    // Create SVG container, and apply a transform such that the origin is the
                    // center of the canvas. This way, we don't need to position arcs individually
                    .attr("transform", function(d) {
                        var grades = d.angle * 360 / (2 * Math.PI);
                        var x = graphSize / 2 * Math.cos(d.angle);
                        var y = graphSize / 2 * Math.sin(d.angle);

                        return "translate(" + x + "," + y + ")";
                    })
                    .append("text")
                    .style("font-size", config.fontSize)
                    // .style("font-size", "10px")
                    .style("text-anchor", function(d) {
                        var grades = d.angle * 360 / (2 * Math.PI);
                        if (grades % 360 > 90 && grades % 360 < 275) {
                            return "end";
                        }
                        return "start";
                    })
                    .text(function(d) {
                        return d.object;
                    })
                    .attr("transform", function(d) {
                        var grades = d.angle * 360 / (2 * Math.PI);
                        if (grades % 360 > 90 && grades % 360 < 275) {
                            return "rotate(" + ((grades % 360) + 180) + ")";
                        }
                        return "rotate(" + (grades % 360) + ")";
                    })
                    .on("mouseover", select)
                    .on("mouseout", unselect)
                    .on("click", tooltip);
            }
        };

        if (typeof config.data == "string") {
            d3.json(config.data, function(error, resp) {
                var data = resp.data;
                render.update(data, updateScales(radius), 'pieChart');
            });
        } else {

            render.update(config.data, updateScales(radius), 'pieChart');
        }



    };

    function updateScales(radius, selected) {
        var circleScales = [
            d3.scale.linear().domain([0.0, 0.2]).range([0, 1 * radius / 5]).clamp(true),
            d3.scale.linear().domain([0.2, 0.4]).range([1 * radius / 5, 2 * radius / 5]).clamp(true),
            d3.scale.linear().domain([0.4, 0.6]).range([2 * radius / 5, 3 * radius / 5]).clamp(true),
            d3.scale.linear().domain([0.6, 0.8]).range([3 * radius / 5, 4 * radius / 5]).clamp(true),
            d3.scale.linear().domain([0.8, 1.0]).range([4 * radius / 5, 5 * radius / 5]).clamp(true),
        ];

        if (!selected) {
            return circleScales;
        }

        // We are focusing on a scale
        var newScales = [];
        var currRad = 0;
        //if it's the selected scale put it to the length of radius else put it to 0 length
        for (var i = 0; i < circleScales.length; i++) {
            var scale = circleScales[i];
            if (selected.domain()[0] == scale.domain()[0]) {
                scale.range([currRad, radius]);
                currRad = radius;
            } else {
                scale.range([currRad, currRad]);
            }
            newScales.push(scale);
        }
        return newScales;
    }

    function tooltip(d) {

        var obj = {};
        obj.header = d.object;
        obj.rows = [];
        obj.rows.push({
            label: "type",
            value: d.type
        });
        obj.rows.push({
            label: "Value:",
            value: String(d.value * 100).slice(0, 5)
        });
        tntTooltip.table()
            .width(180)
            .show_closer(true)
            .call(this, obj);
    }

    // private methods
    function select(d) {
        var selectNode = this;
        links
            .each(function(l) {
                var checkLink = this;
                if (d.object === l.object) {
                    d3.select(checkLink)
                        .classed("unselected", false)
                        .classed("selected", true);
                } else {
                    d3.select(checkLink)
                        .classed("selected", false)
                        .classed("unselected", true);
                }
            });
        labels
            .each(function(l) {
                var checkLabel = this;
                if (d.object === l.object) {
                    d3.select(checkLabel)
                        .classed("unselected", false)
                        .classed("selected", true);
                } else {
                    d3.select(checkLabel)
                        .classed("selected", false)
                        .classed("unselected", true);
                }
            });
        points
            .each(function(p) {
                var checkNode = this;
                if (p.object === d.object) {
                    d3.select(checkNode)
                        .classed("unselected", false)
                        .classed("selected", true);
                } else {
                    d3.select(checkNode)
                        .classed("selected", false)
                        .classed("unselected", true);
                }
            });
    }

    function unselect() {
        links
            .each(function() {
                d3.select(this)
                    .classed("selected", false)
                    .classed("unselected", true);
            });
        labels
            .each(function() {
                d3.select(this)
                    .classed("selected", true)
                    .classed("unselected", false);
            });
        points
            .each(function() {
                d3.select(this)
                    .classed("selected", true)
                    .classed("unselected", false);
            });
    }

    function point(l, r) {
        var x = l * Math.cos(r);
        var y = l * Math.sin(r);
        return [x, y];
    }

    // Public methods

    render.read = function(data) {
        // if (typeof data == 'object') {
            if (!arguments.length) {
                return config.data;
            }
            config.data = data;
            return this;
        // }
    }

    render.size = function(size) {
        if (!arguments.length) {
            return config.size;
        }
        config.size = size;
        return this;
    };

    render.setPieColors = function(color) {
        if (!arguments.length) {
            return config.allColorsExp;
        }
        config.allColorsExp = color;
        return this;
    };

    render.setFontSize = function(size) {
        if (!arguments.length) {
            return config.fontSize;
        }
        if(typeof size== "number"){
            size = String(size+'px');
        }
        config.fontSize=size;
        return this;
    };

    render.setPointSize = function(size) {
        if (!arguments.length) {
            return config.pointSize;
        }
        config.pointSize = size;
        return this;
    };

    render.setPointColor = function(color) {
        if (!arguments.length) {
            return config.pointColor;
        }
        config.pointColor = color;
        return this;
    };

    render.filter_type = function(type) {
        points
            .style("display", function(d) {
                if (!type) {
                    return "block";
                }
                if (d.type !== type) {
                    return "none";
                }
                return "block";
            });
    };
    return render;
};

module.exports = exports = vis;
