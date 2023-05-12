import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html'
})
export class ContactFormComponent {
  contactFormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl(''),
    message: new FormControl('', [Validators.required, Validators.minLength(25)])
  })

  get messageLength() {
    return (this.contactFormGroup.get('message')!.value as string).length;
  }

  onSubmit() {
    console.log(this.contactFormGroup.value);
  }
}
