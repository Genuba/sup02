import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GestorComponent } from './gestor.component';
import { TypeComponent } from './type/type.component';
import { TypesComponent } from './types/types.component';
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
        component: TypeComponent,
      },
      {
        path: 'types',
        component: TypesComponent,
      },
      { 
        path: 'receptor',
        component: ReceiverComponent,
      },
      { 
        path: 'receivers',
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
  TypeComponent,
  TypesComponent,
  DocumentoComponent,
  DocumentosComponent,
];

