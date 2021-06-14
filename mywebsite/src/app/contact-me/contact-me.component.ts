import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpService } from '../http.service';
import '../../assets/smtp.js'
declare let Email: any;

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  @ViewChild('emailFormControl')
  emailFormControl!: ElementRef;

  @ViewChild('firstNameFormControl')
  firstNameFormControl!: ElementRef;

  @ViewChild('secondNameFormControl')
  secondNameFormControl!: ElementRef;

  @ViewChild('contactFormControl')
  contactFormControl!: ElementRef;

  @ViewChild('subjectFormControl')
  subjectFormControl!: ElementRef;

  constructor(public http: HttpService) { }

  ngOnInit(): void {
  }
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  register() {
    let user = {
      
    }

  }
  sendMail() {
      var firstName = this.firstNameFormControl?.nativeElement.value;
      var lastName = this.secondNameFormControl.nativeElement.value;
      var email =  this.emailFormControl.nativeElement.value;
      var Contact =  this.contactFormControl.nativeElement.value;
      var Subject= this.subjectFormControl.nativeElement.value;
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "mailfromportfolio07@gmail.com",
      Password: "9C79261AF93C7AE6D4AE9F2416893DCBC45A",
      Port: 2525,
      To: 'pranay071196@gmail.com',
      From: "mailfromportfolio07@gmail.com",
      Subject: this.subjectFormControl.nativeElement.value,
      Body: "Hi this is "+firstName+ " "+ lastName + ". I wanted to connect with you. My mail id is - "+email
    }).then(
      (message:string) =>{
        console.log(message)
        if(message=='OK') alert(message)
        else alert('There is an error sending mail')
      }
    );
    window.location.reload();
  }

}