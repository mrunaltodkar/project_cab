import { Component, OnInit } from '@angular/core';
import{Driver} from './driver';
import {DriverService} from './driver.service';
import { enableProdMode } from '@angular/core';

enableProdMode();

@Component({
    templateUrl:"./driver-registration.component.html"
    //selector:"driver-registration"
})

export class DriverRegistrationComponent implements OnInit{

    driver:Driver;
    constructor(private driverService: DriverService){}
    ngOnInit(){
        this.driver=new Driver();
    }

    registrationForDriver(){
        alert("Registration Successfull");
        console.log(this.driver);
        this.driverService.registrationForDriver(this.driver).subscribe((data)=>{
            console.log("success");
            console.log(data);
            if(data!=null){
                alert("Done");
            }
        })
    }


}