import { Component, Directive, Attribute, ElementRef, Inject } from "angular2/core" ;
import * as d3 from 'd3';


@Component({
    selector: 'app' ,
        host : {
            class : "myClass"
        },
        template: `
            <h1>D3.js Integrated if background is yellow</h1>
        `
})
export class App { 

    constructor(@Inject(ElementRef) public elementRef: ElementRef){

    } 
    
    ngOnInit(){
        console.log("ngOnInit")
        d3.select(this.elementRef.nativeElement).select("h1").style("background-color", "yellow");
    }
       
}


