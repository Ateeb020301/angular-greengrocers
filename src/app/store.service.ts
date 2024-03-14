import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Cart } from './models/cart';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  http = inject(HttpClient);

  public cart: Cart[] = [];

  get items(): Promise<Cart[]> {
    return firstValueFrom(this.http.get<Cart[]>(`${environment.apiUrl}groceries`));
  }

  async addToCart(id: string) {
    const items = await this.items;
    const item = items.find(item => item.id === id); 

    if (item) {
      
      const cartItem = this.cart.find(cartItem => cartItem.id === item.id);

      if (cartItem) {
        
        cartItem.quantity += 1;
      } else {
       
        this.cart.push({
          ...item,
          quantity: 1 
        });
      }
    } else {
      console.log(`Item with id ${id} not found`);
    }
    console.log(this.cart)
  }

  async minusCart(id: string){
    const items = await this.items;
    const item = items.find(item => item.id === id); 

    if (item) {
      
      const cartItem = this.cart.find(cartItem => cartItem.id === item.id);

      if (cartItem) {
        
        cartItem.quantity -= 1;
      }
    } else {
      console.log(`Item with id ${id} not found`);
    }
    console.log(this.cart)
  }
  
}
