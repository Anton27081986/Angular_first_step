import { Injectable } from "@angular/core";
import { ConsoleService } from "./console.service";

@Injectable()
export class CarsService {

    constructor(private consoleService: ConsoleService) {

    }

    cars = [
        { name: 'Ford', isSold: false },
        { name: 'Mazda', isSold: true },
        { name: 'Bently', isSold: false },
    ];

    addCar() {
        this.cars.push({ isSold: false, name: 'name' });
        this.consoleService.log(`Машина ${name} была добавлена`);

    }
}