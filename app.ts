import { bootstrap } from "angular2/platform/browser" ;
import { Component } from "angular2/core" ;


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
    constructor(){
    } 
    
}

bootstrap(App, [
]);

