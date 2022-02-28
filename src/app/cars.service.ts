import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, delay, map, Observable, throwError } from "rxjs";
import { ICars } from "./app.component";

@Injectable()
export class CarsService {

    cars = [
        {
            name: 'Ford',
            id: 1,
            year: 2017,
            color: 'red'
        },
        {
            name: 'Audi',
            id: 2,
            year: 2010,
            color: 'blue'
        },
        {
            name: 'BMW',
            id: 3,
            year: 2005,
            color: 'yellow'
        },
        {
            name: 'Mersedes',
            id: 4,
            year: 2000,
            color: 'grey'
        }
    ]
    // constructor(private http: HttpClient) {

    // }

    // getCars() {
    //     const headers = new HttpHeaders({
    //         "Content-Type": 'application/json; charset=utf8'
    //     });
    //     return this.http.get('http://localhost:3000/cars', {
    //         headers: headers
    //     })

    // }

    // addCar(carName: string) {
    //     const data = {
    //         name: carName,
    //         color: 'blue'
    //     }
    //     const headers = new HttpHeaders({
    //         'Content-Type': 'application/json; charset=utf8'
    //     });
    //     return this.http.post('http://localhost:3000/cars', data, { headers });
    // }

    // changeColor(car: ICars, color: string) {
    //     car.color = color;
    //     return this.http.put(`http://localhost:3000/cars/${car.id}`, car)
    // }

    // deleteItem(car: ICars) {
    //     return this.http.delete(`http://localhost:3000/cars/${car.id}`);
    // }

    // getAppTitle() {
    //     return this.http.get('http://localhost:3000/title');
    // }
}