import { Component, Input } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/Cart';
import { StaetService } from 'src/app/services/staet.service';
import { CartService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private _cart:Cart={items:[]};
itemsQuantity=0;
@Input()
get cart():Cart{
  return this._cart
}

set cart(cart:Cart){
this._cart=cart

this.itemsQuantity=cart.items.map((item)=>item.quantity).reduce((prev  ,current)=> prev+current,0)
}
constructor( private cartservice:StaetService){}

getTotal(items:Array<CartItem>):number{
    return this.cartservice.getTotal(items)
   }
   onClearCart():void{
this.cartservice.clearCart()
   }
}
