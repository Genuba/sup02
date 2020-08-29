import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IDtoUsuarios} from '../dto/idtoUsuarios';
import { environment } from '../../../../environments/environment';
import { IRespuestaPg } from 'src/app/irespuestapg';


@Injectable({
  providedIn: 'root'
})

export class UsuariosService {
  readonly url = environment.mgUserUrl + 'usuarios';
  constructor(private httpClient: HttpClient){} 

  getHeaders():HttpHeaders {
    let headers = new HttpHeaders  ({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')})
    return headers
  }

  poolUsuarios (): Observable<IDtoUsuarios[]> {
    try{
      return this.httpClient.get<IDtoUsuarios[]>(this.url,{headers: this.getHeaders()});
    } 
    catch (error) {
      return null
    }
  } 

  deleteUsuario (id: number): Observable<IRespuestaPg> {
    try{
      const urlid = `${this.url}/${id}`; 
      return this.httpClient.delete<IRespuestaPg>(urlid,{headers: this.getHeaders()})
    } 
    catch (error) {
      console.log(error)
      return null
    }
  }
} 