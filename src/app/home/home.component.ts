import { Component, OnInit } from '@angular/core';

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

    constructor(){
        
    }

    ngOnInit(): void {
        this.LoadStartupData();
    }

    LoadStartupData(){
        this.totalApiCount = 10;
        this.lastRunDate = new Date();
        this.totalSuccededApiCount = 8;
        this.totalFailedApiCount = 2;
        this.runApiLink = '/apidirectory';
    }
}