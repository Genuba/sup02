import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { TypesService } from './types.service';
import { TypeService } from '../type/type.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss'],
})
export class TypesComponent {

  settings = {
    actions: {
    add: false,
    edit:false,
    delete:false
    },
    

    columns: {
      type_type: {
        title: 'ID',
        type: 'number',
        
      },
      type_class: {
        title: 'Clase',
        type: 'string',
      },
      type_name: {
        title: 'Nombre',
        type: 'string',
      },
      type_code: {
        title: 'Código',
        type: 'string',
      },
      type_rute: {
        title: 'Descargar',
        type: 'string',
      },
    },
  };
  
  source: LocalDataSource = new LocalDataSource();

  constructor(private route: ActivatedRoute,private router:Router, private typesService: TypesService, private typeService: TypeService) { }

  async ngOnInit() {
   this.getTypes()
  }


  getTypes() {
      try{
     this.typesService.poolTypes()
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
