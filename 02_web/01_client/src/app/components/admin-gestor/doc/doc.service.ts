import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IDtoDoc} from '../dto/idtoDoc';
import { IRespuestaPg } from '../../../irespuestapg';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DocService { 
  readonly url = environment.mgDocUrl + 'doc';

  constructor(private httpClient: HttpClient){} 

  agregarDocumento(IDtoDoc: IDtoDoc): Observable<IRespuestaPg> {
    try{
     return this.httpClient.post<IRespuestaPg>(this.url, IDtoDoc);
    }
    catch (error) {
      console.log(error)
      return null
    } 
  }

  async consultarTiposDoc (){
    try{
      return await this.httpClient.get<any>(this.url)
    }
    catch (error) {
      return null
    }
  } 
}  

