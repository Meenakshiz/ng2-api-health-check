import { Component } from '@angular/core';
import { Api } from "../models/api";

@Component({
    selector:'app-add-api',
    templateUrl: './add-api.component.html'
})
export class AddApiComponent{
    api : Api;
}