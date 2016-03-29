import { bootstrap } from "angular2/platform/browser" ;
import { Component, Directive, Attribute, ElementRef, Inject } from "angular2/core" ;

@Component({
    selector: 'app' ,
        host : {
            class : "myClass"
        },
    template: `    
        Hello D3
    `
})
class App {  

    //tasks: Observable<any[]>;
    constructor(@Inject(ElementRef) elementRef: ElementRef){
        
        console.log("elementRef");
        console.log(elementRef);

    } 
    
}

bootstrap(App, [
]);

