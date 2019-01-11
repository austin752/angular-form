import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  subscription = 'Advanced';
  user = {
    email: '',
    password: ''
  }
  submitted = false;

  onSubmit(){
    this.user.email = this.signupForm.value.userData.email;
		console.log("​AppComponent -> onSubmit -> this.user.email", this.user.email)
    this.user.password = this.signupForm.value.userData.password;
		console.log("​AppComponent -> onSubmit -> this.user.password", this.user.password)
    this.subscription = this.signupForm.value.userData.subscription;
		console.log("​AppComponent -> onSubmit -> this.subscription", this.subscription)
    this.submitted = true;
    this.signupForm.reset({
      userData: {
        subscription: 'Advanced'
      }
    });
  }
}
