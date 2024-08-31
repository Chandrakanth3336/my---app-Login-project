import { Component } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent {
  public url:string="/assets/dice1.jpg/";
roll(){
  
 const rndInt = Math.floor(Math.random() * 6) + 1
  console.log(rndInt);

    if(rndInt==1)
    {
      this.url= '/assets/dice1.jpg/';
    }
    else if(rndInt==2)
    {
      this.url= '/assets/dice2.jpg/';
    }
     else if(rndInt==3)
    {
      this.url= '/assets/dice3.jpg/';
    }
    else if(rndInt==4)
    {
      this.url= '/assets/dice4.jpg/';
    }
    else if(rndInt==4)
    {
      this.url= '/assets/dice5.jpg/';
    }
    else{
      this.url= '/assets/dice6.jpg/';
    }


  // this.url=` /assets/dice${rndInt}.jpg/`
 
}
}
