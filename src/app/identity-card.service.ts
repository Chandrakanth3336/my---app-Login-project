import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdentityCardService {

  constructor(private _httpClient:HttpClient) { }

    getIdentitycard():Observable<any>{
      return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student");
    }
    getfilteredIdentitycard(asdf:string):Observable<any>{
     return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter="+asdf);
    }
    getsortedIdentitycard(column:string,order:string):Observable<any>{
      return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortBy="+column+"&order="+order);
     }
     getpaginatedIdentitycard(zxcv:string,page:string):Observable<any>{
      return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?limit="+zxcv+"&page="+page);
     }
     createIdentitycard(data:any):Observable<any>{
      return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/student",data);
    }
    deleteIdentitycard(id:string):Observable<any>{
      return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id);
    }
}
