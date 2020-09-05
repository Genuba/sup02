import { Component } from '@angular/core';

import { MENU_PRINCIPAL, MENU_ITEMS } from './pages-menu';
import { PagesService } from './pages.service';


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

  constructor(private pagesServices :PagesService) {}

  ngOnInit(): void {
    try{
      this.pagesServices.getMenusUsuario()
      .subscribe(data => {
        this.menu = MENU_PRINCIPAL.concat(data,MENU_ITEMS);
      });
    }catch(error){
      console.log(error)
    }
    
  }
}
