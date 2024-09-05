import { Component } from '@angular/core';
import { AmazoncartService } from '../amazoncart.service';

@Component({
  selector: 'app-amazon4',
  templateUrl: './amazon4.component.html',
  styleUrls: ['./amazon4.component.css']
})
export class Amazon4Component {
  public itemcount:number=0;
  constructor(private _amazoncartService:AmazoncartService){
    _amazoncartService.gettocart().subscribe(
      (data:any)=>{
        this.itemcount=data;
      }
    )
  }
}
