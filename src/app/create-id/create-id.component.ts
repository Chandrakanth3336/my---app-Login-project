import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IdentityCardService } from '../identity-card.service';

@Component({
  selector: 'app-create-id',
  templateUrl: './create-id.component.html',
  styleUrls: ['./create-id.component.css']
})
export class CreateIDComponent {
  public CreateIDForm:FormGroup=new FormGroup({
    name: new FormControl(),
    phone: new FormControl(),
    city: new FormControl(),
    dob: new FormControl(),
    email: new FormControl(),
    profile_picture:new FormControl()
  })

  constructor(private _identitycardService:IdentityCardService){}
  create(){
    console.log(this.CreateIDForm.value);
    this._identitycardService.createIdentitycard(this.CreateIDForm.value).subscribe(
      (data:any)=>{
        alert("Created Successfully");
        this.CreateIDForm.reset();
      },
      (err:any)=>{
        alert("Creation Failed");
      }
    )
  }
}
