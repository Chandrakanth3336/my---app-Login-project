import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo1',
  templateUrl: './todo1.component.html',
  styleUrls: ['./todo1.component.css']
})
export class Todo1Component {

  public task1:string='';
  public time1:string='';
constructor(private _todoService:TodoService){
_todoService.getedit().subscribe(
  (data:any)=>{
    this.task1=data.textData;
    this.time1=data.dateData; 
   
  }
)
}
create(){
  
this._todoService.settasks({textData:this.task1,dateData:this.time1});
}
reset(){
this.task1='';
this.time1='';
}


}
