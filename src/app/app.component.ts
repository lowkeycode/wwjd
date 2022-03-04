import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // https://www.yelp.com/developers/documentation/v3/business_search

  title = 'wwjd';

  // Get (5000 per day)
  mainUrl = 'https://api.yelp.com/v3/businesses/search/restaurants';

  clientId = '1iFntpQryaxCWpLl1Y_DGQ';

  apiKey = 'WVpTr5z0iyGLH-7mkFeZDwHaM1FHDhd1dXR1ZOCgoxRU5dbmrNHz0zQP0SIDMfwdsz5qN1mOuLAykBvncTOp1xSI4n1waEloijfmMUcCFO_3rIxBBDtuGKA0JJIiYnYx';
}
