import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() {}
  private tasktime:string='';
  private timetask:string='';
  private tasktimeSubject:BehaviorSubject<string>=new BehaviorSubject('');

  settasktime(value:string,result:string){
    this.tasktimeSubject.next(value)
   
  }
 
  gettasktime(){
    return this.tasktimeSubject;
  }

  // private tasktime1Subject:BehaviorSubject<string>=new BehaviorSubject('');
  // settasktime1(value: string){
  //   this.tasktime1Subject.next(value);
  // }
  
  // gettasktime1(){
  //   return this.tasktime1Subject;
  // }
// private viewin:string='';
  private viewSubject:BehaviorSubject<any>=new BehaviorSubject('');
  setasview(value:string){
    this.viewSubject.next(value);
  }
  getasview(){
    return this.viewSubject;
  }
}

