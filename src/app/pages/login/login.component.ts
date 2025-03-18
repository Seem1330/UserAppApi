import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLogin : boolean = false;
  http = inject(HttpClient);
  router = inject(Router);

  registerObj: any = {
    userId : 0,
    emailId : "",
    password : "",
    createdDate : new Date(),
    fullName : "",
    mobileNo : ""
  }

  userObj: any = {
    emailId: '',
    password: ''
  }
  onLogin(){
    this.http.post("https://localhost:7141/api/User/Login", this.userObj).subscribe((res:any) => {
      debugger;
      alert('login Success');
      localStorage.setItem('UserApp',JSON.stringify(res));
      this.router.navigateByUrl('/user-list');
    },error => {
      if(error.status == 401){
        alert(error.error)
      }
    })
  }

  registerUser(){
    debugger; 
    this.http.post("https://localhost:7141/api/User/CreateNewUser", this.registerObj).subscribe((res:any) => {
      debugger;
      alert('Registration Success');
    },error => {
      if(error.status == 400){
        alert('Invalid Body');
      }
      })
  }
}
