import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LazyloadingModule } from 'src/app/lazyloading/lazyloading.module';
import { EmployedetailsComponent } from './employedetails/employedetails.component';
import { GridComponent } from './grid/grid.component';

const routes: Routes = [
  {path: 'creteemploye', component: EmployedetailsComponent},
  {path: 'employedetails', component: GridComponent},
  {path:'lazyloading', loadChildren:  () => import('../app/lazyloading/lazyloading.module').then(x => x.LazyloadingModule),outlet:"lazy"},
  {path:'sidebar', loadChildren:()=> import('../app/sidebar/sidebar.module').then(x=> x.SidebarModule),outlet:"side"}
  ];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
