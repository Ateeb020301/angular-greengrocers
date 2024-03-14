import { Component } from '@angular/core';
import { StoreService } from 'src/app/store.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(private readonly storeService: StoreService) {}
  items = this.storeService.items;

  async addToCart(id:string){
    console.log(id)
    await this.storeService.addToCart(id);
  }
}
