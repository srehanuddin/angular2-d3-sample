import { Component } from "angular2/core" ;
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';

@Component({
    selector: 'side-menu',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: "./app/components/side-menu/side-menu.html"
})
export class SideMenuComponent {
}


