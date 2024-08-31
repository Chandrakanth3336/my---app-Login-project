import { Component } from '@angular/core';
import { PhotogalleryService } from '../photogallery.service';

@Component({
  selector: 'app-photogallery',
  templateUrl: './photogallery.component.html',
  styleUrls: ['./photogallery.component.css']
})
export class PhotogalleryComponent {
public Photogallery:any=[];



constructor(private _photogalleryService:PhotogalleryService){
  _photogalleryService.getPhotogallery().subscribe(
    (data:any)=>{
    this.Photogallery=data.data.memes;
    },
    (err:any)=>{
      ("Internal server Down");
    }
  )


}




}
