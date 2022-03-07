import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { RestaurantSearch } from './models/restaurant.model';
import { Restaurant } from './models/restaurant.model';


@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  

  constructor(private http: HttpClient) { }
  // TODO Revisit search/categories to get better search results - best results are by ethnic foods
  getRestaurants(search: string): Observable<RestaurantSearch> {
    
    const httpOptions = {
      headers: new HttpHeaders({
        'search': `${search}`
      })
    }

    return this.http.get<RestaurantSearch>('http://localhost:8080/api', httpOptions);
  }

  // * Sorts array by rating and gets first five with highest rating. This is not an accurate representation of rating especially compared with the amount of reviews
  // TODO Improve filter logic

  topFiveFilter(restaurantArray: Restaurant[]): Restaurant[] {
    return restaurantArray.sort((a, b) => b.rating - a.rating).slice(0, 5)
  }

  getRestaurantDetails(id: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'id': `${id}`
      })
    }

    return this.http.get<any>('http://localhost:8080/api/restaurant', httpOptions);
  }
}
