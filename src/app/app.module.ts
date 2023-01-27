import { NgModule,ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployedetailsComponent } from './employedetails/employedetails.component';
import { GridComponent } from './grid/grid.component';
import { ModeldialogeComponent } from './modeldialoge/modeldialoge.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    EmployedetailsComponent,
    GridComponent,
    ModeldialogeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatIconModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
