import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IDtoUsuarios} from '../dto/idtoUsuarios';
import { IRespuestaPg } from '../../../irespuestapg';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  readonly url = environment.mgUserUrl + 'usuario';
  constructor(private httpClient: HttpClient){} 

  getHeaders():HttpHeaders {
    let headers = new HttpHeaders  ({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')})
    return headers
  }

  agregarUsuario(IDtoUsuarios: IDtoUsuarios): Observable<IRespuestaPg> {
    try{
     return this.httpClient.post<IRespuestaPg>(this.url, IDtoUsuarios, {headers: this.getHeaders()});
    } 
    catch (error) {
      console.log(error)
      return null
    }
  }
  
  getUsuario (id: number): Observable<IDtoUsuarios> {
    try{
      return this.httpClient.get<IDtoUsuarios>(this.url+'/'+id, {headers: this.getHeaders()})
    } 
    catch (error) {
      console.log(error)
      return null
    }
  }

  putUsuario (id, IDtoUsuarios: IDtoUsuarios): Observable<IRespuestaPg> {
    try{
     return this.httpClient.put<IRespuestaPg>(this.url+'/'+id, IDtoUsuarios, {headers: this.getHeaders()});
    } 
    catch (error) {
      console.log(error)
      return null
    }
  }

} 