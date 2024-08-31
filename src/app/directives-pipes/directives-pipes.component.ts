import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-pipes',
  templateUrl: './directives-pipes.component.html',
  styleUrls: ['./directives-pipes.component.css']
})
export class DirectivesPipesComponent {


    public ages:number[]=[10,20,30,40,50];

    public states:string[]=['Telangana','Karnataka','Andhra','tamilnadu'];

    public users:any=[
      {name: 'a',age:20, phone:799300,marks:94},
      {name: 'b',age:16, phone:79930, marks:63},
      {name: 'c',age:14, phone:79930,marks:27},
      {name: 'd',age:29, phone:7993,marks:104}
    ]


    public today:any = new Date();
}
