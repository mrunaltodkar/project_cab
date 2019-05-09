import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Driver} from './driver';
import { Observable } from 'rxjs';


@Injectable()
export class DriverService {

    baseUrl = "http://localhost:8083";
    constructor(private http: HttpClient) {
    }
    registrationForDriver(driver: Driver): Observable<Driver> {
        console.log(driver);
        return this.http.post<Driver>(this.baseUrl + "/registration", driver);
    }

    loginDetailsOfDriver(email: string, password: string) {

        return this.http.get<Driver>(this.baseUrl + "/login/" + email + "/" + password);
    }

}