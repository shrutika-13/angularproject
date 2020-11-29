import { parseI18nMeta } from "@angular/compiler/src/render3/view/i18n/meta"
export class Product{
    pid:number;
    pname:string;
    price:number;

    constructor(pid:number,nm:string,price:number){
        this.pid=pid;
        this.pname=nm;
        this.price=price;

    }
}

