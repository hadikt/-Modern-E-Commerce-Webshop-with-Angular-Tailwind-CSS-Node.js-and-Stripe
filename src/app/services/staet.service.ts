import { Injectable, Sanitizer } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cart, CartItem } from '../models/Cart';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaetService {

  cart = new BehaviorSubject<Cart>({items:[]})


  constructor(private _snackbar:MatSnackBar) { }
  addToCart(item:CartItem):void{
const items= [...this.cart.value.items]
const itemIncart =items.find((_item)=> _item.id==item.id)
if(itemIncart){
  itemIncart.quantity +=1
}
else{
items.push(item )
}

this.cart.next({items});
this._snackbar.open('1 item Add to Cart.','OK',{duration:3000})
console.log(this.cart.value);

  }

  getTotal(items:Array<CartItem>):number{
    return items.map((item)=> item.price*item.quantity
   ).reduce((prev,current)=>prev + current,0)
   }

   clearCart():void{
    this.cart.next({items:[]})
    this._snackbar.open('cart is cleared','OK',{duration:3000})
   }

   removefromcart(item:CartItem,update=true):Array<CartItem>{
  const filteritems = this.cart.value.items.filter((_item)=>_item.id!==item.id)

  if(update){
    this.cart.next({items:filteritems});
    this._snackbar.open('1 item is removed from cart','OK',{duration:3000})
     }
     return filteritems;
  }


   removeQuantity(item:CartItem):void{
    let itemforRemoval:CartItem |undefined
 let  filtereditems=this.cart.value.items.map((_item)=>{
  if(_item.id==item.id){
    _item.quantity--;
    if(_item.quantity==0){
itemforRemoval=_item
    }
  }
  return _item;
})
if(itemforRemoval){
 filtereditems=this.removefromcart(itemforRemoval)
}
this.cart.next({items:filtereditems})
this._snackbar.open('1 item removed from cart','OK',{duration:3000} )
   }


  
  }
