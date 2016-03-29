System.register(["angular2/platform/browser", "angular2/core", 'd3'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var browser_1, core_1, d3;
    var App;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (d3_1) {
                d3 = d3_1;
            }],
        execute: function() {
            App = (function () {
                function App(elementRef) {
                    this.elementRef = elementRef;
                }
                App.prototype.ngOnInit = function () {
                    console.log("ngOnInit");
                    d3.select(this.elementRef.nativeElement).select("h1").style("background-color", "yellow");
                    //console.log(d3.select(this.elementRef.nativeElement).selectAll('div'));
                    var margin = { top: 20, right: 20, bottom: 30, left: 40 }, width = 960 - margin.left - margin.right, height = 500 - margin.top - margin.bottom;
                    var x = d3.scale.ordinal()
                        .rangeRoundBands([0, width], .1);
                    var y = d3.scale.linear()
                        .range([height, 0]);
                    var xAxis = d3.svg.axis()
                        .scale(x)
                        .orient("bottom");
                    var yAxis = d3.svg.axis()
                        .scale(y)
                        .orient("left")
                        .ticks(10, "%");
                    var svg = d3.select("body").append("svg")
                        .attr("width", width + margin.left + margin.right)
                        .attr("height", height + margin.top + margin.bottom)
                        .append("g")
                        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                    d3.tsv("data.tsv", type, function (error, data) {
                        if (error)
                            throw error;
                        x.domain(data.map(function (d) { return d.letter; }));
                        y.domain([0, d3.max(data, function (d) { return d.frequency; })]);
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
                            .text("Frequency");
                        svg.selectAll(".bar")
                            .data(data)
                            .enter().append("rect")
                            .attr("class", "bar")
                            .attr("x", function (d) { return x(d.letter); })
                            .attr("width", x.rangeBand())
                            .attr("y", function (d) { return y(d.frequency); })
                            .attr("height", function (d) { return height - y(d.frequency); });
                    });
                    function type(d) {
                        d.frequency = +d.frequency;
                        return d;
                    }
                };
                App = __decorate([
                    core_1.Component({
                        selector: 'app',
                        host: {
                            class: "myClass"
                        },
                        template: "\n            <h1>D3.js Integrated if background is yellow</h1>\n            <div>asdasdas</div>\n        ",
                        styleUrls: [
                            "style.css"
                        ]
                    }),
                    __param(0, core_1.Inject(core_1.ElementRef)), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], App);
                return App;
            }());
            browser_1.bootstrap(App, []);
        }
    }
});
//# sourceMappingURL=app.js.map