import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy{
  
  productId: number = 0;
  product: any;
  flag: number = 1;
  serviceToBeDestroyed: any;

  constructor(activatedRoute: ActivatedRoute, private service: ProductsService, private router: Router) {

    this.productId = activatedRoute.snapshot.params['id'];

  }
  ngOnDestroy(): void {
    this.serviceToBeDestroyed.unsubscribe();
  }


  ngOnInit(): void {

    this.serviceToBeDestroyed = this.service.getProductById(this.productId).subscribe(
      (response) => {
          this.flag = 1;
          this.product = response.body;
      },
      (error) => {
        this.flag = 0;
        console.log(error);
      }
    )

  }
}
