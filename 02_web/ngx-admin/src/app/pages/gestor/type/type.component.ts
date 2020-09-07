import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TypeService } from './type.service';
import { IDtoType} from '../dto/idtoType';
import { environment } from '../../../../environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-type',
  styleUrls: ['./type.component.scss'],
  templateUrl: './type.component.html',
})
export class TypeComponent {

  starRate = 2;
  heartRate = 4;
  radioGroupValue = 'This is value 2';

  type: IDtoType;
  url = environment.mgDocUrl + 'type';
  
  constructor(private route: ActivatedRoute,private router:Router, private typeService: TypeService) { }

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
    this.typeService.agregarTipo(agregarTipo).subscribe(data =>{
      if(data.to_ge_rta.rta_boo){ 
        this.router.navigate(['pages/gestor/types']);
        alert(data.to_ge_rta.rta_msn)
      }else{
         alert(data.to_ge_rta.rta_msn)
      }
    });
  }
}