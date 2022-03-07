import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './pages/map/map.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import { HeaderComponent } from './UI/header/header.component';
import { HomeBtnComponent } from './UI/home-btn/home-btn.component';
import { DineItemComponent } from './pages/map/dine-item/dine-item.component';
import { FavListComponent } from './pages/map/fav-list/fav-list.component';
import { FavItemComponent } from './pages/map/fav-item/fav-item.component';
import { RestaurantDetailsComponent } from './pages/restaurant/restaurant-details/restaurant-details.component';

import { RestaurantsService } from './restaurants.service';
import { MapService } from './map.service';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './UI/error/error.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    RestaurantComponent,
    HeaderComponent,
    HomeBtnComponent,
    DineItemComponent,
    FavListComponent,
    FavItemComponent,
    RestaurantDetailsComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [RestaurantsService, MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
