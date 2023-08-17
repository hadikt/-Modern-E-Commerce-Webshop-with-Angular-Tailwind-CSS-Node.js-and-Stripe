import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/Cart';
import { StaetService } from 'src/app/services/staet.service';
import{ loadStripe} from  '@stripe/stripe-js'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

cart:Cart={ items:[{
  product:'http://via.placeholder.com/150',
  name:'snickers',
  price:150,
  quantity:2,
  id:1
},{ product:'http://via.placeholder.com/150',
name:'snickers',
price:150,
quantity:6,
id:1} ]};
datasource:Array<CartItem>=[]
displayedColumns:Array<string>=[
  'product',
  'name',
  'price',
  'quantity',
   'total',
   'action',
]
constructor(private cartservice:StaetService,private http:HttpClient){}

ngOnInit(): void {

this.cartservice.cart.subscribe((_cart:Cart)=>{
  this.cart=_cart
  this.datasource=this.cart.items
})
}
getTotal(items:Array<CartItem>):number{
 return this.cartservice.getTotal(items)
}

onclear():void{
this.cartservice.clearCart();
}

onRemove(item:CartItem):void{
this.cartservice.removefromcart(item)
}

onAddQuantity(item:CartItem):void{
this.cartservice.addToCart(item)
}

onRemoveQuantity(item:CartItem){
this.cartservice.removeQuantity(item)
}
onCheckOut():void{
this.http.post('http://localhost:4242/checkout',{
  items:this.cart.items
}).subscribe(async(res:any)=>{
  let stripe = await loadStripe('pk_test_51NfzLoSC1lbXyREZSCjS1OpP0plBbBwFpHltwwrH0h303wvovQQjJPwBWkOUwfvHCYcfAxCJeQVJYLKxDS0bs11z001EauTgxx')
  stripe?.redirectToCheckout({
    sessionId:res.id
  })
})
}
}
