import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'weather';

  url ;//= 'http://api.openweathermap.org/data/2.5/forecast?lat=31&lon=35&appid=341e0f7bcb3f3cc3af2760fb6b796479';
  constructor(private http : Http){

  }
  date = new Date() ; 
  realTime =this.date.getHours()+':'+this.date.getMinutes(); 
  fullDate = this.date.getDate()+'/'+this.date.getMonth()+'/'+this.date.getFullYear();
  weatherData=[];
  currLat;
  currLng;
  ngOnInit()
  {
    /*navigator.geolocation.getCurrentPosition(position => {

      this.currLat = position.coords.latitude;
      this.currLng = position.coords.longitude;
    });*/
    this.currLat=31;
    this.currLng=35;
    console.log(this.currLat + "  "+ this.currLng);
    this.url='http://api.openweathermap.org/data/2.5/forecast?lat='+this.currLat+'&lon='+this.currLng+'&units=metric&appid=341e0f7bcb3f3cc3af2760fb6b796479';
    this.http.get(this.url).subscribe(response=>{
  console.log(response.json());
  this.weatherData=response.json()
  ;
})
  }
  //imgIcon="http://openweathermap.org/img/wn/"+this.weatherData.list[0].weather.icon+"@2x.png";
 
}
