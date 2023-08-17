import { Component, EventEmitter, Input, Output } from '@angular/core';
import { product } from 'src/app/models/product';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.scss']
})
export class ProductBoxComponent {
@Input()fullwidthMode =false
@Input() product:product| undefined
@Output() addToCart =new EventEmitter();
onAddtoCart():void{
this.addToCart.emit(this.product)
}
}

//
2.02
