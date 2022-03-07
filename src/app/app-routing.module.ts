import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './pages/map/map.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import { RestaurantDetailsComponent } from './pages/restaurant/restaurant-details/restaurant-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: MapComponent },
  { path: 'restaurant/:id', component: RestaurantComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
