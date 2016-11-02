import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Item } from './item';
import { ItemComponent } from './item.component';
import { TodoService } from './todo.service';


@Component({
  selector: 'ng-todo',
  providers: [TodoService],
  template:
  `
 <div class="todo">
 <div class="todo-title">Angular2 Todos
  <a [href]="githubUrl" class="link">G</a>
  <a href="#" class="link" (click)="_onNew($event)">N</a>
 </div>
  <ul class="todo-list">
    <li *ngFor="let todo of todos;let i = index;">
        <ng-todo-item [todo]="todo" [index]="i" [onDelete]="onDelete.bind(this)" [onChange]="onChange.bind(this)"></ng-todo-item>
    </li>
  </ul>
 </div>
  `,
})
export class TodoComponent implements OnInit {
  todos: Array<Item> = []
  githubUrl: any = ''
  constructor(private todoService: TodoService, private sanitizer: DomSanitizer) {
    this.githubUrl = sanitizer.bypassSecurityTrustUrl('https://github.com/yanni4night/angular2-webpack2-todos');
  }
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
  _onNew(evt: any) {
    evt.preventDefault();
    this.todos.push({
      id: Date.now(),
      content: 'Click to edit',
      finished: false,
      isEditing: false
    });
  }
}
