import { Component } from '@angular/core';

@Component({
    selector:"pform",
    templateUrl:"./pform.component.html",
    styleUrls:["./pform.component.css"]

})

import class PformComponent{
pid:number;
pname:string;
pdesg:string;
pdept:string;

displaydata(){
        console.log(this.pid+"---"+this.pname+"---"+this.pdesg+"---"+this.pdept);
    }

    
}//class ends here