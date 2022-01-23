import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    // styleUrls: ['./app.component.css']
})

export class AppComponent {
    answers = [{
        type: 'yes',
        text: 'Да'
    }, {
        type: 'no',
        text: 'Нет'
    }];

    submitForm(form: NgForm) {
        console.log('submited', form);

    }
}
