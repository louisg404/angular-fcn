import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-matchs',
  templateUrl: './matchs.component.html',
  styleUrls: ['./matchs.component.css']
})
export class MatchsComponent implements OnInit {

  matchs;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getData().subscribe((data)=>{
      console.log(data);
      this.matchs = data;
    });
  }

}
