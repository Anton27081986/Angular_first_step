import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    answers = [{
        type: 'yes',
        text: 'Да'
    }, {
        type: 'no',
        text: 'Нет'
    }];

    charsCount = 5;

    public form: FormGroup

    ngOnInit(): void {
        this.form = new FormGroup({
            user: new FormGroup({
                email: new FormControl('', [Validators.email, Validators.required], this.checkForEmail),
                pass: new FormControl('', [Validators.required, this.checkForLength.bind(this)]),
            }),
            country: new FormControl(''),
            answer: new FormControl('no')
        })
    }

    onSubmit() {
        console.log('Submited', this.form);
    }

    // {'errorCode': true}
    // null || undefined
    checkForLength(control: FormControl) {
        if (control.value.length <= this.charsCount) {
            return {
                'lengthError': true
            }
        }
        return null
    }

    checkForEmail(control: FormControl): Promise<any> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'test@gmail.com') {
                    resolve({
                        'emailIsUsed': true
                    });
                } else {
                    resolve(null);
                }
            }, 3000)
        });
    }
}
