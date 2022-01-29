import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    @ViewChild('form') form: NgForm;

    answers = [{
        type: 'yes',
        text: 'Да'
    }, {
        type: 'no',
        text: 'Нет'
    }];

    defaultAnswer = 'no';
    defauitCountry = 'ua';

    formData = {};
    isSubmited = false;

    addRandEmail() {
        const randEmail = 'anton@gmail.com';
        // this.form.setValue({
        //     user: {
        //         pass: '',
        //         email: randEmail
        //     },
        //     country: '',
        //     answer: ''
        // })

        this.form.form.patchValue({
            user: { email: randEmail }
        })
    }

    submitForm() {
        this.isSubmited = true;
        this.formData = this.form.value;
        this.form.reset();
    }


}
