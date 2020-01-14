import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currLat;
  currLng;
  constructor(private  weatherService : WeatherService) {

   }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(position => {

      this.currLat = position.coords.latitude;
      this.currLng = position.coords.longitude;
    });
    console.log("from getting location "+ this.currLat + "  "+ this.currLng);
    this.weatherService.getWeather(this.currLat,this.currLng).subscribe((response)=>{
      console.log(response);
    });
  }

}
