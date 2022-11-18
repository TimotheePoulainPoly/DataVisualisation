/*
 * Original code from : https://gist.github.com/pdaengeli/33bdabf368fb037506aa1da295a95cc2
 */
/* SCATTER PLOT VISUALIZATION
 * Léo Marache
 */

/** Set-up */
//Quick fix for resizing some things for mobile-ish viewers
var mobileScreen = ($(window).innerWidth() < 500 ? true : false);

//Scatterplot
var margin = {left: 0, top: 1, right: 0, bottom: 0},
    width = Math.min($("#chart").width(), 840) - margin.left - margin.right, height = width * 2 / 3;

var svg = d3.select("#chart").append("svg")
    .attr("width", (width + margin.left + margin.right))
    .attr("height", (height + margin.top + margin.bottom));

var wrapper = svg.append("g").attr("class", "chordWrapper")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


/** Initialize Axes & Scales */
var opacityCircles = 0.7, maxDistanceFromPoint = 50;

function formatString(string) {
    //return title.replace(/(\.+|\s+|\(+|\)+|\,+|\'+|\?+|\:+|\!+)/g, '-');
    return string.replace(/[^A-Za-z0-9]/g, '-');
}

const genres = ['unknown', 'soul', 'metal', 'blues', 'R&B', 'hip-hop', 'lo-fi', 'disco', 'jazz', 'country', 'alternative-rock', 'hard-rock', 'soft-rock', 'folk-rock', 'classic-rock', 'pop', 'other'];

//Set the color for each region
var color = d3.scaleOrdinal()
    .range(["#EFB605", "#E58903", "#E01A25", "#C20049", "#991C71", "#66489F", "#2074A0", "#10A66E", "#7EB852", "#d23600", "#9cd200", "#d29f00", "#23b99a", "#238db9", "#2342b9", "#772ae8", "#bb94f4"])
    .domain(genres);

//Set the new x axis range
var xScale = d3.scaleLinear()
    .range([0, width])
    .domain([-27, 5]);
//Set new x-axis
var xAxis = d3.axisTop()
    .ticks(3)
    .scale(xScale);
//Append the x-axis
// wrapper.append("g")
var gX = svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(" + 0 + "," + height + ")")
    .call(xAxis);

//Set the new y axis range
var yScale = d3.scaleLinear()
    .range([height, 0])
    .domain([50, 240]/*d3.extent(songs, function(d) { return d.bpm; })*/)
    .nice();
var yAxis = d3.axisRight()
    .ticks(6)  //Set rough # of ticks
    .scale(yScale);
//Append the y-axis
//wrapper.append("g")
var gY = svg.append("g")
    .attr("class", "y axis")
    .attr("transform", "translate(" + 0 + "," + 0 + ")")
    .call(yAxis);

//Scale for the bubble size
var rScale = d3.scaleSqrt()
    .range([mobileScreen ? 1 : 2, mobileScreen ? 10 : 16])
    .domain(d3.extent(songs, function (d) {
        return d.length;
    }));


/** Initialize Labels */

//Set up X axis label
// wrapper.append("g")
svg.append("g")
    .append("text")
    .attr("class", "x title")
    .attr("text-anchor", "end")
    .style("font-size", (mobileScreen ? 8 : 12) + "px")
    .attr("transform", "translate(" + width + "," + (height - 20) + ")")
    .text("Gain [dB]");

//Set up y axis label
// wrapper.append("g")
svg.append("g")
    .append("text")
    .attr("class", "y title")
    .attr("text-anchor", "end")
    .style("font-size", (mobileScreen ? 8 : 12) + "px")
    .attr("transform", "translate(40, 0) rotate(-90)")
    .text("Tempo [bpm]");


/** Capture mouse events and voronoi.find() the site */
// Use the same variables of the data in the .x and .y as used in the cx and cy of the circle call
svg._tooltipped = svg._voronoi = null;
svg.on('mousemove', function () {
    if (!svg._voronoi) {
        console.log('computing the voronoi…');
        svg._voronoi = d3.voronoi()
            .x(function (d) {
                return xScale(d.gain);
            })
            .y(function (d) {
                return yScale(d.bpm);
            })(songs);
        console.log('…done.');
    }
    // using d3.mouse on the g node instead of the svg node so we don't have to worry about margin and transforms
    var p = d3.mouse(g.node()), site;
    // don't react if the mouse is close to one of the axis
    if (p[0] < 5 || p[1] < 5) {
        site = null;
    } else {
        site = svg._voronoi.find(p[0], p[1], maxDistanceFromPoint);
    }
    if (site !== svg._tooltipped) {
        if (svg._tooltipped) removeTooltip(svg._tooltipped.data)
        if (site) showTooltip(site.data);
        svg._tooltipped = site;
    }
});


