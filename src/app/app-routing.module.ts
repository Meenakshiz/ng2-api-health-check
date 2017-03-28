import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApiDirectoryComponent } from "./api/api-directory.component";
import { ApiDetailComponent } from "./api/api-detail.component";
import { HomeComponent } from "./home/home.component";
import { AddApiComponent } from "./api/add-api.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'apis/add', component: AddApiComponent },
  { path: 'apis/:id', component: ApiDetailComponent },
  { path: 'apis',     component: ApiDirectoryComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}