import { Component, OnInit } from '@angular/core';

import { ApiService } from "../services/api.service";
import { Api } from "../models/api";

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
    apiList: Api[];

    constructor(private apiService: ApiService){ }

    ngOnInit(): void {
        this.apiList = this.apiService.getApis();

        this.totalApiCount = this.apiList.length;
        this.lastRunDate = this.apiList[0].lastRunDate;
        this.totalSuccededApiCount = 1;
        this.totalFailedApiCount = 1;
        this.runApiLink = '/apis';
    }
}