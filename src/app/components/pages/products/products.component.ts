import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  @Output()columnscountchange=new EventEmitter<number>();
  @Output()itemcountchange=new EventEmitter<number>();
  @Output()sortchange=new EventEmitter<string>();

sort='sort'
itemshowcount=12;
onSortUpdate(newsort:string):void{
this.sort= newsort;
this.sortchange.emit(newsort)
}
onItemUpdate(count:number):void{
this.itemshowcount=count;
this.itemcountchange.emit(count)
}
oncolumnsupdated(colsnum:number):void{
this.columnscountchange.emit(colsnum)
}
}
