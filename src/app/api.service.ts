import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY = '52fef902611d5c92e653e3e913b73065b4f7d74ef949fbedb3ad7b1990a6f493';

  constructor(private httpClient: HttpClient) { }

  public getData(){
    return this.httpClient.get(`https://apiv2.apifootball.com/?action=get_standings&league_id=176&APIkey=${this.API_KEY}`);
  }
}