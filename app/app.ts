import { Component } from "angular2/core" ;
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';

import {SideMenuComponent} from "./components/side-menu/side-menu"
import {HomeComponent} from "./components/home/home"
import {D3IntegrationCheckComponent} from "./components/d3-integration-check/d3-integration-check"
import {SimpleBarChartComponent} from "./components/bar-charts-simple-bar-chart/simple-bar-chart"
import {StackedBarChartComponent} from "./components/bar-charts-stacked-bar-chart/component"
import {HierarchicalBarChartComponent} from "./components/bar-charts-hierarchical-bar-chart/component"
import {GroupedBarChartComponent} from "./components/bar-charts-grouped-bar-chart/component"
import {WaterfallBarChartComponent} from "./components/bar-charts-waterfall-bar-chart/component"

@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES, SideMenuComponent],
    templateUrl: "./app/app.html"
})
@RouteConfig([
  { path: '/', name: 'root', redirectTo: ['/Home'] },
  { path: '/home', name: 'Home', component: HomeComponent, useAsDefault : true },
  { path: '/D3IntegrationCheck', name: 'D3IntegrationCheck', component: D3IntegrationCheckComponent },
  { path: '/SimpleBarChart', name: 'SimpleBarChart', component: SimpleBarChartComponent },
  { path: '/StackedBarChart', name: 'StackedBarChart', component: StackedBarChartComponent },
  { path: '/HierarchicalBarChart', name: 'HierarchicalBarChart', component: HierarchicalBarChartComponent },
  { path: '/GroupedBarChart', name: 'GroupedBarChart', component: GroupedBarChartComponent },
  { path: '/WaterfallBarChart', name: 'WaterfallBarChart', component: WaterfallBarChartComponent },
  { path: '**', redirectTo: ['/Home'] }
])
export class App { 

    constructor(){

    } 
    
}


