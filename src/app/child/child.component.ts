import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

    // @Input() public ac: string = '';

    // public bc : string = '';

    // @Output() public bEvent:EventEmitter<string>=new EventEmitter


    // send(){
    //   this.bEvent.emit(this.bc);
    // }


    @Input() public num1:number=0;
    @Input() public num2:number=0;
    public result:number=0;
    @Output() public bEvent : EventEmitter<number>=new EventEmitter();


sum(){
this.result=this.num1+this.num2;
this.bEvent.emit(this.result);
}

mul(){
this.result=this.num1*this.num2;
this.bEvent.emit(this.result);
}

sub(){
  this.result=this.num1 - this.num2;
  this.bEvent.emit(this.result);
}

div(){
  this.result=this.num1 / this.num2;
  this.bEvent.emit(this.result);
}

}
