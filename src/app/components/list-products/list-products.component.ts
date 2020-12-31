import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  public products

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAllProduct();
  }
  getAllProduct(){
    this.productService.getAll().subscribe(res =>{this.products = res} );
   // console.log(user);
  }

}
