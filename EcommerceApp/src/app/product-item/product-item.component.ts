import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service';
import {  Router } from '@angular/router';



@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  
  
  @Input() product: any;

}
