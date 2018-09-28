import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { MatDialogModule, MatButtonModule } from '@angular/material';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { HomeComponent } from './home/home.component';
import { DataService } from './data.service';
import { MyDialogComponent } from './my-dialog/my-dialog.component';

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
    HomeComponent,
    MyDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    AngularFontAwesomeModule,
    MatDialogModule,
    MatButtonModule,

  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  entryComponents: [
    MyDialogComponent
  ]
})
export class AppModule { }
