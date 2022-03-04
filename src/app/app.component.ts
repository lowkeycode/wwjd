import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // https://www.yelp.com/developers/documentation/v3/business_search

  title = 'wwjd';

  // Get
  mainUrl = 'https://api.yelp.com/v3/businesses/search/restaurants'
}
