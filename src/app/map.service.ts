import { Injectable } from '@angular/core';
import * as L from 'leaflet';

import { RestaurantCoord } from './models/restaurant.model';

// Leaflet Marker Icon as per docs
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

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
        coords: {
          latitude: restaurant.coordinates.latitude,
          longitude: restaurant.coordinates.longitude,
        },
        address: restaurant.location.address1
      }

      this.topFiveCoordsArray.push(formatted);
    })

    // console.log(this.topFiveCoordsArray);
  }

  // TODO Error handle the map
  // Map init
  initMap(map): L.map {
    // Set map location with coords here
    map = L.map('map').setView([51.0447, -114.0719], 11)

    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        minZoom: 10,
        maxZoom: 15,
        id: "mapbox/outdoors-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "pk.eyJ1IjoibG93a2V5Y29kZSIsImEiOiJja29uMnRkOTcwNmx6MnhwaHZtMzloeWs2In0.t2Kl5vjXD17B_caNpFJWCg",
      }
    ).addTo(map);

    return map;
  }

  // TODO Remove markers - Not great documentation, may need to save markers to an array? Or remove() by leaflet Id?

  renderMarkerAtCoords(map: L.map) {
    console.log(this.topFiveCoordsArray);
    for(const restaurant of this.topFiveCoordsArray) {
      const lat = restaurant.coords.latitude;
      const lon = restaurant.coords.longitude;
      const marker = L.marker([lat, lon])

      // console.log(marker);

      marker
      .addTo(map)
      .bindPopup(L.popup({
        maxWidth: 200,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: 'map-pop-up'
      }))
      .setPopupContent(restaurant.name)
      .openPopup();
    }
    
  }

}
