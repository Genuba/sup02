import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
  NbTreeGridModule
} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';//borrar cuando consuma el servicio
import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule, routedComponents } from './administrador-routing.module';
import { AdministradorComponent } from './administrador.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioService } from './usuario/usuario.service';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosService } from './usuarios/usuarios.service';
import { FormsModule as ngFormsModule } from '@angular/forms';

@NgModule({ 
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    FormsRoutingModule,
    NbSelectModule,
    NbIconModule, 
    ngFormsModule,
    NbTreeGridModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
    AdministradorComponent,
    UsuarioComponent,
    UsuariosComponent
    
  ],
  providers: [
    UsuarioService,
    UsuariosService
  ],
})
export class AdministradorModule { }
