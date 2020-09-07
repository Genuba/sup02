import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ReceiverService } from './receiver.service';
import { IDtoReceiver} from '../dto/idtoReceiver';
import { environment } from '../../../../environments/environment';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'ngx-receiver',
  styleUrls: ['./receiver.component.scss'],
  templateUrl: './receiver.component.html',
})
export class ReceiverComponent {
 
  starRate = 2;
  heartRate = 4;
  radioGroupValue = 'This is value 2';
  receiver: IDtoReceiver;
  url = environment.mgDocUrl + 'receiver';
  
  constructor(private route: ActivatedRoute,private router:Router, private receiverService: ReceiverService) { }

  ngOnInit(): void {
  } 

  onSubmit(form: NgForm) {
      this.agregarReceiver(form)
  }
  
  agregarReceiver(form: NgForm) {
    const addReceiver: IDtoReceiver = { 
      rec_rec: 0,   
      rec_name: form.value.nombre,
      rec_address: form.value.direccion,
      rec_email: form.value.email,
      rec_desc: form.value.descripcion,
      rec_telf: form.value.telefono
    } as IDtoReceiver;  
    console.log(addReceiver)
    this.receiverService.agregarReceiver(addReceiver).subscribe(data =>{
      if(data.to_ge_rta.rta_boo){ 
        this.router.navigate(['/pages/gestor/documentos']);
        alert(data.to_ge_rta.rta_msn)
      }else{
         alert(data.to_ge_rta.rta_msn)
      }
    });
  }
}