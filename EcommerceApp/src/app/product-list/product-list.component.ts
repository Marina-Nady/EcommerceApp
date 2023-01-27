import { Component , OnInit} from '@angular/core';
import { ProductsService } from '../service/products.service';
import { ProductItemComponent } from '../product-item/product-item.component';
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
        this.products = response;
      },

      (error) => {
        console.log(error);
      }
    )
  }

}
