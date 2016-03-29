import { bootstrap } from "angular2/platform/browser" ;
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
class App { 
    
    data: Array<number>;
  divs: any; 

    //tasks: Observable<any[]>;
    constructor(
        @Inject(ElementRef) public elementRef: ElementRef
    ){
        
        console.log("TEST")
        console.log(d3)
            
d3.select(this.elementRef.nativeElement).select("h1").style("background-color", "yellow");

console.log(d3.select(this.elementRef.nativeElement).select("h1"))

    } 
    
    ngOnInit(){
        console.log("ngOnInit")
        d3.select(this.elementRef.nativeElement).select("h1").style("background-color", "yellow");
    }
    
    afterViewInit(){
        console.log("afterViewInit() called");
        d3.select(this.elementRef.nativeElement).select("h1").style("background-color", "yellow");
    }

    
}

bootstrap(App, [
]);

