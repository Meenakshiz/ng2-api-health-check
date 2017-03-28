import { Component, Input } from '@angular/core';
import { Api } from "../models/api";

@Component({
    selector: 'app-api-detail',
    templateUrl: './api-detail.component.html'
})
export class ApiDetailComponent{
    @Input() api: Api;   
}