import { Injectable } from '@angular/core';
import { Api } from "../models/api";

@Injectable()
export class ApiService{
    getApis() : Api[]{
        return [
                {
                    "id" : 1,
                    "name" : "Api 1",
                    "description" : "Api 1 Description",
                    "url" : "https://www.google.com"
                },
                {
                    "id" : 2,
                    "name" : "Api 2",
                    "description" : "Api 2 Description",
                    "url" : "https://www.google.com"
                }
            ];
    }
}