import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DocService } from './doc.service';
import { IDtoDoc} from '../dto/idtoDoc';
import { environment } from '../../../../environments/environment';
import { ActivatedRoute } from '@angular/router';

interface Data {
  type_type: number;
  type_class: string;
}

@Component({
  selector: 'ngx-doc',
  styleUrls: ['./doc.component.scss'],
  templateUrl: './doc.component.html',
})
export class DocComponent implements OnInit  {

  starRate = 2;
  heartRate = 4;
  radioGroupValue = 'This is value 2';
  url = environment.mgDocUrl + 'doc'; 
  data:Data[];
  constructor(private route: ActivatedRoute,private router:Router, private docService: DocService) { }

  ngOnInit(): void {
    this.consultarTiposDoc()
  } 

  onSubmit(form: NgForm) {
      this.agregarDocumento(form)
  }
  
  agregarDocumento(form: NgForm) { 
    const agregarDocumento: IDtoDoc = { 
      doc_doc: 0,   
      doc_date: " ",
      doc_asunto: form.value.asunto,
      doc_user: form.value.user,
      doc_send: form.value.send,
      doc_code: " ",
      doc_cons: 1,
      doc_rute: " ",
      doc_type: form.value.type, 
      doc_cod: " "
    } as IDtoDoc;
    console.log(agregarDocumento)
    this.docService.agregarDocumento(agregarDocumento).subscribe(data =>{
       console.log(data)
      if(data.to_ge_rta.rta_boo){ 
        this.router.navigate(['/pages/gestor/documentos']);
        alert(data.to_ge_rta.rta_msn)
      }else{
         alert(data.to_ge_rta.rta_msn)
      }
    });
  }

  async consultarTiposDoc() { 
  try{
     (await this.docService.consultarTiposDoc()).subscribe(data => {this.data= data
    });
   }catch(error){
     console.log(error)
   }
  }
}