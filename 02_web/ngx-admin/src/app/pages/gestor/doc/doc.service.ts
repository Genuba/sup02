import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IDtoDoc} from '../dto/idtoDoc';
import { IRespuestaPg } from '../irespuestapg';
import { environment } from '../../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json'
  }) 
}

@Injectable({
  providedIn: 'root'
})
export class DocService { 
  readonly url = environment.mgDocUrl + 'doc';

  constructor(private httpClient: HttpClient){} 

  agregarDocumento(IDtoDoc: IDtoDoc): Observable<IRespuestaPg> {
    try{
     return this.httpClient.post<IRespuestaPg>(this.url, IDtoDoc, httpOptions);
    }
    catch (error) {
      console.log(error)
      return null
    } 
  }

  async consultarTiposDoc (){
    try{
      return await this.httpClient.get<any>(this.url, httpOptions)
    }
    catch (error) {
      return null
    } 
  } 
}  

