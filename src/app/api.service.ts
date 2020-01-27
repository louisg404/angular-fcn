import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY = 'a7d01afe9d72aa8de1c07c474aa7e1313c6a00d9a7d9f46c70a0c036c1eedc72';

  constructor(private httpClient: HttpClient, private datePipe: DatePipe) { }

  public getClassement(){
    return this.httpClient.get(`https://apiv2.apifootball.com/?action=get_standings&league_id=176&APIkey=${this.API_KEY}`);
  }

  public getJoueurs(){
    return this.httpClient.get(`https://apiv2.apifootball.com/?action=get_teams&league_id=176&team_id=3031&APIkey=${this.API_KEY}`);
  }

  public getMatchs(){
    var date = new Date();
    var newDate = this.datePipe.transform(date, "yyyy-MM-dd");
    console.log(newDate);
    return this.httpClient.get(`https://apiv2.apifootball.com/?action=get_events&from=2019-08-11&to=${newDate}&league_id=176&team_id=3031&APIkey=${this.API_KEY}`);
  }
}