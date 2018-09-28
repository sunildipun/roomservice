import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  activity: any;

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
    private serv : DataService) { }

  ngOnInit() {
    console.log('data',this.serv.data);
    this.activity = this.serv.data.activity;
  }

  allControls(){
    // retain value

    
    if(this.light == true || this.climate == true || this.music == true || this.video == true)
    {
      this.temp_light = this.light;
      this.temp_climate = this.climate;
      this.temp_music = this.music;
      this.temp_video = this.video;
      this.power = false;
      this.light = false;
      this.climate = false;
      this.music = false;
      this.video = false;
      console.log('Ihave to switch off all');
    }
    else {
      console.log('all controls are off',);
      this.light = this.temp_light;
      this.climate = this.temp_climate;
      this.music = this.temp_music;
      this.video = this.temp_video;
    }
  }

  lightAct(){
    this.light = !this.light;
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

  goToHome(){
    this.router.navigate(['home']);
  }

}
