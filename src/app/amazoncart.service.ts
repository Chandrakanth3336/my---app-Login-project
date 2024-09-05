import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmazoncartService {

  private itemcount:number=0
  private itemcountSubject:BehaviorSubject<number>= new BehaviorSubject(this.itemcount);
  constructor() {}

settocart(){
  this.itemcount++;
  this.itemcountSubject.next(this.itemcount);
}

gettocart(){
  return this.itemcountSubject;
}

}
