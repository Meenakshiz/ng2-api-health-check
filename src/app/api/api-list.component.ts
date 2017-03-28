import { Component, OnInit, Input } from '@angular/core';

import { Api } from "../models/api";
import { ApiService } from '../services/api.service';

@Component({
    selector: 'app-api-list',
    templateUrl: './api-list.component.html'
})
export class ApiListComponent implements OnInit {
    @Input() inputApis: Api[];
    apiList: Api[];
    hideTitle: boolean = false;

    constructor(private apiService: ApiService) { }

    ngOnInit(): void {
        if(this.inputApis == null || this.inputApis.length == 0)
        {
            this.apiList = this.apiService.getApis();
        }
        else
        {
            this.apiList = this.inputApis;
            this.hideTitle = true;
        }
    }
}