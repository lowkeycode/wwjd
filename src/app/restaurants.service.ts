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

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer WVpTr5z0iyGLH-7mkFeZDwHaM1FHDhd1dXR1ZOCgoxRU5dbmrNHz0zQP0SIDMfwdsz5qN1mOuLAykBvncTOp1xSI4n1waEloijfmMUcCFO_3rIxBBDtuGKA0JJIiYnYx'
    })
  }

  searchTerm: string;

  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<any> {
    console.log('Trying to get');
    return this.http.get<any>('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&location=calgary', {
      headers: {
        "accept": "application/json",
        "x-requested-with": "xmlhttprequest",
        "Access-Control-Allow-Origin": "*",
        'Authorization': 'Bearer WVpTr5z0iyGLH-7mkFeZDwHaM1FHDhd1dXR1ZOCgoxRU5dbmrNHz0zQP0SIDMfwdsz5qN1mOuLAykBvncTOp1xSI4n1waEloijfmMUcCFO_3rIxBBDtuGKA0JJIiYnYx'
      }
    });
  }

}
