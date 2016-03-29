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
                //tasks: Observable<any[]>;
                function App(elementRef) {
                    this.elementRef = elementRef;
                    console.log("TEST");
                    console.log(d3);
                    d3.select(this.elementRef.nativeElement).select("h1").style("background-color", "yellow");
                    console.log(d3.select(this.elementRef.nativeElement).select("h1"));
                }
                App.prototype.ngOnInit = function () {
                    console.log("ngOnInit");
                    d3.select(this.elementRef.nativeElement).select("h1").style("background-color", "yellow");
                };
                App.prototype.afterViewInit = function () {
                    console.log("afterViewInit() called");
                    d3.select(this.elementRef.nativeElement).select("h1").style("background-color", "yellow");
                };
                App = __decorate([
                    core_1.Component({
                        selector: 'app',
                        host: {
                            class: "myClass"
                        },
                        template: "    \n        <h1>D3.js Integrated if background is yellow</h1>\n    "
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