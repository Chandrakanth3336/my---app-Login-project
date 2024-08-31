import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BankaccountsService } from '../bankaccounts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-bankaccounts',
  templateUrl: './create-bankaccounts.component.html',
  styleUrls: ['./create-bankaccounts.component.css']
})
export class CreateBankaccountsComponent {

  public id: string = '';
  public BankaccountForm: FormGroup = new FormGroup({
    account_name: new FormControl(),
    available_balance: new FormControl(),
    account_number: new FormControl(),
    city: new FormControl(),
    profie_picture: new FormControl()
  })
  constructor(private _bankaccountsService: BankaccountsService, private _activatedRoute: ActivatedRoute) {
    _activatedRoute.params.subscribe(
      (data: any) => {
        console.log(data.id);
        this.id = data.id;
        _bankaccountsService.getBankAccount(data.id).subscribe(
          (data: any) => {
            this.BankaccountForm.patchValue(data);
          }
        )
      }
    )
  }

  create() {
    console.log(this.BankaccountForm.value);
    if (this.id) {
      // Edit
      this._bankaccountsService.updateBankAccounts(this.BankaccountForm.value,this.id).subscribe(
        (data: any) => {
       
          alert("Updated Successfully");
        },
        (err: any) => {
          alert("Updation Failed"); 
        }
      )
    }
    else {
      // Create
      this._bankaccountsService.createBankAccounts(this.BankaccountForm.value).subscribe(
        (data: any) => {
          console.log(data);
          alert("Created Successfully");
        },
        (err: any) => {
          alert("Creation Failed");
        }

      )
    }
  }


}
