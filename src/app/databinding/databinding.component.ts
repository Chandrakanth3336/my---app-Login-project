import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  public age :number=22;
  public name:string='aabbcc';
  public isIndian :boolean=true;

  public isValid :boolean=true;
  public url:string="/assets/404.png";

  public phone:string="+91";
    submit(){
      alert("submitted!!!!!!!");
    }
    typing(){
      alert("typing.......");
    }

   
  }



















  