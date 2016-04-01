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
    var GroupedBarChartComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (d3_1) {
                d3 = d3_1;
            }],
        execute: function() {
            GroupedBarChartComponent = (function () {
                function GroupedBarChartComponent(elementRef) {
                    this.elementRef = elementRef;
                }
                GroupedBarChartComponent.prototype.ngOnInit = function () {
                    var el = this.elementRef.nativeElement;
                    var attrName = el.children && el.children[0] && el.children[0].attributes && el.children[0].attributes[0] && el.children[0].attributes[0].name;
                    var componentContainer = d3.select(this.elementRef.nativeElement);
                    var d3Container = componentContainer.select("#display");
                    var n = 20, // number of samples
                    m = 4; // number of series
                    var data = d3.range(m).map(function () { return d3.range(n).map(Math.random); });
                    var margin = { top: 20, right: 30, bottom: 30, left: 40 }, width = 960 - margin.left - margin.right, height = 500 - margin.top - margin.bottom;
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
                        .style("fill", function (d, i) { return z(i); })
                        .attr("transform", function (d, i) { return "translate(" + x1(i) + ",0)"; })
                        .selectAll("rect")
                        .data(function (d) { return d; })
                        .enter().append("rect")
                        .attr(attrName, "")
                        .attr("width", x1.rangeBand())
                        .attr("height", y)
                        .attr("x", function (d, i) { return x0(i); })
                        .attr("y", function (d) { return height - y(d); });
                };
                GroupedBarChartComponent = __decorate([
                    core_1.Component({
                        selector: 'simple-bar-chart',
                        directives: [],
                        styleUrls: ["./app/components/bar-charts-grouped-bar-chart/style.css"],
                        templateUrl: "./app/components/bar-charts-grouped-bar-chart/view.html"
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], GroupedBarChartComponent);
                return GroupedBarChartComponent;
            }());
            exports_1("GroupedBarChartComponent", GroupedBarChartComponent);
        }
    }
});
//# sourceMappingURL=component.js.map