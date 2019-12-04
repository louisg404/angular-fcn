import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service'

@Component({
  selector: 'app-joueurs',
  templateUrl: './joueurs.component.html',
  styleUrls: ['./joueurs.component.css']
})
export class JoueursComponent implements OnInit {
  
  joueurs;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getJoueurs().subscribe((data)=>{
      console.log(data);
      this.joueurs = data;
    });
  }

}
