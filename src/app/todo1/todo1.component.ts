import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo1',
  templateUrl: './todo1.component.html',
  styleUrls: ['./todo1.component.css']
})
export class Todo1Component {
  public taskarea:string='';
   public timeinput:string='';

  //  public todoform:FormGroup=new FormGroup({
  //   todo : new FormArray([])
  //  });
   
  // //  get todoFormArray(){
  // //    return this.todoform.get('todo') as FormArray
  // //  }
  

  constructor(private _todoService:TodoService){}

  create(){
    this._todoService.settasktime(this.taskarea,this.timeinput);
    // this._todoService.settasktime(this.timeinput);
    

    // this.todoFormArray.push(
    //   new FormGroup({
    //     task:new FormControl(),
    //     time: new FormControl()
    //   })
    // )
  }
  reset(){
    this.taskarea='';
    this.timeinput='';
  }
}
