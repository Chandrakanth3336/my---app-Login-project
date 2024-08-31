import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReloadService {

  constructor(private _httpClient:HttpClient) { }

  getreload():Observable<any>{
    return this._httpClient.get("https://bored-api.appbrewery.com/random");
  }
}
