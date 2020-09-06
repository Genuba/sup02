import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IDtoReceiver} from '../dto/idtoReceiver';
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
export class ReceiverService {
  readonly url = environment.mgDocUrl + 'receiver';

  constructor(private httpClient: HttpClient){} 

  agregarReceptor(IDtoReceiver: IDtoReceiver): Observable<IRespuestaPg> {
    try{
     return this.httpClient.post<IRespuestaPg>(this.url, IDtoReceiver, httpOptions);
    } 
    catch (error) {
      console.log(error)
      return null
    }
  }
} 
