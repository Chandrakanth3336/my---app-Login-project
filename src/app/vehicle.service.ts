import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
public baseurl:string='https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction';
  constructor(private _httpClient:HttpClient ) { }

  getVehicles():Observable<any>{
    return this._httpClient.get(this.baseurl);
  }

  getVehicle(id:string):Observable<any>{
    return this._httpClient.get(this.baseurl+"/"+id);
  }

  getfilteredVehicles(term:string):Observable<any>{
    return this._httpClient.get(this.baseurl+"?filter="+term);
  }

  getsortedVehicles(column:string,order:string):Observable<any>{
    return this._httpClient.get(this.baseurl+"?sortBy="+column+"&order="+order);
  }

  getpaginatedVehicles(asdf:any,page:any):Observable<any>{
    return this._httpClient.get(this.baseurl+"?limit="+asdf+"&page="+page);
  }

  createvehicle(data:any):Observable<any>{
    return this._httpClient.post(this.baseurl,data);
  }
  
  updatevehicle(data:any,id:string):Observable<any>{
    return this._httpClient.put(this.baseurl+"/"+id,data);
  }

  deletevehicle(id:string):Observable<any>{
    return this._httpClient.delete(this.baseurl+"/"+id);
  }
}
