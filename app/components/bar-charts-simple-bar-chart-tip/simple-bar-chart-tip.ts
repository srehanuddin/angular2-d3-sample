import { Component, ElementRef } from "angular2/core" ;
import * as d3 from 'd3';
import * as d3tip from 'd3-tip';

@Component({
    selector: 'simple-bar-chart-tip',
    directives: [],
    styleUrls : ["./app/components/bar-charts-simple-bar-chart-tip/style.css"],
    templateUrl: "./app/components/bar-charts-simple-bar-chart-tip/simple-bar-chart-tip.html"
})
export class SimpleBarChartTipComponent {
    constructor(public elementRef: ElementRef){
        
        d3.tip = d3tip.default(d3);
        //console.log(d3tip(d3));
        
    } 
    
    ngOnInit(){   
        
        
        
    }
}


