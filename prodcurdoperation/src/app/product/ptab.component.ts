import { Component } from '@angular/core';
import {Product} from "../product.model"
import { ProductService } from '../product.service';

@Component({
    selector:"ptab",
    templateUrl:"./ptab.component.html",
    styleUrls:["./ptab.component.css"]

})

export class PtabComponent{
  parr:Product[];
  pob:Product;
        flag=false;
    constructor(private pservice:ProductService){
        console.log("in ptab constructor");
    console.log("ptabcomponent constructor called");
}
ngOnInit(){
    console.log("ngoninit in ptabcomponent")
    this.parr=this.pservice.getAllProduct();
}
updateProduct(p:Product){
    this.flag=true;
    this.pob=p;

}
deleteProduct(p:Product){

this.pservice.deleteProduct(p);

}
        dispalyform(){
            this.flag=true;
        }
}