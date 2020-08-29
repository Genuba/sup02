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
import { FormsRoutingModule, routedComponents } from './gestor-routing.module';
import { GestorComponent } from './gestor.component';
import { TipoComponent } from './tipo/tipo.component';
import { ReceptorComponent } from './receptor/receptor.component';
import { TypeDocService } from './tipo/tipo.service';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { DocumentoComponent } from './documento/documento.component';


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
    GestorComponent,
    TipoComponent,
    ReceptorComponent,   
    DocumentoComponent, 
  ],
  providers: [
    TypeDocService,
  ],
})
export class GestorModule { }
