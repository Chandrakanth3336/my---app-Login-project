import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { identifierName } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {

  public vehicles:any = [];
  public term:string= '';
  public column:string= '';
  public order:string= '';
  public asdf:any= '';
  public page:any= '';


  constructor(private _vehicleService:VehicleService, private _router:Router){
    _vehicleService.getVehicles().subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("Internal Server error");
      }
    )
  }

  filter(){
    this._vehicleService.getfilteredVehicles(this.term).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        ("Internal Server Down ");
      }
    )
  }
  sort(){
    this._vehicleService.getsortedVehicles(this.column,this.order).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        ("Internal Server Down ");
      }
    )
  }
  limit(){
    this._vehicleService.getpaginatedVehicles(this.asdf,this.page).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        ("Internal Server Down ");
      }
    )
  }
  delete(id:string){
    this._vehicleService.deletevehicle(id).subscribe(
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
    this._router.navigateByUrl("/dashboard/view-vehicle/"+id);
  }
  edit(id:string){
    this._router.navigateByUrl("/dashboard/edit-vehicle/"+id); 
  }
}
