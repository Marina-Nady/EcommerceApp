import { Component , OnInit} from '@angular/core';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor(private service: ProductsService){}
  products: any;

  ngOnInit(): void {

    this.service.getProducts().subscribe(

      (response) => {
        console.log(response)
        this.products = response;
      },

      (error) => {
        console.log(error);
      }
    )
  }

}
