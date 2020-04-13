import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TemplatesModule } from './templates/templates.module';
import { ViewsModule } from './views/views.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    TemplatesModule,
    ViewsModule
  ]
})
export class CoreModule { }
