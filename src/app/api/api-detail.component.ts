import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Api } from "../models/api";
import { ApiService } from "../services/api.service";

@Component({
    selector: 'app-api-detail',
    templateUrl: './api-detail.component.html'
})
export class ApiDetailComponent implements OnInit {
    @Input() api: Api;
    @Input() apiId: number;

    constructor(private apiService: ApiService, private route: ActivatedRoute){ }
    ngOnInit(): void {
        //this.apiId = 1;
        this.api = this.apiService.getApiById(+this.route.snapshot.params['id']);
    }
}