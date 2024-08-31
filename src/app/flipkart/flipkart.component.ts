import { Component } from '@angular/core';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {

  public term:any="";
  public total1:any=0;
  public total2:any=0;
  public products:any = [
    {  name: 'pen', price: 10, rating: 3, freeDelivery: false },
    {  name: 'phone', price: 100000, rating: 4.8, freeDelivery: true },
    {  name: 'shirt', price: 2000, rating: 4, freeDelivery: true },
    {  name: 'sari', price: 4000, rating: 5, freeDelivery: true },
    {  name: 'mobile case', price: 200, rating: 3.5, freeDelivery: false },
    {  name: 'remote', price: 799, rating: 2.5, freeDelivery: false },
    {  name: 'watch', price: 8000, rating: 4.4, freeDelivery: true },
    {  name: 'helmet', price: 499, rating: 3.9, freeDelivery: false },
    {  name: 'shoes', price: 999, rating: 3.7, freeDelivery: false },
    {  name: 'laptop', price: 60000, rating: 4.7, freeDelivery: true }
];

  delete(i:number){
    this.products.splice(i,1);
  }
  search(){
    this.products=this.products.filter((product:any)=>product.name.includes(this.term));
  }
  phl(){
    this.products=this.products.sort((L:any,H:any)=>H.price - L.price);
  }
  plh(){
    this.products=this.products.sort((L:any,H:any)=>L.price - H.price);
  }
  rhl(){
    this.products=this.products.sort((Lo:any,Hi:any)=>Hi.rating - Lo.rating);
  }
  rlh(){
    this.products=this.products.sort((Lo:any,Hi:any)=>Lo.rating - Hi.rating);
  }
  discount(){
    this.products=this.products.map((product:any)=>{
      product.price=product.price-(product.price*(50/100));
      return product;
    })
  }
  delcharges(){
    this.products=this.products.map((product:any)=>{
      product.price=product.price+20;
      return product;
    })
  }
  total(){
     this.total1=this.products.reduce((sum:any,product:any)=>sum+product.price,0);
      
  }
  cartitems(){
    this.total2=this.products.length;
    // alert(totalcart);
  }
  freedelivery(){
    this.products=this.products.filter((product:any)=>product.freeDelivery==true);
  }
  
}
