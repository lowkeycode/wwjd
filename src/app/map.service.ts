import { Injectable } from '@angular/core';
import * as L from 'leaflet';

import { RestaurantCoord } from './restuarantCoord.model';

@Injectable({
  providedIn: 'root'
})
export class MapService {


  topFiveCoordsArray: RestaurantCoord[] = [];

  constructor() { }

  getTopFiveCoords(topFiveArray): void {
    topFiveArray.forEach(restaurant => {
      const formatted = {
        name: restaurant.name,
        latitude: restaurant.coordinates.latitude,
        longitude: restaurant.coordinates.longitude,
        address: restaurant.location.address1
      }

      this.topFiveCoordsArray.push(formatted);
    })

    console.log(this.topFiveCoordsArray);
  }

  renderMarkerAtCoords(map: L.map) {
    for(const restaurant of this.topFiveCoordsArray) {
      const lat = restaurant.latitude;
      const lon = restaurant.longitude;
      const marker = L.marker([lat, lon])

      console.log(restaurant);

      marker.addTo(map);
    }
  }

}
