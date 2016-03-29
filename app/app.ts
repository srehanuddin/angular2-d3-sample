import { Component } from "angular2/core" ;
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';

import {SideMenuComponent} from "./components/side-menu/side-menu"
import {HomeComponent} from "./components/home/home"

@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES, SideMenuComponent],
    templateUrl: "./app/app.html"
})
@RouteConfig([
  { path: '/', name: 'root', redirectTo: ['/Home'] },
  { path: '/home', name: 'Home', component: HomeComponent, useAsDefault : true },
  //{ path: '/about', name: 'About', component: AboutComponent },
  //{ path: '/contact/...', name: 'Contact', component: ContactComponent },
  //{ path: '/contactus', name: 'ContactUs', redirectTo: ['/Contact'] },
])
export class App { 

    constructor(){

    } 
    
}


