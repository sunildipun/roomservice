import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

import { MatDialog, MatDialogConfig } from '@angular/material';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  rooms : any;
  roomStart: any;
  selectedRoom: any;
  light: boolean =false;
  climate:boolean = false;
  music: boolean = false;
  video:boolean = false;

  power: boolean = true;

  temp_light : boolean;
  temp_climate: boolean;
  temp_music: boolean;
  temp_video: boolean;
  constructor(private router: Router,
    private serv: DataService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.initializeRoom();
    this.selectedRoom = this.rooms[0].featuredRoom;
    console.log('thisf sdf', this.selectedRoom)
 
    const matDialogConfig: MatDialogConfig = new MatDialogConfig();
    matDialogConfig.width = '300px';
    matDialogConfig.height = '150px';
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

  roomClicked(room){
    console.log('ROOM',room)
    this.selectedRoom = room.featuredRoom;


  }

  climateAct(){
    this.climate = !this.climate;
  }

  musicAct(){
    this.music = !this.music;
  }
  
  videoAct(){
    this.video = !this.video;    
  }

  goToRoom(someRoom){
    this.serv.data = someRoom;
    this.router.navigate(['rooms']);
  }

  openDialog(){
    console.log('Volume clicked')
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
        id: 1,
        title: 'Angular For Beginners'
    };

    const dialogRef = this.dialog.open(MyDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      // alert("response: " + result)
      console.log('result',result)
    });
  }
  

}
