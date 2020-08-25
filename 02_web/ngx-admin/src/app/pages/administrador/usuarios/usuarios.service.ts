import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IDtoUsuarios} from '../dto/idtoUsuarios';
import { environment } from '../../../../environments/environment';
import { IRespuestaPg } from '../irespuestapg';

 
@Injectable({
  providedIn: 'root'
})

export class UsuariosService {
  readonly url = environment.mgUserUrl + 'usuarios';
  constructor(private httpClient: HttpClient){} 

  poolUsuarios (): Observable<IDtoUsuarios[]> {
    try{
      return this.httpClient.get<IDtoUsuarios[]>(this.url);
    } 
    catch (error) {
      return null
    }
  }  
} 