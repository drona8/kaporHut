import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HutMaterial } from '../../shared/material/HutMaterial';
import { AppRoutingModule } from '../../app-routing.module';
import { WorkinprogressComponent } from './workinprogress/workinprogress.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, WorkinprogressComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HutMaterial,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent, 
    FooterComponent,
    WorkinprogressComponent
  ]
})
export class TemplatesModule { }
