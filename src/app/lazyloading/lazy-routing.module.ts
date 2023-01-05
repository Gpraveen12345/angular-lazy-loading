import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LazyloadingComponent } from "src/app/lazyloading/lazyloading.component";

const routes: Routes = [
  {
    path: "",
    component: LazyloadingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstRoutingModule {}