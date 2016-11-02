import { Component, Input } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'ng-todo-item',
  template:
  `
  <div class="todo-item" [ngSwitch]="todo.isEditing" todo-item-highlight>
    <template [ngSwitchCase]="true">
      <input type="text" class="todo-input" [(ngModel)]="todo.content" (blur)="_onEditDone(todo)"/>
    </template>
    <template ngSwitchDefault>
      <div class="todo-idx">{{idxes[index]}}</div>
      <div class="todo-content" [class.finished]="todo.finished" (click)="_onEdit(todo)" title={{todo.content}}>{{todo.content}}</div>
      <div class="todo-finish" *ngIf="!todo.finished" (click)="_onFinish(todo)">Finish</div>
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
  @Input()
  onChange: Function

  idxes = '①,②,③,④,⑤,⑥,⑦,⑧,⑨,⑩'.split(',')

  _onEdit(item: Item) {
    item.isEditing = true;
  }
  _onEditDone(item: Item) {
    item.isEditing = false;
    this.onChange(item);
  }
  _onFinish(item: Item) {
    item.finished = true;
    this.onChange(item);
  }
}
