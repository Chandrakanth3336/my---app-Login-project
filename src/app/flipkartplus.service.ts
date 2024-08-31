import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlipkartplusService {

  constructor(private _httpClient:HttpClient) { }
  getFlipkartplus():Observable<any>{
    return this._httpClient.get('https://fakestoreapi.com/products');

  }
}
