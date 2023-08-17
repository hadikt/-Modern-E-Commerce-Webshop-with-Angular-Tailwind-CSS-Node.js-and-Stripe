import { Component, OnInit } from '@angular/core';
import { Cart } from './models/Cart';
import { CartService } from './services/storage.service';
import { StaetService } from './services/staet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
constructor(private cartservice:StaetService){}
cart:Cart={items:[]}

  ngOnInit(): void {
    this.cartservice.cart.subscribe((_cart)=>{
      this.cart=_cart
    })
}


}
