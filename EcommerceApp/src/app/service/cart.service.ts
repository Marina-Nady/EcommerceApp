import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartList: object[] = []

  constructor() { }
  getCart(){
    return this.cartList

  }
  addToCart(item:any) {
    this.cartList.push(item)
    return this.cartList
  }

  deleteFromCart(item:any){
    this.cartList = this.cartList.filter((i:any)=>i.id != item.id )
    return this.cartList

  }


}
