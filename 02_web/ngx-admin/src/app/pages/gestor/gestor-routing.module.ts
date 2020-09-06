import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GestorComponent } from './gestor.component';
import { TipoComponent } from './tipo/tipo.component';
import { ReceiverComponent } from './receiver/receiver.component';
import { ReceiversComponent } from './receivers/receivers.component';
import { DocumentoComponent } from './documento/documento.component';
import { DocumentosComponent } from './documentos/documentos.component';
 

const routes: Routes = [
  {
    path: '',
    component: GestorComponent,
    children: [
      {
        path: 'tipo',
        component: TipoComponent,
      },
      { 
        path: 'receptor',
        component: ReceiversComponent,
      },
      { 
        path: 'receptors',
        component: ReceiversComponent,
      },
      { 
        path: 'documento',
        component: DocumentoComponent,
      },
      { 
        path: 'documentos',
        component: DocumentosComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class FormsRoutingModule {
}

export const routedComponents = [
  GestorComponent,
  ReceiverComponent,
  ReceiversComponent,
  DocumentoComponent,
  DocumentosComponent,
];

