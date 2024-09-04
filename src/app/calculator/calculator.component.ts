import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
    public num11:number=0;
   public num22:number=0;
  public result:number=0;

  catch(value:number){
    this.result=value;
  }
  // sum(){
  //   this.result=this.num1 + this.num2;
  // }
  // sub(){
  //   this.result=this.num1 - this.num2;
  // }
  // mul(){
  //   this.result=this.num1 * this.num2;
  // }
  // div(){
  //   this.result=this.num1 / this.num2;
  // }
}
