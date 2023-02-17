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
  quantity:any
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

  getNum(data:any){
    this.num = data.target.value 
  }
  updateTotal(id:number,number: any) {
    this.quantity = number;
    let item = this.itemsList.filter((i:any) => i.id == id)
    if(number == 0){
      this.itemsList = this.cartService.deleteFromCart(item[0])
      this.totalCost -= item[0].price ;
    }else{
      if(number > item[0].number){
        this.totalCost += item[0].price ;
      }else{
        this.totalCost -= item[0].price ;
      }
    }
    item[0].number = number 

}
}
