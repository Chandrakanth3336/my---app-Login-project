import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  constructor() {}
   private todo:{textData:string;dateData:string}[]=[];

   private tasktimeSubject:BehaviorSubject<any>=new BehaviorSubject(this.todo);
   
  settasks(todos:any){
    this.todo.push(todos);
    this.tasktimeSubject.next(this.todo);
  }
  gettasks(){
    return this.tasktimeSubject;
  }
 
  
  private viewSubject:BehaviorSubject<any>=new BehaviorSubject(this.todo);
  setview(value:any){
    this.viewSubject.next(value);
    
  }
  getview(){
    return this.viewSubject;
  }

  private editSubject:BehaviorSubject<any>=new BehaviorSubject(this.todo);
  setedit(value:any){
    this.editSubject.next(value,);
  }

  getedit(){
    return this.editSubject;
    
  }
}

