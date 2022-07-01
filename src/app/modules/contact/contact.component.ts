import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as $ from "jquery";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  submitted = false;
  contactForm = new FormGroup({
    firstname: new FormControl('',[Validators.required,Validators.minLength(2)]),
    lastname: new FormControl('',[Validators.required,Validators.minLength(2)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    mobile: new FormControl('',[Validators.pattern("^((\\+1-?)|0)?[0-9]{10}$")]),
    message: new FormControl('',[Validators.maxLength(300),Validators.minLength(3)]),
    // honeypot: new FormControl()
  })
  constructor() { }

  ngOnInit(): void {
  }
  // This function is used to submit the form values
  onSubmit(){
    let invalidControls = this.findInvalidControls()
    console.log(invalidControls)
    if (this.contactForm.invalid) {
     return
    } else {
      this.submitted = true;
      console.log('form submitted');
      $('button p').text(function(i, text) {
        $('#clickMe').toggleClass('clicked');
        return text === "Sent!" ? "Send" : "Sent!";
      });
      this.contactForm.reset();
    }
  }

  findInvalidControls() {
    const invalid = [];
    const controls = this.contactForm.controls;
    for (const name in controls) {
        if (controls[name].invalid) {
            invalid.push(name);
        }
    }
    return invalid;
}
  // This function is used to reset all from values
  onReset() {
    this.submitted = false;
    this.contactForm.reset();
  }
    
    // if(this.contactForm.status =="VALID" && this.honeypot.value ==""){
    //   this.contactForm.disable() //Disable multiple submissions
    // }

}
