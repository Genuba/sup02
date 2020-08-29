import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TypeDocService } from './type-doc.service';
import { IDtoType} from '../dto/idtoType';
import { environment } from '../../../../environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-type-doc',
  templateUrl: './type-doc.component.html',
  styleUrls: ['./type-doc.component.scss']
})
export class TypeDocComponent implements OnInit {
  type: IDtoType;
  url = environment.mgDocUrl + 'type';
  
  constructor(private route: ActivatedRoute,private router:Router, private typeDocService: TypeDocService) { }

  ngOnInit(): void {
  } 

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
    this.typeDocService.agregarTipo(agregarTipo).subscribe(data =>{
      if(data.to_ge_rta.rta_boo){ 
        this.router.navigate(['/type']);
        alert(data.to_ge_rta.rta_msn)
      }else{
         alert(data.to_ge_rta.rta_msn)
      }
    });
  }
}