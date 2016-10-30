import {Component, OnInit} from '@angular/core';
import {Item} from './item';
import {ItemComponent} from './item.component';
import {TodoService} from './todo.service';

@Component({
  selector: 'ng-todo',
  providers: [TodoService],
  template:
  `
 <div class="todo">
 <div class="todo-title">Angular2 Todos</div>
  <ul class="todo-list">
    <li *ngFor="let todo of todos;let i = index;">
        <ng-todo-item [todo]="todo" [index]="i" [onDelete]="onDelete.bind(this)" [onChange]="onChange.bind(this)"></ng-todo-item>
    </li>
  </ul>
 </div>
  `,
})
export class TodoComponent implements OnInit{
  todos: Array<Item> = []
  constructor(private todoService: TodoService) { }
  ngOnInit(): void {
    this.todoService.getTodoList().then(todos => {
      this.todos = todos;
    }).catch(e => {
      console.error(e);
    });
  }
  onDelete(idx: number) {
    this.todos.splice(idx, 1);
    this.todoService.saveTodoList(this.todos);
  }
  onFinish(item: Item) {
    item.finished = true;
    this.todoService.saveTodoList(this.todos);
  }
  onChange(item: Item) {
    this.todoService.saveTodoList(this.todos);
  }
}
