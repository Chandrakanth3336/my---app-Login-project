import { Component } from '@angular/core';
import { AmazoncartService } from '../amazoncart.service';

@Component({
  selector: 'app-amazon3',
  templateUrl: './amazon3.component.html',
  styleUrls: ['./amazon3.component.css']
})
export class Amazon3Component {
  public itemcount:number=0;
  constructor(private _amazoncartService:AmazoncartService){
    _amazoncartService.gettocart().subscribe(
      (data:any)=>{
        this.itemcount=data;
      }
    )


  }
}
