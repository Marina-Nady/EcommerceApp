import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  baseURL = "http://localhost:3000/products";

  getProducts(){
    return this.httpClient.get(this.baseURL);
  }

  getProductById(id: number){
    return this.httpClient.get(`${this.baseURL}/${id}`, { observe: 'response' });
  }

  updateUserById(id: number, aUser: any) {
    return this.httpClient.put(`${this.baseURL}/${id}`, aUser);
  }
}
