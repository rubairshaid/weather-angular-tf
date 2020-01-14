import { Injectable } from '@angular/core';
import {Http} from '@angular/http'
import { Observable } from 'rxjs/Rx'
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey='341e0f7bcb3f3cc3af2760fb6b796479';
  url; 
  constructor(private http : Http) {
    this.url='http://api.openweathermap.org/data/2.5/forecast?';
   }

   getWeather(lat,lon)
   {
     lat = 31;
     lon = 35 ;
     console.log(lat+" " +lon)
     /* return this.http.get(this.url+'lat='+lat+'&lon='+lon+'&appid='+this.apiKey).map((response)=>{
        response.json();
      })*/
     /* return this.http.get('https://samples.openweathermap.org/data/2.5/forecast?lat=31&lon=35&appid=341e0f7bcb3f3cc3af2760fb6b796479').map((response)=>{
        response.json();
      })*/
      return this.http.get('https://samples.openweathermap.org/data/2.5/forecast?q=London,us&appid='+this.apiKey).map((response)=>{
        response.json();
      })
   }

}
