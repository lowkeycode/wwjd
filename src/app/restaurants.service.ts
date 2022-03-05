import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  // https://www.yelp.com/developers/documentation/v3/business_search

  // Get (5000 per day)
  mainUrl = 'https://api.yelp.com/v3/businesses/search?term=restaurants&location=calgary';

  clientId = '1iFntpQryaxCWpLl1Y_DGQ';

  apiKey = 'WVpTr5z0iyGLH-7mkFeZDwHaM1FHDhd1dXR1ZOCgoxRU5dbmrNHz0zQP0SIDMfwdsz5qN1mOuLAykBvncTOp1xSI4n1waEloijfmMUcCFO_3rIxBBDtuGKA0JJIiYnYx';

  topFive;


  constructor(private http: HttpClient) { }

  getRestaurants(search: string): Observable<any> {
    
    const httpOptions = {
      headers: new HttpHeaders({
        'search': `${search}`
      })
    }

    return this.http.get<{}>('http://localhost:8080/api', httpOptions);
  }

  // * Sorts array by rating and gets first five with highest rating. This is not an accurate representation of rating especially compared with the amount of reviews
  // TODO Improve filter logic

  topFiveFilter(restaurantArray) {
    return restaurantArray.sort((a, b) => b.rating - a.rating).slice(0, 5)
  }


}
