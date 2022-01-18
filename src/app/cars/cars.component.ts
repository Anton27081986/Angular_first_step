import { Component, ViewEncapsulation } from '@angular/core';


interface ICars {
    name: string,
    year: number
}

@Component({
    selector: 'app-cars',
    templateUrl: './cars.component.html',
    styleUrls: ['./cars.component.css'],
    // encapsulation: ViewEncapsulation.Emulated
})

export class CarsComponent {

    cars: ICars[] = [{
        name: 'Ford',
        year: 2015
    }]
    //     name: 'Mazda',
    //     year: 2010
    // }, {
    //     name: 'Audi',
    //     year: 2017
    // }];

    constructor() {

    }

    updateCarList(car: any) {
        this.cars.push(car);
    }

    changeCarName() {
        this.cars[0].name = 'New car name';
    }

    deleteCarName() {
        // this.cars.length = 0;
        this.cars.splice(0, 1);
    }
}
