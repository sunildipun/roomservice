import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  rooms : any;
  light: boolean =false;
  climate:boolean = false;
  music: boolean = false;
  video:boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.initializeRoom();
  }

  initializeRoom(){
    this.rooms = [
      {
        name: "Ground Floor",
        featuredRoom:[
          {
            name: "Living Room",
            activity:[
              this.light,
              this.climate,
              this.music,
              this.video
            ]
          },
          {
            name: "Formal Dining",
            activity:[
              this.light,
              this.climate,
              this.music,
              this.video
            ]
          },
          {
            name: "Informal Dining",
            activity:[
              this.light,
              this.climate,
              this.music,
              this.video
            ]
          }
        ]
      },
      {
        name: "First Floor",
        featuredRoom:[
          {
            name: "Family Lounge",
            activity:[
              this.light,
              this.climate,
              this.music,
              this.video
            ]
          },
          {
            name: "Bedroom",
            activity:[
              this.light,
              this.climate,
              this.music,
              this.video
            ]
          },
          {
            name: "Library",
            activity:[
              this.light,
              this.climate,
              this.music,
              this.video
            ]
          }
        ]
      },
      {
        name: "Master Ensuite",
        featuredRoom:[
          {
            name: "Lounge",
            activity:[
              this.light,
              this.climate,
              this.music,
              this.video
            ]
          },
          {
            name: "Bedroom",
            activity:[
              this.light,
              this.climate,
              this.music,
              this.video
            ]
          },
          {
            name: "His Dressroom",
            activity:[
              this.light,
              this.climate,
              this.music,
              this.video
            ]
          }
        ]
      }
    ]
  }

  goToRoom(){
    this.router.navigate(['rooms']);
  }

}
