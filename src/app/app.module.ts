import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'rooms',component: RoomsComponent },
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
]
@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFontAwesomeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
