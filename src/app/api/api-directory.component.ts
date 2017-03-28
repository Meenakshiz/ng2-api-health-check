import { Component, OnInit } from '@angular/core';
import { Api } from "../models/api";
import { ApiService } from '../services/api.service';

@Component({
    selector: 'app-api-directory',
    templateUrl: './api-directory.component.html'
})
export class ApiDirectoryComponent implements OnInit {
    apiDirectory: Api[];

    constructor(private apiService: ApiService) { }

    ngOnInit(): void {
        this.apiDirectory = this.apiService.getApis();    
    }
}