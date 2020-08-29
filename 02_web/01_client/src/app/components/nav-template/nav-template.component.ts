import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-template',
  templateUrl: './nav-template.component.html',
  styleUrls: ['./nav-template.component.scss']
})
export class NavTemplateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
 
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}

