import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiStoreService } from 'src/app/services/api-store.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit ,OnDestroy{
  @Output() showCategory=new EventEmitter<string>();
catergories:Array<string> | undefined;
categorysubscription:Subscription | undefined
constructor(private apiservice:ApiStoreService){}
  ngOnInit(): void {
    this.apiservice.getAllCategory().subscribe((res)=>{
      this.catergories=res
    })
   }

onshowcategory(catergory:string):void{
this.showCategory.emit(catergory)
}
ngOnDestroy(): void {
  if(this.categorysubscription){
this.categorysubscription.unsubscribe()
  }
}
}
// 3.11
