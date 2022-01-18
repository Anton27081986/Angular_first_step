import { Component } from '@angular/core';
// import 'rxjs/Rx';
// import { Observable } from 'rxjs'
import { of } from 'rxjs'

@Component({
    selector: 'app-root',
    template: `
    <div>
        <h1>{{ title }}</h1>
        <input type="text" [(ngModel)]="searchCar">
        <button (click)="addCar()">Добавить</button>
        <hr>
        
        <ul *ngFor="let car of cars | carFilter:searchCar:'name'; let i = index">
            <li><b>{{ i + 1 }}</b> {{ car.name }} <i>{{car.descr}}</i></li>
        </ul>
    </div>
    `,
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    searchCar = '';
    cars = [
        { name: 'Ford', descr: 'wf 1' },
        { name: 'Mazda', descr: 'wf 2' },
        { name: 'Bently', descr: 'wf 3' },
        { name: 'Audi', descr: 'wf 4' },
        { name: 'Volvo', descr: 'wf 5' },
        { name: 'BMW', descr: 'wf 6' },
    ];

    title = '';

    asyncTitle = of('Async title')
        .subscribe((str) => this.title = str);

    addCar() {
        this.cars.push({
            name: 'New Car',
            descr: 'WF'
        });
    }
}
