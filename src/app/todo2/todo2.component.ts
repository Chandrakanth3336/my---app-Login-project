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
  public todo:{textData:string;dateData:string}[]=[];

 
constructor(private _todoService:TodoService){
  _todoService.gettasks().subscribe(
    (data:any)=>{
      console.log(data);
      this.todo=data;
     
    }
  )
}

view(i:number){
//  var texttodo=this.todo[i];
this._todoService.setview(this.todo[i]);
}
edit(i:number){
this._todoService.setedit(this.todo[i])
}
delete(i:number){
  this.todo.splice(i ,1);
}
}
