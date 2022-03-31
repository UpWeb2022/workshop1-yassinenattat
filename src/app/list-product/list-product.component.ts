import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  public titleApp: string ;
  public listProduct: Product[];
  priceMax: number = 100 ;

  constructor() { }

  ngOnInit(): void {
    this.titleApp = 'First Angular App';
    this.listProduct=[
      {id:12, 
      title:'T-shirt 1',
      price: 120,
      quantity:0,
      picture:'https://img.joomcdn.net/6928e3bda6a6b05715c742a9c0560113f4c77dca_original.jpeg',
      like:12,
      description:'test'
},
{ id:13, 
  title:'T-shirt 2',
  price: 100,
  quantity:10,
  picture:'https://img.joomcdn.net/6928e3bda6a6b05715c742a9c0560113f4c77dca_original.jpeg',
  like:1200,
  description:'test description'
}
    ]
  }

public incrementLike(p:Product): void{
  let i=this.listProduct.indexOf(p);
  if(i!=-1){
this.listProduct[i].like++;
  }

}

public buyProduct(p:Product): void{
  let i=this.listProduct.indexOf(p);
  if(i!=-1){
this.listProduct[i].quantity--;
  }

}




}
