import { Component, OnInit, AfterViewInit } from '@angular/core';

import { RestaurantsService } from 'src/app/restaurants.service';
import { MapService } from 'src/app/map.service';
import { Restaurant } from 'src/app/models/restaurant.model';

import * as L from 'leaflet';

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

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {

  topFive: Restaurant[];

  private map;

  private initMap(): void {
    this.map = L.map('map').setView([51.0447, -114.0719], 11)

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
    ).addTo(this.map);
  }

  constructor(private restaurantsService: RestaurantsService, private mapService: MapService) { }

  searchForRestaurants(search: string) {
    this.restaurantsService.getRestaurants(search).subscribe(result => {
      console.log(result)
      this.topFive = this.restaurantsService.topFiveFilter(result.businesses)
      
      this.mapService.getTopFiveCoords(this.topFive);
      this.mapService.renderMarkerAtCoords(this.map);
    });
  }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    this.initMap();
  }
  
}
