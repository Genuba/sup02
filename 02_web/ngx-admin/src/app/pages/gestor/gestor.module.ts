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
import { TypeComponent } from './type/type.component';
import { TypesComponent } from './types/types.component';
import { TypesService } from './types/types.service';
import { ReceiverComponent } from './receiver/receiver.component';
import { ReceiversService } from './receivers/receivers.service';
import { ReceiverService } from './receiver/receiver.service';
import { ReceiversComponent } from './receivers/receivers.component';
import { TypeService } from './type/type.service';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { DocComponent } from './doc/doc.component';
import { DocsComponent } from './docs/docs.component';
import { DocService } from './doc/doc.service';
import { DocsService } from './docs/docs.service';


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
    TypeComponent,
    TypesComponent,
    ReceiverComponent,
    ReceiversComponent,     
    DocComponent,
    DocsComponent,
  ],
  providers: [
    TypeService,
    TypesService,
    ReceiverService,
    ReceiversService,
    DocService,
    DocsService,
  ],
})
export class GestorModule { }
