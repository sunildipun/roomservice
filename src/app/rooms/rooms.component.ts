import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToHome(){
    this.router.navigate(['home']);
  }

}
