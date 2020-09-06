import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { ReceiversService } from './receivers.service';
import { ReceiverService } from '../receiver/receiver.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-receivers',
  templateUrl: './receivers.component.html',
  styleUrls: ['./receivers.component.scss'],
})
export class ReceiversComponent {

  settings = {
    actions: {
    add: false,
    edit:false,
    delete:false
    },
    

    columns: {
      rec_rec: {
        title: 'ID',
        type: 'number',
        
      },
      rec_name: {
        title: 'Nombre',
        type: 'string',
      },
      rec_address: {
        title: 'Dirección',
        type: 'string',
      },
      rec_email: {
        title: 'Email',
        type: 'string',
      },
      rec_desc: {
        title: 'Descripción',
        type: 'string',
      },
    },
  };
  
  source: LocalDataSource = new LocalDataSource();

  constructor(private route: ActivatedRoute,private router:Router, private receiversService: ReceiversService, private receiverService: ReceiverService) { }

  async ngOnInit() {
   this.getReceivers()
  }


  getReceivers() {
      try{
     this.receiversService.poolReceivers()
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
