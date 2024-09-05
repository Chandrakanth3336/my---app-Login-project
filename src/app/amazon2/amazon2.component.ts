import { Component } from '@angular/core';
import { AmazoncartService } from '../amazoncart.service';

@Component({
  selector: 'app-amazon2',
  templateUrl: './amazon2.component.html',
  styleUrls: ['./amazon2.component.css']
})
export class Amazon2Component {
public itemcount:number=0;
  constructor(private _amazoncartService:AmazoncartService){
    _amazoncartService.gettocart().subscribe(
      (data:any)=>{
        this.itemcount=data;
      }
    )
  }


}
