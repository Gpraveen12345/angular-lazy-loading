import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { sidebarRoutingModule } from './sidebar-routing.module';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    sidebarRoutingModule
  ]
})
export class SidebarModule { }
