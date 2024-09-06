import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
public name:string='asdf';
public age:number=40;


public user:User[]=[
  {name:'qwer',age:45, email:'qwertyu@gmail.com'},
  {name:'asdfqwer',age:55, email:'asdfqwertyu@gmail.com'}
]
}

