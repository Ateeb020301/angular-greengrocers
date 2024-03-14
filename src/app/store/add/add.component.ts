import { Component } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { StoreService } from 'src/app/store.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  constructor(private readonly storeService: StoreService) {}
  items = this.storeService.cart;

  minus(minus:string){
    this.storeService.minusCart(minus)
  }

  pluss(pluss:string){
    this.storeService.addToCart(pluss)
  }
}
