import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [HomeComponent, ShopComponent, AboutComponent, ContactComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent, 
    ShopComponent, 
    AboutComponent, 
    ContactComponent
  ]
})
export class ViewsModule { }
