import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent {
   @Input() public Maxlen:number=50;
   public textarea:string='';
  //  public count:number=0;


countletters(){
if(this.textarea.length<=this.Maxlen){
  this.textarea.length
}

}
  


}
