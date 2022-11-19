import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-fetch-files',
  templateUrl: './fetch-files.component.html',
  styleUrls: ['./fetch-files.component.scss']
})
export class FetchFilesComponent implements OnInit {
  public forecasts?: WeatherForecast[];

  constructor(http: HttpClient) {
    http.get<WeatherForecast[]>(environment.baseUrl + 'weatherforecast')
      .subscribe(result => {
        this.forecasts = result;
      }, error => console.error(error));
   }

  ngOnInit(): void {
  }

}

interface WeatherForecast {
  date: string;
  tempC: number;
  tempF: number;
  summary: string;
}