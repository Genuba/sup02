import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GestorComponent } from './gestor.component';
import { TipoComponent } from './tipo/tipo.component';
import { ReceptorComponent } from './receptor/receptor.component';
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
        component: ReceptorComponent,
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
  ReceptorComponent,
  DocumentoComponent,
  DocumentosComponent,
];

