import { Component, OnInit } from '@angular/core';

import { ApiService } from "../services/api.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    totalApiCount: number;
    lastRunDate: Date;
    totalSuccededApiCount: number;
    totalFailedApiCount: number;
    runApiLink: string;
    
    constructor(private apiService: ApiService){
        
    }

    ngOnInit(): void {
        this.LoadStartupData();
    }

    LoadStartupData(){
        var apiList = this.apiService.getApis();

        this.totalApiCount = apiList.length;
        this.lastRunDate = apiList[0].lastRunDate;
        this.totalSuccededApiCount = 8;
        this.totalFailedApiCount = 2;
        this.runApiLink = '/apidirectory';
    }
}