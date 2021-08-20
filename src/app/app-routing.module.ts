import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFoodsComponent} from "../app/list-foods/list-foods.component"
import {LocationComponent} from "../app/location/location.component"
const routes: Routes = [{ path: 'location', component: LocationComponent },
{ path: 'list-foods', component: ListFoodsComponent  },
{ path: '', redirectTo: 'list-foods', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
