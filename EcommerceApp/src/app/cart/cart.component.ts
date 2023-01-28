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
  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {
      this.itemsList = this.cartService.getCart()
      for(let i=0 ; i<= this.itemsList.length ; i++){
        this.totalCost += this.itemsList[i].price * this.itemsList[i].number
      }
      console.log(this.itemsList)  
  }
}
