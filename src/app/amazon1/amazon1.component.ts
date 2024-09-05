import { Component } from '@angular/core';
import { AmazoncartService } from '../amazoncart.service';

@Component({
  selector: 'app-amazon1',
  templateUrl: './amazon1.component.html',
  styleUrls: ['./amazon1.component.css']
})
export class Amazon1Component {
  
constructor(private _amazoncartService:AmazoncartService){}
store(){
  this._amazoncartService.settocart();
}



}
