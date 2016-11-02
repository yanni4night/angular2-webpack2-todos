import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ng-app',
    template: `
<h1>Angular Todos</h1>
  <nav>
    <a routerLink="/" routerLinkActive="active">Todos</a>
    <a routerLink="/about" routerLinkActive="active">About</a>
  </nav>
  <router-outlet></router-outlet>
    `
})
export class AppComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}