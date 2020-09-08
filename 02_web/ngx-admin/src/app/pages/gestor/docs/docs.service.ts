import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IDtoDoc} from '../dto/idtoDoc';
import { environment } from '../../../../environments/environment';
import { IRespuestaPg } from '../irespuestapg';

 
@Injectable({
  providedIn: 'root'
})

export class DocsService {
  readonly url = environment.mgDocUrl + 'docs';
  constructor(private httpClient: HttpClient){} 

  poolDocs (): Observable<IDtoDoc[]> {
    try{
      return this.httpClient.get<IDtoDoc[]>(this.url);
    } 
    catch (error) {
      return null
    }
  }  
} 