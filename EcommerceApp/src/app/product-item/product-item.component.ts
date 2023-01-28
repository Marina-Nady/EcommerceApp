import { Component, Input, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { CartService } from '../service/cart.service';




@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  constructor(private cartService: CartService){}
  ngOnInit(): void {

  }
  
  @Input() product: any;
  @Input() piece: any = 1;
  number: any = 1
  getNum(e:any){
    this.number = e.target.value
  }
  addToCart(product:any){
    product.number = this.number
    this.cartService.addToCart(product)
    alert("Added!");

  }
}
