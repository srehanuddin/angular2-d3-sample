import { Component, ElementRef, ViewEncapsulation } from "angular2/core" ;
import * as d3 from 'd3';

@Component({
    selector: 'simple-bar-chart',
    directives: [],
    styleUrls : ["./app/components/bar-charts-waterfall-bar-chart/style.css"],
    templateUrl: "./app/components/bar-charts-waterfall-bar-chart/view.html"
})
export class WaterfallBarChartComponent {
    constructor(public elementRef: ElementRef){
    } 
    
    ngOnInit(){     
       
        var el = this.elementRef.nativeElement;
        var attrName = el.children && el.children[0] && el.children[0].attributes && el.children[0].attributes[0] && el.children[0].attributes[0].name;
       
        var componentContainer = d3.select(this.elementRef.nativeElement);
        var d3Container = componentContainer.select("#display");
        
        var margin = {top: 20, right: 20, bottom: 30, left: 40},
            width = 960 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

        var x0 = d3.scale.ordinal()
            .rangeRoundBands([0, width], 0, .1);

        var x1 = d3.scale.ordinal();

        var y = d3.scale.linear()
            .range([height, 0]);

        var color = d3.scale.ordinal()
            .range(["#2DBAD4", "#33CC33", "#00E6B8", "#C9081D"]);

        var xAxis = d3.svg.axis()
            .scale(x0)
            .orient("bottom");

        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left")
            .tickFormat(d3.format(".2s"));

        var svg = d3Container.append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        d3.csv("app/components/bar-charts-waterfall-bar-chart/data.csv", function(error, data) {
        var categories = d3.keys(data[0]).filter(function(key) {
            return key !== "period";
        });

        data.forEach(function(d) {
            //first calculate the starting height for each category
            let total = 0
            let totals = {}
            for (var i=0; i<categories.length; i++) {
            if (i == 3) {
                total = total - +d[categories[i]];
                totals[categories[i]] = total;
            }
            else {
                totals[categories[i]] = total;
                total += +d[categories[i]];
            }
            }
            //then map category name, value, and starting height to each observation
            d.formatted = categories.map(function(category) {
            return {
                name: category,
                value: +d[category],
                baseHeight: +totals[category]
            };
            });
        });

        x0.domain(data.map(function(d) { return d.period; }));
        x1.domain(categories).rangeRoundBands([0, x0.rangeBand()]);
        y.domain([0, d3.max(data, function(d) {
            return d3.max(d.formatted, function(d) {
            return d.value + d.baseHeight; }); })]);

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("Customers");

        var state = svg.selectAll(".state")
            .data(data)
            .enter().append("g")
            .attr("class", "g")
            .attr("transform", function(d) {
                return "translate(" + x0(d.period) + ",0)";
            });

        state.selectAll("rect")
            .data(function(d) { return d.formatted; })
            .enter().append("rect")
            .attr("width", x1.rangeBand())
            .attr("x", function(d) { return x1(d.name); })
            .attr("y", function(d) { return y(d.value + d.baseHeight); })
            .attr("height", function(d) { return height - y(d.value); })
            .style("fill", function(d) { return color(d.name); });

        var legend = svg.selectAll(".legend")
            .data(categories.slice().reverse())
            .enter().append("g")
            .attr("class", "legend")
            .attr("transform", function(d, i) {
                return "translate(0," + i * 20 + ")";
            });

        legend.append("rect")
            .attr("x", width - 18)
            .attr("width", 18)
            .attr("height", 18)
            .style("fill", color);

        legend.append("text")
            .attr("x", width - 24)
            .attr("y", 9)
            .attr("dy", ".35em")
            .style("text-anchor", "end")
            .text(function(d) { return d; });
        });
        
    }
}


