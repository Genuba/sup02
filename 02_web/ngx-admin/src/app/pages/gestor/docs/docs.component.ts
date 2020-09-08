import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { DocsService } from './docs.service';
import { DocService } from '../doc/doc.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss'],
})
export class DocsComponent {

  settings = {
    actions: {
    add: false,
    edit:false,
    delete:false
    },
    
 
    columns: {
      doc_cod: {
        title: 'Código',
        type: 'string',
        
      },
      doc_type: {
        title: 'Tipo',
        type: 'string',
        
      },
      doc_asunto: {
        title: 'Asunto',
        type: 'string',
      },
      doc_user: {
        title: 'Creador',
        type: 'string',
      },
      doc_review: {
        title: 'Revisor',
        type: 'string',
      },
      doc_sender: {
        title: 'Remitente',
        type: 'string',
      },
      doc_rec: {
        title: 'Receptor',
        type: 'string',
      },
      doc_send: {
        title: 'Envío',
        type: 'string',
      },
    },
  };
  
  source: LocalDataSource = new LocalDataSource();

  constructor(private route: ActivatedRoute,private router:Router, private docsService: DocsService, private docService: DocService) { }

  async ngOnInit() {
   this.getReceivers()
  }


  getReceivers() {
      try{
     this.docsService.poolDocs()
     .subscribe(data => {
        this.source.load(data)
        console.log(data)
     });
   }catch(error){
     console.log(error)
   }
 }

 /*
 deleteReceiver(idUsuario: number): void {
    this.receiverService.deleteReceiver(idUsuario).subscribe(data => {
      if(data.to_ge_rta.rta_boo){ 
        this.getUsuarios();
        alert(data.to_ge_rta.rta_msn)
      }else{
         alert(data.to_ge_rta.rta_msn)
      }
    });
}

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.deleteUsuario(event.data.user_user);
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  editar(event): void{
   if (window.confirm('Are you sure you want to edit?')) {
    this.router.navigate(['/pages/administrador/usuario/3']);
   event.confirm.resolve();
  } else {
  event.confirm.reject();
  }
  }
  */
}
