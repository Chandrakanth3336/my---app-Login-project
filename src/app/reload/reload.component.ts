import { Component } from '@angular/core';
import { ReloadService } from '../reload.service';

@Component({
  selector: 'app-reload',
  templateUrl: './reload.component.html',
  styleUrls: ['./reload.component.css']
})
export class ReloadComponent {
public reload:string='';



constructor(private _reloadService:ReloadService){
  _reloadService.getreload().subscribe(
    (data:any)=>{
      this.reload=data;
    },
    (err:any)=>{
      ("Internal Server Doewn");
    }
  )
}
refresh(){
  this._reloadService.getreload().subscribe(
    (data:any)=>{
     console.log(data);
      this.reload=data.activity;
    },
    (err:any)=>{
      ("Internal Server Doewn");
    }
  )
}
}
