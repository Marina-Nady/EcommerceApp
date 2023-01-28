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


}
