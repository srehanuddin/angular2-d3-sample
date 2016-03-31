System.register(["angular2/core", 'd3', 'd3-tip'], function(exports_1, context_1) {
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
    var core_1, d3, d3tip;
    var SimpleBarChartTipComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (d3_1) {
                d3 = d3_1;
            },
            function (d3tip_1) {
                d3tip = d3tip_1;
            }],
        execute: function() {
            SimpleBarChartTipComponent = (function () {
                function SimpleBarChartTipComponent(elementRef) {
                    this.elementRef = elementRef;
                    d3.tip = d3tip.default(d3);
                    //console.log(d3tip(d3));
                }
                SimpleBarChartTipComponent.prototype.ngOnInit = function () {
                };
                SimpleBarChartTipComponent = __decorate([
                    core_1.Component({
                        selector: 'simple-bar-chart-tip',
                        directives: [],
                        styleUrls: ["./app/components/bar-charts-simple-bar-chart-tip/style.css"],
                        templateUrl: "./app/components/bar-charts-simple-bar-chart-tip/simple-bar-chart-tip.html"
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], SimpleBarChartTipComponent);
                return SimpleBarChartTipComponent;
            }());
            exports_1("SimpleBarChartTipComponent", SimpleBarChartTipComponent);
        }
    }
});
//# sourceMappingURL=simple-bar-chart-tip.js.map