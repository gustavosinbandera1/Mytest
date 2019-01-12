import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './dashboard/dashboard.module';

import { HttpClientModule } from '@angular/common/http';
import { StartWarsService } from './_services/start-wars.service';
/*import { PeopleItemComponent } from './people-item/people-item.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmItemComponent } from './film-item/film-item.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleItemComponent } from './vehicle-item/vehicle-item.component';
import { StartshipListComponent } from './startship-list/startship-list.component';
import { StarshipItemComponent } from './starship-item/starship-item.component';*/


@NgModule({
  declarations: [
    AppComponent,
    /*PeopleItemComponent,
    PeopleListComponent,
    FilmListComponent,
    FilmItemComponent,
    VehicleListComponent,
    VehicleItemComponent,
    StartshipListComponent,
    StarshipItemComponent,*/],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DashboardModule
  ],
  providers: [
    StartWarsService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
