import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IDtoType} from '../dto/idtoType';
import { IRespuestaPg } from '../../../irespuestapg';
import { environment } from '../../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json'
  }) 
}

@Injectable({
  providedIn: 'root'
})
export class TypeDocService {
  readonly url = environment.mgDocUrl + 'type';

  constructor(private httpClient: HttpClient){} 

  agregarTipo(IDtoType: IDtoType): Observable<IRespuestaPg> {
    try{
     return this.httpClient.post<IRespuestaPg>(this.url, IDtoType, httpOptions);
    }
    catch (error) {
      console.log(error)
      return null
    }
  }
} 
