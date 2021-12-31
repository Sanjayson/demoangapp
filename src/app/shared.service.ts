import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';    
import {Observable} from 'rxjs'; 
import { Weather } from './weather';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://demo-24-git-demoapp.apps.cicd.arcus.soprasteria.com";  
  constructor(private http: HttpClient) { }
  getWeatherForecastList(): Observable < any[] > {  
    return this.http.get < any[] > (this.APIUrl + '/Weatherforecast');  
}  
}
