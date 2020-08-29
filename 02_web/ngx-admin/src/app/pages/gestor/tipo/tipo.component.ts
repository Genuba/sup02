import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TypeDocService } from './tipo.service';
import { IDtoType} from '../dto/idtoType';
import { environment } from '../../../../environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-tipo',
  styleUrls: ['./tipo.component.scss'],
  templateUrl: './tipo.component.html',
})
export class TipoComponent {

  starRate = 2;
  heartRate = 4;
  radioGroupValue = 'This is value 2';

  type: IDtoType;
  url = environment.mgDocUrl + 'type';
  
  constructor(private route: ActivatedRoute,private router:Router, private typeDocService: TypeDocService) { }

  onSubmit(form: NgForm) {
      this.agregarTipo(form)
  }
   
  agregarTipo(form: NgForm) {
    const agregarTipo: IDtoType = { 
      type_type: 0,   
      type_class: form.value.clase,
      type_name: form.value.nombre,
      type_code: form.value.code,
      type_rute: form.value.rute
    } as IDtoType;  
    console.log(agregarTipo)
    this.typeDocService.agregarTipo(agregarTipo).subscribe(data =>{
      if(data.to_ge_rta.rta_boo){ 
        this.router.navigate(['pages/gestor/smart-table']);
        alert(data.to_ge_rta.rta_msn)
      }else{
         alert(data.to_ge_rta.rta_msn)
      }
    });
  }
}