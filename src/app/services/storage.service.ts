import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../models/Cart';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {
cart = new BehaviorSubject<Cart>({items:[]})


  // constructor(private _snackbar:MatSnackBar) { }
//   addToCart(item:CartItem):void{
// const items= [...this.cart.value.items]
// const itemIncart =items.find((_item)=> _item.id==item.id)
// if(itemIncart){
//   itemIncart.quantity +=1
// }
// else{
// items.push(item )
// }

// this.cart.next({items});
// this._snackbar.open('1 item Add to Cart.','OK',{duration:3000})
// console.log(this.cart.value);

//   }

//   getTotal(items:Array<CartItem>):number{
//     return items.map((item)=> item.price*item.quantity
//    ).reduce((prev,current)=>prev + current,0)
//    }

//    clearCart():void{
//     this.cart.next({items:[]})
//     this._snackbar.open('cart is cleared','OK',{duration:3000})
//    }
}
