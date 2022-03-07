import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RestaurantsService } from 'src/app/restaurants.service';
import { Restaurant } from 'src/app/models/restaurant.model';

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
  restaurantId: string;
  restaurantDetails;

  constructor( private route: ActivatedRoute, private restaurantsService: RestaurantsService) { }

  ngOnInit(): void {
    this.restaurantId = this.route.snapshot.paramMap.get('id');

    this.restaurantsService.getRestaurantDetails(this.restaurantId).subscribe(res => {
      this.restaurantDetails = {...res};
    })
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }

}
