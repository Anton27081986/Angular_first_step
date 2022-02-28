import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CarsService } from './cars.service';

export interface ICars {
    name: string,
    color: string,
    id: number
}


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {



}
    // public colors = [
    //     'red',
    //     'blue',
    //     'green',
    //     'pink',
    //     'yellow',
    //     'grey'
    // ]
    // // public cars: ICars[] = [];
    // public cars: any;
    // public carName = '';
    // public appTitle: Observable<any>;

    // constructor(private carsService: CarsService) { }

    // ngOnInit(): void {
    //     this.appTitle = this.carsService.getAppTitle();
    //     this.appTitle.subscribe((data) => {
    //         console.log(data);

    //     })

    // }

    // loadCars() {
    //     this.cars = this.carsService.getCars()

    // }

    // addCar() {
    //     this.carsService
    //         .addCar(this.carName)
    //         .subscribe((car: ICars) => {
    //             console.log(car);

    //             this.cars.push(car);
    //         })
    //     this.carName = '';
    // }

    // getRendColor() {
    //     const num = Math.round(Math.random() * (this.colors.length - 1));
    //     return this.colors[num];
    // }

    // setNewColor(car: ICars) {
    //     this.carsService.changeColor(car, this.getRendColor())
    //         .subscribe((data) => {
    //             console.log(data);
    //         });
    // }

    // deleteCar(car: ICars) {
    //     this.carsService.deleteItem(car)
    //         .subscribe((data) => {
    //             this.cars = this.cars.filter(c => c.id !== car.id)
    //         });
    // }
// }
