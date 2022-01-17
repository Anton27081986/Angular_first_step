import { Component, OnInit, Output, EventEmitter } from '@angular/core';

interface ICars {
    name: string,
    year: number
}

@Component({
    selector: 'app-add-car',
    templateUrl: './add-car.component.html',
    styleUrls: ['./add-car.component.css']
})

export class AddCarComponent implements OnInit {
    carName = '';
    carsYear = 2017;
    // onAddCar = new EventEmitter();
    @Output() onAddCar = new EventEmitter<ICars>();


    constructor() { }

    ngOnInit(): void {
    }

    addCar() {
        this.onAddCar.emit({
            name: this.carName,
            year: this.carsYear
        });
        this.carName = '';
        this.carsYear = 2017;
    }
}
