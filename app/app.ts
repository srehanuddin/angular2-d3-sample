import { Component } from "angular2/core" ;
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';

import {SideMenuComponent} from "./components/side-menu/side-menu"
import {HomeComponent} from "./components/home/home"
import {D3IntegrationCheckComponent} from "./components/d3-integration-check/d3-integration-check"
import {SimpleBarChartComponent} from "./components/bar-charts-simple-bar-chart/simple-bar-chart"
import {SimpleBarChartTipComponent} from "./components/bar-charts-simple-bar-chart-tip/simple-bar-chart-tip"

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
  { path: '/SimpleBarChartWithTip', name: 'SimpleBarChartWithTip', component: SimpleBarChartTipComponent },
  { path: '**', redirectTo: ['/Home'] }
])
export class App { 

    constructor(){

    } 
    
}


