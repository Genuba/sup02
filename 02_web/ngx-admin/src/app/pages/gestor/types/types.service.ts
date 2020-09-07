import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IDtoType} from '../dto/idtoType';
import { environment } from '../../../../environments/environment';
import { IRespuestaPg } from '../irespuestapg';

 
@Injectable({
  providedIn: 'root'
})

export class TypesService {
  readonly url = environment.mgDocUrl + 'types';
  constructor(private httpClient: HttpClient){} 

  poolTypes (): Observable<IDtoType[]> {
    try{
      return this.httpClient.get<IDtoType[]>(this.url);
    } 
    catch (error) {
      return null
    }
  }  
} 