/** Zoom implementation */
var g = d3.select("g");
//var svg = d3.select('#svg');

var zoom = d3.zoom()
    .scaleExtent([1 / 2, 8])
    .on("zoom", zoomed);

svg.call(zoom);

function zoomed() {
    var transform = d3.event.transform;
    gX.call(xAxis.scale(d3.event.transform.rescaleX(xScale)));
    gY.call(yAxis.scale(d3.event.transform.rescaleY(yScale)));
    g.attr('transform', `translate(${transform.x}, ${transform.y}) scale(${transform.k})`);
};

function transition(zoomLevel) {
    svg.transition()
        .delay(100)
        .duration(200)
        .call(zoom.scaleBy, zoomLevel);
}

d3.selectAll('button').on('click', function () {
    if (this.id === 'zoom_in') {
        console.log('zooming in')
        transition(1.2); // increase on 0.2 each time
    }
    if (this.id === 'zoom_out') {
        console.log('zooming out')
        transition(0.8); // deacrease on 0.2 each time
    }
    if (this.id === 'zoom_init') {
        console.log('reset zoom')
        svg.transition()
            .delay(100)
            .duration(200)
            .call(zoom.transform, d3.zoomIdentity); // return to initial state
    }
});

zoom.filter(function () {
    return !event.button && event.type !== 'wheel';
}) // allow scrolling by disallowing 'wheel'


/** Scatterplot Circles */
//Initiate a group element for the circles
var circleGroup = wrapper.append("g")
    .attr("class", "circleWrapper");

//Place the country circles
circleGroup.selectAll("songs")
    .data(songs.sort(function (a, b) {
        return b.length > a.length;
    })) //Sort so the biggest circles are below
    .enter().append("circle")
    .attr("class", function (d, i) {
        return "songs " + formatString(d.title);
    })
    .attr("cx", function (d) {
        return xScale(d.gain);
    })
    .attr("cy", function (d) {
        return yScale(d.bpm);
    })
    .attr("r", function (d) {
        return rScale(d.length);
    })
    .style("opacity", opacityCircles)
    .attr("stroke", "black")
    .style("fill", function (d) {
        return color(d.genres);
    });

/** Hover functions of the circles */
//Hide the tooltip when the mouse moves away
function removeTooltip(d, i) {
    //Save the chosen circle (so not the voronoi)
    var element = d3.selectAll(".songs." + formatString(d.title));
    //Fade out the bubble again
    element.style("opacity", opacityCircles);
    //Hide tooltip
    $('.popover').each(function () {
        $(this).remove();
    });
    //Fade out guide lines, then remove them
    d3.selectAll(".guide")
        .transition().duration(200)
        .style("opacity", 0)
        .remove();
}//function removeTooltip

