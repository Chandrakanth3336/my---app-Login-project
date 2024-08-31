import { Component } from '@angular/core';
import { FlipkartplusService } from '../flipkartplus.service';

@Component({
  selector: 'app-flipkartplus',
  templateUrl: './flipkartplus.component.html',
  styleUrls: ['./flipkartplus.component.css']
})
export class FlipkartplusComponent {

public flipkartplus:any=[];

constructor(private _flipkartplusService:FlipkartplusService){
    _flipkartplusService.getFlipkartplus().subscribe(
      (data:any)=>{
        this.flipkartplus=data;
      },
      (err:any)=>{
        ("Internal Server Error");
      }
    )
}

}
