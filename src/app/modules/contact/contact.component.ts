import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm = new FormGroup({
    firstname: new FormControl('',[Validators.required,Validators.minLength(2)]),
    lastname: new FormControl('',[Validators.required,Validators.minLength(2)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    mobile: new FormControl('',[Validators.pattern("^((\\+1-?)|0)?[0-9]{10}$")]),
    message: new FormControl('',[Validators.maxLength(300),Validators.minLength(10)]),
    honeypot: new FormControl()
  })
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.contactForm.value);
    // if(this.contactForm.status =="VALID" && this.honeypot.value ==""){
    //   this.contactForm.disable() //Disable multiple submissions
    // }
  }

}
