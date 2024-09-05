import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo3',
  templateUrl: './todo3.component.html',
  styleUrls: ['./todo3.component.css']
})
export class Todo3Component {
  public view:string='';
constructor(private _todoService:TodoService){
  _todoService.getasview().subscribe(
    (data:any)=>{
      this.view=data;
    }
  )
}
}
