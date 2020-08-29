import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginGuard } from './guards/login.guard'
import { NoLoginGuard } from './guards/no-login.guard';
import { UsuarioService } from './components/admin-user/usuario/usuario.service';
import { UsuariosService } from './components/admin-user/usuarios/usuarios.service';
import { LoginComponent } from './components/login/login.component';
import { UsuariosComponent } from './components/admin-user/usuarios/usuarios.component';
import { UsuarioComponent } from './components/admin-user/usuario/usuario.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavTemplateComponent } from './components/nav-template/nav-template.component';
import { LoginService } from './components/login/login.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReceiverComponent } from './components/admin-gestor/receiver/receiver.component';
import { ReceiverService } from './components/admin-gestor/receiver/receiver.service';
import { TypeDocComponent } from './components/admin-gestor/type-doc/type-doc.component';
import { TypeDocService } from './components/admin-gestor/type-doc/type-doc.service';
import { DocComponent } from './components/admin-gestor/doc/doc.component';
import { DocsComponent } from './components/admin-gestor/docs/docs.component';


const routes: Routes = [
  {path: '', component: LoginComponent, canActivate:[NoLoginGuard]}, //la pagina inicial / direcciona al login
  {path: 'login', component: LoginComponent, canActivate:[NoLoginGuard]},
  {path: 'home-page', component: HomePageComponent, canActivate: [LoginGuard]},
  {path: 'usuario', component: UsuarioComponent, canActivate: [LoginGuard]},
  {path: 'usuarios', component: UsuariosComponent, canActivate: [LoginGuard]},
  {path: 'usuarios/:id', component: UsuarioComponent, canActivate: [LoginGuard]},
  {path: 'receiver', component: ReceiverComponent, canActivate: [LoginGuard]},
  {path: 'type', component: TypeDocComponent, canActivate: [LoginGuard]},
  {path: 'doc', component: DocComponent, canActivate: [LoginGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuarioComponent,
    UsuariosComponent,
    HomePageComponent,
    NavTemplateComponent,
    ReceiverComponent,
    TypeDocComponent,
    DocComponent,
    DocsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule
  ],
  providers: [
    UsuarioService,
    UsuariosService,
    LoginService,
    ReceiverService,
    TypeDocService,   
    LoginGuard, 
    NoLoginGuard],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
