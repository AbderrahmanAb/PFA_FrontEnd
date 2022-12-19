import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BenevolesComponent} from "./components/benevoles/benevoles.component";
import {BenevolesDetailComponent} from "./components/benevoles-detail/benevoles-detail.component";
import {AddBenevoleComponent} from "./components/add-benevole/add-benevole.component";

const routes: Routes = [
  { path: 'benevoles', component: BenevolesComponent },
  { path: 'benevoles/:id', component: BenevolesDetailComponent },
  { path: 'add', component: AddBenevoleComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
