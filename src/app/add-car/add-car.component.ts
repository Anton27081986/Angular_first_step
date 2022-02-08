import { Component } from '@angular/core';
import { CarsService } from '../cars.service';


interface ICars {
    name: string,
    year: number
}

@Component({
    selector: 'app-add-car',
    templateUrl: './add-car.component.html',
    styleUrls: ['./add-car.component.css'],
})

export class AddCarComponent {
    // carName = '';

    // constructor(private service: CarsService) { }

    // addCar() {
    //     this.service.addCar();
    //     this.carName = '';
    // }
}
