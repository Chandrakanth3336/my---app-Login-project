import { Component } from '@angular/core';
import { IdentityCardService } from '../identity-card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-identity-card',
  templateUrl: './identity-card.component.html',
  styleUrls: ['./identity-card.component.css']
})
export class IdentityCardComponent {
  public Identitycard: any = [];
  public asdf: string = "";
  public column: string = '';
  public order: string = '';
  public zxcv: string = "";
  public page: string = '';

  constructor(private _identitycardService: IdentityCardService , private _router:Router) {
    _identitycardService.getIdentitycard().subscribe(
      (data: any) => {
        this.Identitycard = data;
      },
      (err: any) => {
        alert("Internal Server Down");
      }
    )
  }

  filter() {
    this._identitycardService.getfilteredIdentitycard(this.asdf).subscribe(
      (data: any) => {
        this.Identitycard = data;
      },
      (err: any) => {
        alert("internal server down");
      }
    )
  }
  sort() {
    this._identitycardService.getsortedIdentitycard(this.column,this.order).subscribe(
      (data: any) => {
        this.Identitycard = data;
      },
      (err: any) => {
        alert("internal server down");
      }
    )
  }

  limit() {
    this._identitycardService.getpaginatedIdentitycard(this.zxcv,this.page).subscribe(
      (data: any) => {
        this.Identitycard = data;
      },
      (err: any) => {
        alert("internal server down");
      }
    )
  }
  delete(id:string){
    this._identitycardService.deleteIdentitycard(id).subscribe(
      (data: any) => {
        alert("Deleted Successfully!!!!!!!")
        location.reload();
      },
      (err: any) => {
        alert("Deletion Failed......");
      }
    )
  }
}