//Show the tooltip on the hovered over slice
function showTooltip(d, i) {
    //Save the chosen circle (so not the voronoi)
    var element = d3.select(".songs." + formatString(d.title)), el = element._groups[0];
    // displaying a clear message to the user in case the key is undefined for that song , should be elsewhere but last minute change
    var key = d.key === "" ? "unknown" : d.key;
    // displaying a clear message to the user when the gain is 0 (that is not displaying "null" but 0), should be elsewhere but last minute change
    var gain = d.gain === null ? 0 : d.gain;
    //Define and show the tooltip
    $(el).popover({
        placement: 'auto top', container: '#chart', trigger: 'manual', html: true, content: function () {
            return "<span style='font-size: 11px; text-align: center; font-weight: bold'>Title : " + d.title + "</span><br>" + "<span style='font-size: 11px; text-align: center;'>Genre : " + d.genres + "</span><br>" + "<span style='font-size: 11px; text-align: center;'>Length : " + d.length + " seconds</span><br>" + "<span style='font-size: 11px; text-align: center;'>Tempo : " + d.bpm + " [bpm]</span><br>" + "<span style='font-size: 11px; text-align: center;'>Gain : " + gain + " [dB]</span><br>" + "<span style='font-size: 11px; text-align: center;'>Key : " + key + "</span><br>";
        }
    });
    $(el).popover('show');
    //Make chosen circle more visible
    element.style("opacity", 1);
    //Place and show tooltip
    var x = +element.attr("cx"), y = +element.attr("cy"), color = element.style("fill");
    //Append lines to bubbles that will be used to show the precise data points
    //vertical line
    wrapper
        .append("line")
        .attr("class", "guide")
        .attr("x1", x)
        .attr("x2", x)
        .attr("y1", y)
        .attr("y2", height) // TO DO: zoom transform height
        .style("stroke", color)
        .style("opacity", 0)
        .transition().duration(200)
        .style("opacity", 0.5);
    //Value on the x axis
    svg
        .append("text")
        .attr("class", "guide")
        .attr("x", x) // TO DO: zoom transform x
        .attr("y", height - 8)
        .style("fill", color)
        .style("opacity", 0)
        .style("text-anchor", "middle")
        .text(d3.format(".2f")(d.gain))
        .transition().duration(200)
        .style("opacity", 0.5);
    //horizontal line
    wrapper
        .append("line")
        .attr("class", "guide")
        .attr("x1", x)
        .attr("x2", 0)
        .attr("y1", y)
        .attr("y2", y)
        .style("stroke", color)
        .style("opacity", 0)
        .transition().duration(200)
        .style("opacity", 0.5);
    //Value on the y axis
    svg
        .append("text")
        .attr("class", "guide")
        .attr("x", 35)
        .attr("y", y + 10) // TO DO: zoom transform y
        .attr("dy", "0.35em")
        .style("fill", color)
        .style("opacity", 0)
        .style("text-anchor", "end")
        .text(d3.format(".2f")(d.bpm))
        .transition().duration(200)
        .style("opacity", 0.5);
}//function showTooltip

/** Create the Legend */
if (!mobileScreen) {
    //Legend
    var legendMargin = {left: 5, top: 10, right: 5, bottom: 10}, legendWidth = 145, legendHeight = height-103;

    var svgLegend = d3.select(".genre-and-length-legend").append("svg")
        .attr("width", (legendWidth + legendMargin.left + legendMargin.right))
        .attr("height", (legendHeight + legendMargin.top + legendMargin.bottom));

    var legendWrapper = svgLegend.append("g").attr("class", "legendWrapper")
        .attr("transform", "translate(" + legendMargin.left + "," + legendMargin.top + ")");

    var rectSize = 15, //dimensions of the colored square
        rowHeight = 20, //height of a row in the legend
        maxWidth = 144; //width of each row

    //Create container per rect/text pair
    var legend = legendWrapper.selectAll('.legendSquare')
        .data(color.range())
        .enter().append('g')
        .attr('class', 'legendSquare')
        .attr("transform", function (d, i) {
            return "translate(" + 0 + "," + (i * rowHeight) + ")";
        })
        .style("cursor", "pointer")
        .on("mouseover", selectLegend(0.02))
        .on("mouseout", selectLegend(opacityCircles))


    //Non visible white rectangle behind square and text for better hover
    legend.append('rect')
        .attr('width', maxWidth)
        .attr('height', rowHeight)
        .style('fill', "white");
    //Append small squares to Legend
    legend.append('rect')
        .attr('width', rectSize)
        .attr('height', rectSize)
        .attr("stroke", "black")
        .style('fill', function (d) {
            return d;
        });
    //Append text to Legend
    legend.append('text')
        .attr('transform', 'translate(' + 22 + ',' + (rectSize / 2) + ')')
        .attr("class", "legendText")
        .style("font-size", "14px")
        .attr("dy", ".35em")
        .text(function (d, i) {
            return color.domain()[i];
        });

    //Create g element for bubble size legend
    var bubbleSizeLegend = legendWrapper.append("g")
        .attr("transform", "translate(" + (legendWidth / 2 - 30) + "," + (color.domain().length * rowHeight + 20) + ")");
    //Draw the bubble size legend
    bubbleLegend(bubbleSizeLegend, rScale, legendSizes = [180, 420], legendName = "LENGTH");
    console.log("bubleLegend function has been fired ");
}//if !mobileScreen
else {
    d3.select("#legend").style("display", "none");
}

