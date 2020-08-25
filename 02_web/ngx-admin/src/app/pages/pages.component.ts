import { Component } from '@angular/core';

import { MENU_PRINCIPAL, MENU_ITEMS } from './pages-menu';
import { PagesService } from './pages.service';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';
import { AuthGuard } from '../guards/auth-guard.service';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {

  menu = [];
  user:any = {}

  constructor(private pagesServices :PagesService,authGuard: AuthGuard) {
    this.user = authGuard.user
  }

  ngOnInit(): void {
    try{
      this.pagesServices.getMenusUsuario(this.user.id)
      .subscribe(data => {
        this.menu = MENU_PRINCIPAL.concat(data,MENU_ITEMS);
      });
    }catch(error){
      console.log(error)
    }
    
  }
}
