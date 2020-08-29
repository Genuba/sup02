import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [LoginService],
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(private router:Router, private loginService: LoginService) { }

  ngOnInit(): void {
     
  } 
    
  login(form: NgForm) { 
    this.loginService.autenticacion(form.value.usuario, form.value.password);
  }
}
 