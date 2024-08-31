import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BankaccountsService } from '../bankaccounts.service';

@Component({
  selector: 'app-view-bankaccount',
  templateUrl: './view-bankaccount.component.html',
  styleUrls: ['./view-bankaccount.component.css']
})
export class ViewBankaccountComponent {
  public bankaccount:any=[];
  constructor(private _activatedRoute:ActivatedRoute,private _bankaccountService:BankaccountsService){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        _bankaccountService.getBankAccount(data.id).subscribe(
          (data:any)=>{
            this.bankaccount=data;
          }
        )
      }
    )
  }
}
