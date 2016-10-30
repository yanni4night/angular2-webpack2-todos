import {Component, Input} from '@angular/core';
import {Item} from './item';

@Component({
  selector: 'ng-todo-item',
  template:
  `
  <div class="todo-item" [ngSwitch]="todo.isEditing">
    <template [ngSwitchCase]="true">
      <input type="text" class="todo-input" [(ngModel)]="todo.content" (blur)="onEditFinish(todo)"/>
    </template>
    <template ngSwitchDefault>
      <div class="todo-idx">{{idxes[index]}}</div>
      <div class="todo-content" [class.finished]="todo.finished" (click)="onEdit(todo)" title={{todo.content}}>{{todo.content}}</div>
      <div class="todo-finish" *ngIf="!todo.finished" (click)="onFinish(todo)">Finish</div>
      <div class="todo-delete" (click)="onDelete(index)">Delete</div>
    </template>
  </div>
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

  onEdit(item: Item) {
    this.todo.isEditing = true;
  }
  onEditFinish(item: Item) {
    this.todo.isEditing = false;
  }
  onFinish(item: Item) {
    this.todo.finished = true;
  }
}
