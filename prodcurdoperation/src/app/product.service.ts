
import { Injectable } from '@angular/core';
import {Product} from "./product.model";

@Injectable()
export class ProductService{
    parr=[new Product(12,"lays",30.00),
    new Product(13,"biscuits",40.00)];

    getAllProduct():Product[]{
        return this.parr;
    }

    addProduct(p:Product){
        this.parr.push(p);
    }

    updateProduct(p:Product){
        for(let i=0;i<this.parr.length;i++){
            if(this.parr[i].pid==p.pid){
                this.parr[i].pname=p.pname;
                this.parr[i].price=p.price;
                break;
            }
        }
    }
    deleteProduct(p:Product){
            for(let i=0;i<this.parr.length;i++){
                if(this.parr[i].pid==p.pid){
            this.parr.splice(i,1);
            break;
        }
    }
}
}
