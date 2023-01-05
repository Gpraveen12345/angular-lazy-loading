import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstRoutingModule } from './lazy-routing.module';
import { LazyloadingComponent } from './lazyloading.component';



@NgModule({
  declarations: [
    LazyloadingComponent
  ],
  imports: [
    FirstRoutingModule,
    CommonModule
  ]
})
export class LazyloadingModule { }
