import { Component, OnInit, AfterViewInit } from '@angular/core';

import { RestaurantsService } from 'src/app/restaurants.service';
import { MapService } from 'src/app/map.service';
import { Restaurant } from 'src/app/models/restaurant.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit, AfterViewInit {

  topFive: Restaurant[];
  error: null;

  private map;

  constructor(private restaurantsService: RestaurantsService, private mapService: MapService) { }

  // Search for restaurants from local ref input in template
  searchForRestaurants(search: string) {
    this.restaurantsService.getRestaurants(search).subscribe(result => {
      console.log(result)
      this.topFive = this.restaurantsService.topFiveFilter(result.businesses)
      
      this.mapService.getTopFiveCoords(this.topFive);
      this.mapService.renderMarkerAtCoords(this.map);
    },
    // Handle errors and render error UI in template if error
    error => {
      this.error = error;
      const errTimeout = setTimeout(() => {
        this.error = null;
        clearTimeout(errTimeout);
      }, 5000);
    });
  }

  ngOnInit(): void {
  }
  
  // After component has been rendered and map container set up put map in it
  ngAfterViewInit(): void {
    this.map = this.mapService.initMap(this.map);
  }
  
}
