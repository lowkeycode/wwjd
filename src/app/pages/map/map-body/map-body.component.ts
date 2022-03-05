import { Component, OnInit, AfterViewInit } from '@angular/core';

import * as L from 'leaflet';

@Component({
  selector: 'app-map-body',
  templateUrl: './map-body.component.html',
  styleUrls: ['./map-body.component.scss']
})
export class MapBodyComponent implements OnInit, AfterViewInit {
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

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

}
