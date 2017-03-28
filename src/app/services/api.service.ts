import { Injectable } from '@angular/core';
import { Api } from "../models/api";
import { apidummydata } from "../data/api-dummy-data";


@Injectable()
export class ApiService{
    getApis() : Api[]{
        return apidummydata;
    }

    getTopApis() : Api[]{
        return apidummydata;
    }

    getApiById(id: number) : Api{
        return apidummydata[0];
    }
}