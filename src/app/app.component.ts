import { Component } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Countries: any;
  Cities: any;
  Location = "Bandung";
  Celcius = "20";
  Fahrenheit = "20";
  Humidity = "20";
  Wind = "20";
  Visibility = "20";
  Pressure = "20";
  Date = new Date();

  title = 'weather-web';

  constructor(private service:SharedService) {
    this.service.getCountries().subscribe((data:any)=>{
      this.Countries = data;
    });
  }
  changeCountryHandler(event: any) {
    this.service.getCities(event.target.value).subscribe((data:any)=>{
      this.Cities = data;
    });
  }
  changeCityHandler(event: any) {
    this.service.getWeather(event.target.value).subscribe((data:any)=>{
      this.Location = data.name;
      this.Celcius = data.main.celcius;
      this.Fahrenheit = data.main.fahrenheit;
      this.Humidity = data.main.humidity;
      this.Wind = data.wind.speed;
      this.Visibility = data.visibility;
      this.Pressure = data.main.pressure;
      this.Date = data.dateTime;
    });
  }
}

