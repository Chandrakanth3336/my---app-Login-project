import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private cartcount:number=0;
  private countSubject:BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() {}

  // set value

  setCount(value:number){
    this.countSubject.next(value);
  }

// get value

getCount(){
  return this.countSubject
}


//********************************************** */

private cartCountSubject :BehaviorSubject<number>= new BehaviorSubject(this.cartcount);

addtocart(){
  this.cartcount++;
  this.cartCountSubject.next(this.cartcount);
}
getcartcount(){
 return this.cartCountSubject;
}

}
