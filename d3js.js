var barHeight = Math.ceil(height / data.length);

svg.selectAll('rect')
  .data(data)
  .enter().append('rect')
    .attr('width', function(d) { return d * width/200; })
    .attr('height', barHeight)
    .attr('y', function(d, i) { return i * barHeight; })
    .attr('fill', 'steelblue')
    .attr("d", function(d) { return d; })
    .on("click", function(){
      Shiny.setInputValue(
        "bar_clicked", 
        d3.select(this).attr("d"),
        {priority: "event"}
        );
    });