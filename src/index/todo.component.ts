import {Component} from '@angular/core';

@Component({
  selector: 'ng-todo',
  template:
  `
 <div class="todo">
  <ul>
    <li *ngFor="let todo of todos">{{todo}}</li>
  </ul>
 </div>
  `,
})
export class TodoComponent {
  todos = ['A', 'B']
}
