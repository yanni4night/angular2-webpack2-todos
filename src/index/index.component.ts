import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1>{{title}}</h1>',
})
export class IndexComponent {
  title = 'Minimal NgModule';
}
