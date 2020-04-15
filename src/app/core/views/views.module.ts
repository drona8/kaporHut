import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TemplatesModule } from '../templates/templates.module';



@NgModule({
  declarations: [HomeComponent, ShopComponent, AboutComponent, ContactComponent],
  imports: [
    CommonModule,
    TemplatesModule

  ],
  exports: [
    HomeComponent, 
    ShopComponent, 
    AboutComponent, 
    ContactComponent
  ]
})
export class ViewsModule { }
