import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { product } from 'src/app/models/product';
import { ApiStoreService } from 'src/app/services/api-store.service';
import { StaetService } from 'src/app/services/staet.service';
import { CartService } from 'src/app/services/storage.service';
const row_height:{[id:number]:number}={1:400,3:335,4:350}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy{
cols=3;
rowHeight=row_height[this.cols]
category:string|undefined;
productss:Array<product> |undefined
sort='desc';
count='12';
productSubscription:Subscription |undefined
constructor( private cartservice:StaetService,private storeservice:ApiStoreService){}
  ngOnInit(): void {
this.getproducts();
  }

  getproducts():void{
   this.productSubscription= this.storeservice.getallproduct(this.count,this.sort,this.category).subscribe((_product)=>{
    this.productss=_product
   })
  }

  onColumnsCount(colsnum:number):void{
this.cols=colsnum
this.rowHeight=row_height[this.cols]

console.log(this.cols);

  }
  onShowcategory(newCategory:string):void{
this.category=newCategory;
this.getproducts( )
  }
  onAddToCart(product:product):void{
this.cartservice.addToCart({
  product:product.image,
  name:product.title,
  price:product.price,
  quantity:1,
  id:product.id
})
  }

  onitemcountchange(newcount:number):void{
  this.count=newcount.toString()
  this.getproducts();
    }
    onsortchange(newSort:string):void{
      this.sort=newSort;
      this.getproducts();

    }
  ngOnDestroy(): void {
    if(this.productSubscription){
      this.productSubscription.unsubscribe();
    }
  }


}

//3.07//
