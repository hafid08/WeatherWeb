import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  
  readonly APIUrl = "http://localhost:19530";

  constructor(private http:HttpClient) { }

  getCountries():Observable<any[]>{
    return this.http.get<any>(this.APIUrl + "/api/Weather/Country");
  }
  getCities(val:any){
    return this.http.get<any>(this.APIUrl + "/api/Weather/City/"+val);
  }
  getWeather(val:any){
    return this.http.get<any>(this.APIUrl + "/api/Weather/"+val);
  }
}
