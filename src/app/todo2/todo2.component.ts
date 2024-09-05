import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo2',
  templateUrl: './todo2.component.html',
  styleUrls: ['./todo2.component.css']
})
export class Todo2Component {
public task:any;
public time:any;
public viewed:string='';

constructor(private _todoService:TodoService){
  _todoService.gettasktime().subscribe(
    (data:any)=>{
      this.task=data;
      this.time=data;
    }
  )

  // _todoService.gettasktime().subscribe(
  //   (data:any)=>{
  //     this.time=data;
  //   }
  // )
  
}

view(){
  this._todoService.setasview(this.viewed);
  
}

}
