import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IDtoUsuarios} from '../dto/idtoUsuarios';
import { IRespuestaPg } from '../irespuestapg';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  readonly url = environment.mgUserUrl + 'usuario';
  token:string = "";
  
  constructor(private httpClient: HttpClient){ } 


  agregarUsuario(IDtoUsuarios: IDtoUsuarios): Observable<IRespuestaPg> {
    try{
     return this.httpClient.post<IRespuestaPg>(this.url, IDtoUsuarios);
    } 
    catch (error) {
      console.log(error)
      return null
    }
  }
  
  getUsuario (id: number): Observable<IDtoUsuarios> {
    try{
      return this.httpClient.get<IDtoUsuarios>(this.url+'/'+id)
    } 
    catch (error) {
      console.log(error)
      return null
    }
  }

  putUsuario (id, IDtoUsuarios: IDtoUsuarios): Observable<IRespuestaPg> {
    try{
     return this.httpClient.put<IRespuestaPg>(this.url+'/'+id, IDtoUsuarios);
    } 
    catch (error) {
      console.log(error)
      return null
    }
  }
  
  deleteUsuario (id: number): Observable<IRespuestaPg> {
    try{
      const urlid = `${this.url}/${id}`; 
      return this.httpClient.delete<IRespuestaPg>(urlid)
    } 
    catch (error) {
      console.log(error)
      return null
    }
  }

} 