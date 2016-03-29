System.register(["angular2/core", 'angular2/router', "./components/side-menu/side-menu", "./components/home/home", "./components/d3-integration-check/d3-integration-check", "./components/bar-charts-simple-bar-chart/simple-bar-chart"], function(exports_1, context_1) {
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
    var core_1, router_1, side_menu_1, home_1, d3_integration_check_1, simple_bar_chart_1;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (side_menu_1_1) {
                side_menu_1 = side_menu_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (d3_integration_check_1_1) {
                d3_integration_check_1 = d3_integration_check_1_1;
            },
            function (simple_bar_chart_1_1) {
                simple_bar_chart_1 = simple_bar_chart_1_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                }
                App = __decorate([
                    core_1.Component({
                        selector: 'app',
                        directives: [router_1.ROUTER_DIRECTIVES, side_menu_1.SideMenuComponent],
                        templateUrl: "./app/app.html"
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'root', redirectTo: ['/Home'] },
                        { path: '/home', name: 'Home', component: home_1.HomeComponent, useAsDefault: true },
                        { path: '/D3IntegrationCheck', name: 'D3IntegrationCheck', component: d3_integration_check_1.D3IntegrationCheckComponent },
                        { path: '/SimpleBarChart', name: 'SimpleBarChart', component: simple_bar_chart_1.SimpleBarChartComponent },
                        { path: '**', redirectTo: ['/Home'] }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            }());
            exports_1("App", App);
        }
    }
});
//# sourceMappingURL=app.js.map