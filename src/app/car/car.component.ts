import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Component,
    ContentChild,
    DoCheck,
    ElementRef,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    SimpleChange,
    SimpleChanges,
    ViewChild
} from '@angular/core';

@Component({
    selector: 'app-car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.css']
})

export class CarComponent implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {

    @Input('carItem') car!: { name: string, year: number };
    @Input('name') name: string;
    @ContentChild('carHeading') carHeading: ElementRef;

    constructor() {
        console.log('constructor');
    }

    ngOnDestroy(): void {
        console.log('ngOnDestroy');

    }

    ngAfterViewChecked(): void {
        console.log('ngAfterViewChecked');
    }

    ngAfterViewInit(): void {
        console.log('ngAfterViewInit');
    }

    ngAfterContentChecked(): void {
        console.log('ngAfterContentChecked');
    }

    ngAfterContentInit(): void {
        console.log('ngAfterContentInit');
    }

    ngDoCheck(): void {
        console.log('doCheck');

    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('ngOnChanges', changes);
    }

    ngOnInit() {
        console.log('ngOnInit');
    }

}
