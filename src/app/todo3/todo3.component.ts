import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo3',
  templateUrl: './todo3.component.html',
  styleUrls: ['./todo3.component.css']
})
export class Todo3Component {
  public text:string="";
  public date:string=""
 constructor(private _todoService:TodoService){
  _todoService.getview().subscribe(
    (data:any)=>{
    this.text=data.textData;
    this.date=data.dateData;
  
    }
  )
 }
}
