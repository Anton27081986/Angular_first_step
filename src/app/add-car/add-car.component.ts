import {
    Component,
    OnInit,
    Output,
    EventEmitter,
    ViewChild,
    ElementRef
} from '@angular/core';

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
    // carName = '';
    // carsYear = 2017;
    // onAddCar = new EventEmitter();
    // @Output('on') onAddCar = new EventEmitter<ICars>();
    @Output('onAddCar') carEmitter = new EventEmitter<ICars>();
    @ViewChild('carYearInput') carYearInput: ElementRef;


    constructor() { }

    ngOnInit(): void {
    }

    addCar(carNameEl: HTMLInputElement) {

        this.carEmitter.emit({
            name: carNameEl.value,
            year: +this.carYearInput.nativeElement.value
        });

        carNameEl.value = '';
        this.carYearInput.nativeElement.value = 2017;
    }
}
