import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { NavComponent } from "./nav/nav.component";
import { ApiDirectoryComponent } from "./api/api-directory.component";
import { ApiDetailComponent } from "./api/api-detail.component";
import { ApiService } from "./services/api.service";
import { AddApiComponent } from "./api/add-api.component";
import { ApiListComponent } from "./api/api-list.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, HomeComponent, NavComponent, ApiDirectoryComponent, ApiListComponent, ApiDetailComponent, AddApiComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ ApiService ]
})
export class AppModule { }
