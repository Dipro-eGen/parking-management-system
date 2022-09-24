import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email: string = "";
  password: string = "";
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  register() {
    if (this.email == "" || this.password == ""){
      alert('Please provide all the information!');
      return;
    }
    this.auth.register(this.email,this.password);
    this.email = "";
    this.password = "";
  }
}