/** Bubble Legend */
function bubbleLegend(wrapperVar, scale, sizes, titleName) {

    var legendSize1 = sizes[0], legendSize2 = sizes[1],
        legendCenter = 0, legendBottom = 50, legendLineLength = 25, textPadding = 5, numFormat = d3.format(",");

    wrapperVar.append("text")
        .attr("class", "legendTitle")
        .attr("transform", "translate(" + legendCenter + "," + 0 + ")")
        .attr("x", 0 + "px")
        .attr("y", 0 + "px")
        .attr("dy", "1em")
        .style("font-size", "17px")
        .text(titleName);
    wrapperVar.append("circle")
        .attr('r', scale(legendSize1))
        .attr('class', "legendCircle")
        .attr('cx', legendCenter)
        .attr('cy', (legendBottom - scale(legendSize1)));
    wrapperVar.append("circle")
        .attr('r', scale(legendSize2))
        .attr('class', "legendCircle")
        .attr('cx', legendCenter)
        .attr('cy', (legendBottom - scale(legendSize2)));
    wrapperVar.append("line")
        .attr('class', "legendLine")
        .attr('x1', legendCenter)
        .attr('y1', (legendBottom - 2 * scale(legendSize1)))
        .attr('x2', (legendCenter + legendLineLength))
        .attr('y2', (legendBottom - 2 * scale(legendSize1)));
    wrapperVar.append("line")
        .attr('class', "legendLine")
        .attr('x1', legendCenter)
        .attr('y1', (legendBottom - 2 * scale(legendSize2)))
        .attr('x2', (legendCenter + legendLineLength))
        .attr('y2', (legendBottom - 2 * scale(legendSize2)));
    wrapperVar.append("text")
        .attr('class', "legendText")
        .attr('x', (legendCenter + legendLineLength + textPadding))
        .attr('y', (legendBottom - 2 * scale(legendSize1)))
        .attr('dy', '0.25em')
        .text("3 min");
    wrapperVar.append("text")
        .attr('class', "legendText")
        .attr('x', (legendCenter + legendLineLength + textPadding))
        .attr('y', (legendBottom - 2 * scale(legendSize2)))
        .attr('dy', '0.25em')
        .text("8 min");
}//bubbleLegend

/** Hover function for the legend */
//Decrease opacity of non selected circles when hovering in the legend
function selectLegend(opacity) {
    return function (d, i) {
        var chosen = color.domain()[i];
        wrapper.selectAll(".songs")
            .filter(function (d) {
                return d.genres != chosen;
            })
            .transition()
            .style("opacity", opacity);
    };
}//function selectLegend

/** THIS IS THE BEGINNING OF THE CODE TO SELECT A GENRE IN PARTICULAR,
 * AND ONLY HAVE THE CORRESPONDING DATA SHOWING ON THE GRAPH.
 * COULD NOT BE IMPLEMENTED BECAUSE OF THE INTERACTIVITY INTERFERENCE WITH THE TOOLTIP,
 * MORE WORK IS NEEDED TO FIND A BROAD SOLUTION
 */
/*
 let genreCheckboxes = document.querySelectorAll('input[type=checkbox]');
 console.log(genreCheckboxes)
 for (let i = 0; i < genreCheckboxes.length; i++) {
    genreCheckboxes[i].addEventListener("change", function () {
        console.log(genreCheckboxes[i].checked)
        console.log(genreCheckboxes[i])
        if (genreCheckboxes[i].checked) {
            // careful this is actually false initialy (even though they are checked visually initially
            console.log("je coche")
            wrapper.selectAll(".songs")
                .filter(function (d) {
                    return d.genres === genreCheckboxes[i].value;
                })
                .transition()
                .style("opacity", opacityCircles)
            console.log(genreCheckboxes[i].value)
        } else {
            console.log("je decoche")
            wrapper.selectAll(".songs")
                .filter(function (d) {
                    return d.genres === genreCheckboxes[i].value;
                })
                .transition()
                //.remove();
        }
    });
}
 */

