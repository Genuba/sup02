import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { NbAuthJWTToken } from '@nebular/auth';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  readonly url = environment.mgUserUrl + 'menu';

  constructor(private httpClient: HttpClient,nbAuthJWTToken: NbAuthJWTToken){ } 


  getMenusUsuario(idUsuario): Observable<any> {
    try{

      return this.httpClient.get<any>(this.url+'/'+idUsuario)
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
