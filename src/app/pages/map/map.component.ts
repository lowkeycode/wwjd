import { Component, OnInit } from '@angular/core';

import { RestaurantsService } from 'src/app/restaurants.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  topFive;


  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit(): void {
  }

  searchForRestaurants(search: string) {
    this.restaurantsService.getRestaurants(search).subscribe(result => {
      console.log(result.businesses)
      this.topFive = this.restaurantsService.topFiveFilter(result.businesses)
      console.log(this.topFive)
    });
  }

  
}
