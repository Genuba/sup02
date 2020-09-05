import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { AuthGuard } from '../guards/auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  readonly url = environment.mgUserUrl + 'menu';

  constructor(private httpClient: HttpClient,private authGuard: AuthGuard){}


  getMenusUsuario(): Observable<any> {
    try{
      return this.httpClient.get<any>(this.url+'/'+this.authGuard.user.rol)
    } 
    catch (error) {
      console.log(error)
      return null
    }
  }
  
  getPemisosMenu (menu: any): Observable<any> {
    try{
      return this.httpClient.post<any>(this.url, menu);
    } 
    catch (error) {
      console.log(error)
      return null
    }
  }
}
