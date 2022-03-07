import { Component, OnInit } from '@angular/core';

import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartOut } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss']
})
export class RestaurantDetailsComponent implements OnInit {
  isFavorite: boolean = false;
  faHeartFull = faHeart;
  faHeartOutline = faHeartOut;

  constructor() { }

  ngOnInit(): void {
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }

}
