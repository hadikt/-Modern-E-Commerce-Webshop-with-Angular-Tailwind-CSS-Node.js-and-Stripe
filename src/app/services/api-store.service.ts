import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from '../models/product';

const STORE_BASE_API='https://fakestoreapi.com'

@Injectable({
  providedIn: 'root'
})
export class ApiStoreService {

  constructor(private http:HttpClient) { }

getallproduct(limit='12',sort='desc',category?:string):Observable<Array<product>> {
return this.http.get<Array<product>>(
  `${STORE_BASE_API}/products${category? `/category/`+category :''}?${sort}&${limit}`)
}
getAllCategory():Observable<Array<string>>{
return this.http.get<Array<string>>(
  `${STORE_BASE_API}/products/categories`
)
}
}
