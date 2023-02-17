import { Component,OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  itemsList:any = []
  totalCost: any = 0
  num: any = 0
  price: any = 0
  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {
      this.itemsList = this.cartService.getCart()
      for(let i=0 ; i<= this.itemsList.length ; i++){
        this.num = this.itemsList[i].number
        this.price = this.itemsList[i].price
        this.totalCost += this.price * this.num
      }
  }

  getName(data:any){
    this.num = data.target.value;
  }
}
