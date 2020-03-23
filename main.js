var svg_width = 250
var svg_height = 300
var padding = 20




firstmatrix = d3.select("#firstmatrix")
.attr("width", svg_width)
.attr("height", svg_height)
.style("background", "pink");

secondmatrix = d3.select("#secondmatrix")
.attr("width", svg_width)
.attr("height", svg_height)
.style("background", "pink");

thirdmatrix = d3.select("#thirdmatrix")
.attr("width", svg_width)
.attr("height", svg_height)
.style("background", "pink");


var firstmatrixpoints = [{ x: 10, y: 10 }, { x: 30, y: 10 }, { x: 50, y: 10},
                         { x: 10, y: 30 }, { x: 30, y: 30 }, { x: 50, y: 30},
                         { x: 10, y: 50 }, { x: 30, y: 50 }, { x: 50, y: 50}];

// firstmatrixpoints.forEach(function(item){
//     console.log(item.x)
// });

var secondmatrixpoints = [{ x: 10, y: 10 }, { x: 30, y: 10 }, { x: 50, y: 10},
                          { x: 10, y: 30 }, { x: 30, y: 30 }, { x: 50, y: 30},
                          { x: 10, y: 50 }, { x: 30, y: 50 }, { x: 50, y: 50}];

    
firstmatrix.selectAll("circle")
.data(firstmatrixpoints)
.enter()
.append("circle")
.attr("class", "nodes")
.attr("cx", function(d) { return d.x; })
.attr("cy", function(d) { return d.y; })
.attr("r", "5px")   
.attr("fill", "black");

secondmatrix.selectAll("circle")
.data(secondmatrixpoints)
.enter()
.append("circle")
.attr("class", "nodes")
.attr("cx", function(d) { return d.x; })
.attr("cy", function(d) { return d.y; })
.attr("r", "5px")   
.attr("fill", "black");