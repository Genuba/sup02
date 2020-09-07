import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IDtoType} from '../dto/idtoType';
import { IRespuestaPg } from '../irespuestapg';
import { environment } from '../../../../environments/environment';
 
@Injectable({
  providedIn: 'root'
})
export class TypeService {
  readonly url = environment.mgDocUrl + 'type';

  constructor(private httpClient: HttpClient){} 

  agregarTipo(IDtoType: IDtoType): Observable<IRespuestaPg> {
    try{
     return this.httpClient.post<IRespuestaPg>(this.url, IDtoType);
    }
    catch (error) {
      console.log(error)
      return null
    }
  }
} 
