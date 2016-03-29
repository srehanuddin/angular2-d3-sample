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
    var D3IntegrationCheckComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (d3_1) {
                d3 = d3_1;
            }],
        execute: function() {
            D3IntegrationCheckComponent = (function () {
                function D3IntegrationCheckComponent(elementRef) {
                    this.elementRef = elementRef;
                }
                D3IntegrationCheckComponent.prototype.ngOnInit = function () {
                    console.log("ngOnInit");
                    d3.select(this.elementRef.nativeElement).select("p").style("background-color", "yellow");
                };
                D3IntegrationCheckComponent = __decorate([
                    core_1.Component({
                        selector: 'd3-integration-check',
                        directives: [],
                        templateUrl: "./app/components/d3-integration-check/d3-integration-check.html"
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], D3IntegrationCheckComponent);
                return D3IntegrationCheckComponent;
            }());
            exports_1("D3IntegrationCheckComponent", D3IntegrationCheckComponent);
        }
    }
});
//# sourceMappingURL=d3-integration-check.js.map