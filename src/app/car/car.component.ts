import { Component, Input } from '@angular/core';
import { ConsoleService } from '../console.service';

@Component({
    selector: 'app-car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.css'],
})

export class CarComponent {

    @Input() car;

    constructor(private consoleService: ConsoleService) {

    }

    getClass() {
        return {
            'success': !this.car.isSold,
            'danger': this.car.isSold,
            'true': true
        }
    }

    onAction(type: string) {
        this.car.isSold = type === 'buy' ? true : false;
        this.consoleService.log(`${this.car.name} status ${type}`);
    }
}
