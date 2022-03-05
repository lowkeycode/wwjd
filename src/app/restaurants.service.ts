import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  

  constructor(private http: HttpClient) { }

  // TODO A restaurant interface should be defined here for typed responses & typescript capabilities. (Is this usually done for API calls with large responses? Or do you get into pipes & maps?)

  // TODO Revisit search/categories to get better search results - best results are by ethnic foods
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
