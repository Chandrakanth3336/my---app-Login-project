import { Component } from '@angular/core';
import { BankaccountsService } from '../bankaccounts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bankaccounts',
  templateUrl: './bankaccounts.component.html',
  styleUrls: ['./bankaccounts.component.css']
})
export class BankaccountsComponent {

 public bankaccounts:any=[];
 public term:string='';
 public column:string='';
 public order:string='';
 constructor(private _bankaccountsService:BankaccountsService, private _router:Router){
  _bankaccountsService.getBankAccounts().subscribe(
    (data:any)=>{
      this.bankaccounts=data;
    },
    (err:any)=>{
      alert("Internal Server Down");
    }
  )
 }
 filter(){
  this._bankaccountsService.getfilteredBankAccounts(this.term).subscribe(
   (data:any)=>{
    this.bankaccounts=data;
   },
    (err:any)=>{
      ("Internal Server Down");
    }
  )
 }
 sort(){
  this._bankaccountsService.getsortedBankAccounts(this.column,this.order).subscribe(
    (data:any)=>{
      this.bankaccounts=data;
     },
      (err:any)=>{
        ("Internal Server Down");
      }
    )
 }
 delete(id:string){
  this._bankaccountsService.deletevehicle(id).subscribe(
    (data:any)=>{
      alert("Deleted successfully!!!!!!!")
      location.reload();
    },
    (err:any)=>{
      alert("Deletion Failed ");
    }
  )
}
view(id:string){
  this._router.navigateByUrl("/dashboard/view-bankaccount/"+id);
}
edit(id:string){
  this._router.navigateByUrl("/dashboard/edit-bankaccount/"+id);
}
}
