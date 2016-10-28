import {Component} from '@angular/core';
import {Item} from './item';

const todos: Array<Item> = [{
  id: '1',
  content: 'Use webpack2 and angular2 to build a todo app',
  finished: false
},{
  id: '2',
  content: 'Use webpack2 and vue2 to build a todo app',
  finished: false
}];

@Component({
  selector: 'ng-todo',
  template:
  `
 <div class="todo">
 <div class="todo-title">Angular2 Todos</div>
  <ul class="todo-list">
    <li *ngFor="let todo of todos;let i = index;" class="todo-item">
        <div class="todo-idx">{{idxes[i]}}</div>
        <div class="todo-content" [class.finished]="todo.finished">{{todo.content}}</div>
        <div class="todo-finish" *ngIf="!todo.finished" (click)="onFinish(todo)">Finish</div>
        <div class="todo-delete" (click)="onDelete(todo)">Delete</div>
    </li>
  </ul>
 </div>
  `,
})
export class TodoComponent {
  todos: Array<Item> = todos
  idxes = '①,②,③,④,⑤,⑥,⑦,⑧,⑨,⑩'.split(',')

  onDelete(item: Item) {
    const idx = this.todos.indexOf(item);
    this.todos.splice(idx);
  }
  onFinish(item: Item) {
    item.finished = true;
  }
}
