import { Component, ElementRef } from "angular2/core" ;
import * as d3 from 'd3';

@Component({
    selector: 'd3-integration-check',
    directives: [],
    templateUrl: "./app/components/d3-integration-check/d3-integration-check.html"
})
export class D3IntegrationCheckComponent {
    constructor(public elementRef: ElementRef){
    } 
    
    ngOnInit(){
        console.log("ngOnInit")
        d3.select(this.elementRef.nativeElement).select("p").style("background-color", "yellow");
    }
}


