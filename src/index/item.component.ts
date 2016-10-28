import {Component, Input} from '@angular/core';
import {Item} from './item';

@Component({
  selector: 'ng-todo-item',
  template:
  `
  <div class="todo-idx">{{idxes[index]}}</div>
  <div class="todo-content" [class.finished]="todo.finished">{{todo.content}}</div>
  <div class="todo-finish" *ngIf="!todo.finished" (click)="onFinish(todo)">Finish</div>
  <div class="todo-delete" (click)="onDelete(index)">Delete</div>
  `,
})
export class ItemComponent {
  @Input()
  todo: Item
  @Input()
  index: number
  @Input()
  onDelete: Function

  idxes = '①,②,③,④,⑤,⑥,⑦,⑧,⑨,⑩'.split(',')

  onFinish(item: Item) {
    this.todo.finished = true;
  }
}
