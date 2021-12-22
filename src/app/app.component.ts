import { Component } from '@angular/core';
import { SharedService } from './shared.service';
import {Observable} from 'rxjs'; 
import { Weather } from './weather';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   weatherForecastlist!: Observable<any[]>;
  ngOnInit() {  
    this.loadWeatherForecastlist();
    this.weatherForecastlist.subscribe(res => console.log(res));
    //console.log(this.weatherForecastlist);

  }
  title = 'demoangapp';
constructor(private sharedService:SharedService){}
loadWeatherForecastlist() {  
  this.weatherForecastlist = this.sharedService.getWeatherForecastList();  
}  
}
