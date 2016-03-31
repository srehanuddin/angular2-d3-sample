System.register(["angular2/core", 'd3'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, d3;
    var StackedBarChartComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (d3_1) {
                d3 = d3_1;
            }],
        execute: function() {
            StackedBarChartComponent = (function () {
                function StackedBarChartComponent(elementRef) {
                    this.elementRef = elementRef;
                }
                StackedBarChartComponent.prototype.ngOnInit = function () {
                    var el = this.elementRef.nativeElement;
                    var attrName = el.children && el.children[0] && el.children[0].attributes && el.children[0].attributes[0] && el.children[0].attributes[0].name;
                    var componentContainer = d3.select(this.elementRef.nativeElement);
                    var d3Container = componentContainer.select("#display");
                    var margin = { top: 20, right: 20, bottom: 30, left: 40 }, width = 960 - margin.left - margin.right, height = 500 - margin.top - margin.bottom;
                    var x = d3.scale.ordinal()
                        .rangeRoundBands([0, width], .1);
                    var y = d3.scale.linear()
                        .rangeRound([height, 0]);
                    var color = d3.scale.ordinal()
                        .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
                    var xAxis = d3.svg.axis()
                        .scale(x)
                        .orient("bottom");
                    var yAxis = d3.svg.axis()
                        .scale(y)
                        .orient("left")
                        .tickFormat(d3.format(".2s"));
                    var svg = d3Container
                        .append("svg")
                        .attr(attrName, "")
                        .attr("width", width + margin.left + margin.right)
                        .attr("height", height + margin.top + margin.bottom)
                        .append("g")
                        .attr(attrName, "")
                        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                    d3.csv("app/components/bar-charts-stacked-bar-chart/data.tsv", function (error, data) {
                        if (error)
                            throw error;
                        color.domain(d3.keys(data[0]).filter(function (key) { return key !== "State"; }));
                        data.forEach(function (d) {
                            var y0 = 0;
                            d.ages = color.domain().map(function (name) { return { name: name, y0: y0, y1: y0 += +d[name] }; });
                            d.total = d.ages[d.ages.length - 1].y1;
                        });
                        data.sort(function (a, b) { return b.total - a.total; });
                        x.domain(data.map(function (d) { return d.State; }));
                        y.domain([0, d3.max(data, function (d) { return d.total; })]);
                        svg.append("g")
                            .attr(attrName, "")
                            .attr("class", "x axis")
                            .attr("transform", "translate(0," + height + ")")
                            .call(xAxis);
                        svg.append("g")
                            .attr(attrName, "")
                            .attr("class", "y axis")
                            .call(yAxis)
                            .append("text")
                            .attr(attrName, "")
                            .attr("transform", "rotate(-90)")
                            .attr("y", 6)
                            .attr("dy", ".71em")
                            .style("text-anchor", "end")
                            .text("Population");
                        var state = svg.selectAll(".state")
                            .data(data)
                            .enter().append("g")
                            .attr(attrName, "")
                            .attr("class", "g")
                            .attr("transform", function (d) { return "translate(" + x(d.State) + ",0)"; });
                        state.selectAll("rect")
                            .attr(attrName, "")
                            .data(function (d) { return d.ages; })
                            .enter().append("rect")
                            .attr(attrName, "")
                            .attr("width", x.rangeBand())
                            .attr("y", function (d) { return y(d.y1); })
                            .attr("height", function (d) { return y(d.y0) - y(d.y1); })
                            .style("fill", function (d) { return color(d.name); });
                        var legend = svg.selectAll(".legend")
                            .data(color.domain().slice().reverse())
                            .enter().append("g")
                            .attr(attrName, "")
                            .attr("class", "legend")
                            .attr("transform", function (d, i) { return "translate(0," + i * 20 + ")"; });
                        legend.append("rect")
                            .attr(attrName, "")
                            .attr("x", width - 18)
                            .attr("width", 18)
                            .attr("height", 18)
                            .style("fill", color);
                        legend.append("text")
                            .attr(attrName, "")
                            .attr("x", width - 24)
                            .attr("y", 9)
                            .attr("dy", ".35em")
                            .style("text-anchor", "end")
                            .text(function (d) { return d; });
                    });
                };
                StackedBarChartComponent = __decorate([
                    core_1.Component({
                        selector: 'simple-bar-chart',
                        directives: [],
                        styleUrls: ["./app/components/bar-charts-stacked-bar-chart/style.css"],
                        templateUrl: "./app/components/bar-charts-stacked-bar-chart/view.html"
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], StackedBarChartComponent);
                return StackedBarChartComponent;
            }());
            exports_1("StackedBarChartComponent", StackedBarChartComponent);
        }
    }
});
//# sourceMappingURL=component.js.map