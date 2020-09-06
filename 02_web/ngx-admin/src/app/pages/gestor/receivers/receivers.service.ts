import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IDtoReceiver} from '../dto/idtoReceiver';
import { environment } from '../../../../environments/environment';
import { IRespuestaPg } from '../irespuestapg';

 
@Injectable({
  providedIn: 'root'
})

export class ReceiversService {
  readonly url = environment.mgDocUrl + 'receivers';
  constructor(private httpClient: HttpClient){} 

  poolReceivers (): Observable<IDtoReceiver[]> {
    try{
      return this.httpClient.get<IDtoReceiver[]>(this.url);
    } 
    catch (error) {
      return null
    }
  }  
} 