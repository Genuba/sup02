import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json'
  })
} //json web token par encriptar buscar

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  readonly url = environment.mgUserUrl + 'login';

  constructor(private http: HttpClient,private router: Router) { }

  autenticacion(user,password) {
    try {
      
      this.http.post(this.url, {user: user,password: password}).subscribe((data: any) => {
        if(data.to_ge_rta.rta_boo){ 
          localStorage.setItem('token', data.token);
          this.router.navigate(['/home-page']);
        }else{
          alert(data.to_ge_rta.rta_msn)
        }
      });

    } catch (error) {
      console.log(error)
      return null
    }
  }
}
  