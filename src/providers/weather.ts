import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class Weather {
  private appID = 'b7e3e11ac03319333be7ff59a0c41687';
  private baseURL = 'http://api.openweathermap.org/data/2.5/';

  constructor(public http: Http) {

  }

  city(city: string, country: string){
    let url = this.baseURL + 'weather';
    url += '?appId='+this.appID;
    url+= '&q='+city;
    url+= ','+country;

    return this.http.get(url);
  }
}
