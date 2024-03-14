import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AddComponent,
    ListComponent,
  ],
  imports: [
    CommonModule, RouterModule,
    ReactiveFormsModule, HttpClientModule, 
  ],
  exports:[
    AddComponent, ListComponent, 
  ]
})
export class StoreModule { }
