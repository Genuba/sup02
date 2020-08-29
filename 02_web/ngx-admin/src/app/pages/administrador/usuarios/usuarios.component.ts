import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { UsuariosService } from './usuarios.service';
import { UsuarioService } from '../usuario/usuario.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent {

  settings = {
    actions: {
    add: false,
    edit:false,
    delete:false,
    custom:[{ name:'editar', title: '<i class="nb-edit"></i>'}],
    },
    
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },

    columns: {
      user_user: {
        title: 'ID',
        type: 'number',
        
      },
      user_alias: {
        title: 'Usuario',
        type: 'string',
      },
      psna_nomb: {
        title: 'Nombre',
        type: 'string',
      },
      psna_apdo: {
        title: 'Apellido',
        type: 'string',
      },
      rol_nomb: {
        title: 'Rol',
        type: 'string',
      },
    },
  };
  
  source: LocalDataSource = new LocalDataSource();

  constructor(private route: ActivatedRoute,private router:Router, private usuariosService: UsuariosService, private usuarioService: UsuarioService) { }

  async ngOnInit() {
   this.getUsuarios()
  }


  getUsuarios() {
      try{
     this.usuariosService.poolUsuarios()
     .subscribe(data => {
        this.source.load(data)
        console.log(data)
     });
   }catch(error){
     console.log(error)
   }
 }

 deleteUsuario(idUsuario: number): void {
    this.usuarioService.deleteUsuario(idUsuario).subscribe(data => {
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
}
