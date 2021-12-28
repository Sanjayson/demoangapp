import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';    
import {Observable} from 'rxjs'; 
import { Weather } from './weather';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "https://demo-21-git-sanjay-bhade2008-dev.apps.sandbox.x8i5.p1.openshiftapps.com";  
  constructor(private http: HttpClient) { }
  getWeatherForecastList(): Observable < any[] > {  
    return this.http.get < any[] > (this.APIUrl + '/Weatherforecast');  
}  
}
