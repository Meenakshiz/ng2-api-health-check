import { Component, Input, OnInit } from '@angular/core';
import { Api } from "../models/api";
import { ApiService } from "../services/api.service";

@Component({
    selector: 'app-api-detail',
    templateUrl: './api-detail.component.html'
})
export class ApiDetailComponent implements OnInit {
    @Input() api: Api;
    @Input() apiId: number;

    constructor(private apiService: ApiService){ }
    ngOnInit(): void {
        this.apiId = 1;
        this.api = this.apiService.getApiById(this.apiId);
    }
}