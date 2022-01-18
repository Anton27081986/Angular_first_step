import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    <div>
        <!-- <h2>{{ name }}</h2>
        <h2>{{ name | lowercase }}</h2>
        <h2>{{ name | uppercase }}</h2>
        <h2>{{ name | slice:0:3 }}</h2>
        <h2>{{ name | slice:3:6 | uppercase }}</h2>
        <hr>
        <h2>{{ pi }}</h2>
        <h2>{{ pi | number}}</h2>
        <h2>{{ pi | number:'1.3-4'}}</h2>
        <h2>{{ pi | number:'2.2-2'}}</h2>
        <h2>{{ money | currency:'EUR' }}</h2> -->
        <!-- <hr>
        <h2>{{ date }}</h2>
        <h2>{{ date | date}}</h2>
        <h2>{{ date | date:'fullDate'}}</h2>
        <h2>{{ date | date:'shortDate'}}</h2>
        <h2>{{ date | date:'shortTime'}}</h2>
        <hr>
        <h2>{{ emount }}</h2>
        <h2>{{ emount | percent}}</h2> -->
        <!-- <hr>
        <h2>{{ object }}</h2>
        <h2><pre>{{ object | json}}</pre></h2> -->
        <h2>{{ num }}</h2>
        <h2>{{ num | appPow:3:'=' }}</h2>
        
    </div>
    `,
    // styleUrls: ['./app.component.css']
})
export class AppComponent {

    public num = 2;

    //=======================================

    // public name = 'WebForMyself';
    // public pi = Math.PI;
    // public money = 350;
    // public date = new Date();
    // public emount = 0.45;
    // public object = {
    //     foo: 'bar',
    //     baz: 'qux',
    //     nested:
    //     {
    //         xyz: 3,
    //         numbers: [1, 2, 3]
    //     }
    // }

    // title = 'course-theory';

    // ==============================================

    // headerText = 'Создание своей директивы'
    // items = [1, 2, 3, 4, 5]
    // current = 1;

    // onClick(number: number) {
    //     this.current = number;
    // }

    //===============================================


}
