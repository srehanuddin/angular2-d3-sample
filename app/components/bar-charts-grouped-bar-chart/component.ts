import { Component, ElementRef, ViewEncapsulation } from "angular2/core" ;
import * as d3 from 'd3';

@Component({
    selector: 'simple-bar-chart',
    directives: [],
    styleUrls : ["./app/components/bar-charts-grouped-bar-chart/style.css"],
    templateUrl: "./app/components/bar-charts-grouped-bar-chart/view.html"
})
export class GroupedBarChartComponent {
    constructor(public elementRef: ElementRef){
    } 
    
    ngOnInit(){     
       
        var el = this.elementRef.nativeElement;
        var attrName = el.children && el.children[0] && el.children[0].attributes && el.children[0].attributes[0] && el.children[0].attributes[0].name;
       
        var componentContainer = d3.select(this.elementRef.nativeElement);
        var d3Container = componentContainer.select("#display");
        
        var n = 20, // number of samples
            m = 4; // number of series

        var data = d3.range(m).map(function() { return d3.range(n).map(Math.random); });

        var margin = {top: 20, right: 30, bottom: 30, left: 40},
            width = 960 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

        var y = d3.scale.linear()
            .domain([0, 1])
            .range([height, 0]);

        var x0 = d3.scale.ordinal()
            .domain(d3.range(n))
            .rangeBands([0, width], .2);

        var x1 = d3.scale.ordinal()
            .domain(d3.range(m))
            .rangeBands([0, x0.rangeBand()]);

        var z = d3.scale.category10();

        var xAxis = d3.svg.axis()
            .scale(x0)
            .orient("bottom");

        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left");

        var svg = d3Container.append("svg")
            .attr(attrName, "")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("svg:g")
            .attr(attrName, "")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        svg.append("g")
            .attr(attrName, "")
            .attr("class", "y axis")
            .call(yAxis);

        svg.append("g")
            .attr(attrName, "")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

        svg.append("g")
            .attr(attrName, "")
            .selectAll("g")
            .data(data)
        .enter().append("g")
            .attr(attrName, "")
            .style("fill", function(d, i) { return z(i); })
            .attr("transform", function(d, i) { return "translate(" + x1(i) + ",0)"; })
        .selectAll("rect")
            .data(function(d) { return d; })
        .enter().append("rect")
            .attr(attrName, "")
            .attr("width", x1.rangeBand())
            .attr("height", y)
            .attr("x", function(d, i) { return x0(i); })
            .attr("y", function(d) { return height - y(d); });
        
    }
}


