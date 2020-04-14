import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HutMaterial } from '../../shared/material/HutMaterial';



@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HutMaterial
  ],
  exports: [
    HeaderComponent, 
    FooterComponent
  ]
})
export class TemplatesModule { }
