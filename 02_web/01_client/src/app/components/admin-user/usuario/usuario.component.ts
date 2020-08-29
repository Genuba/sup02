import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from './usuario.service';
import { IDtoUsuarios} from '../dto/idtoUsuarios';
import { environment } from '../../../../environments/environment';
import { ActivatedRoute } from '@angular/router';


@Component({ 
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  usuario: IDtoUsuarios;
  url = environment.mgUserUrl + 'usuario';
  id = this.route.snapshot.paramMap.get('id');
  
  constructor(private route: ActivatedRoute,private router:Router, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuario = {} as IDtoUsuarios
    if (this.id != null){
      this.getUsuario()
    }
  } 

  onSubmit(form: NgForm) {
    if (this.id == null ){
      this.agregarUsuario(form)
    }
    else {
      this.putUsuario(form)
    }
  }
  
  agregarUsuario(form: NgForm) {
    const addUsuario: IDtoUsuarios = { 
      user_user: 0,
      user_alias: form.value.usuario,
      user_pswd: form.value.password,
      psna_nomb: form.value.nombre,
      psna_apdo: form.value.apellido,
      psna_ndoc: form.value.documento,
      psna_dirc: form.value.direccion,
      psna_telf: form.value.telefono,
      psna_email: form.value.email,
      rol_rol: form.value.rol,
      rol_nomb: ""
    } as IDtoUsuarios;  
    this.usuarioService.agregarUsuario(addUsuario).subscribe(data =>{
      if(data.to_ge_rta.rta_boo){ 
        this.router.navigate(['/usuarios']);
        alert(data.to_ge_rta.rta_msn)
      }else{
         alert(data.to_ge_rta.rta_msn)
      }
    });
  }

  getUsuario() {
    this.usuarioService.getUsuario(Number(this.id))
      .subscribe(async usuario => {this.usuario = usuario
      });
  }

  putUsuario(form: NgForm) {
    const usuario: IDtoUsuarios = { 
      psna_nomb: form.value.nombre,
      psna_apdo: form.value.apellido,
      psna_ndoc: form.value.documento,
      psna_dirc: form.value.direccion,
      psna_telf: form.value.telefono,
      psna_email: form.value.email,
      rol_rol: form.value.rol
    } as IDtoUsuarios;  
    this.usuarioService.putUsuario(this.id, usuario).subscribe(data =>{
      if(data.to_ge_rta.rta_boo){ 
        this.router.navigate(['/usuarios']);
        alert(data.to_ge_rta.rta_msn)
      }else{
         alert(data.to_ge_rta.rta_msn)
      }
    });
  }
}