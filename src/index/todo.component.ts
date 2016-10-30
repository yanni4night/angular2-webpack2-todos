import {Component} from '@angular/core';
import {Item} from './item';
import {ItemComponent} from './item.component';
import {TodoService} from './todo.service';

const todos: Array<Item> = [{
  id: '1',
  content: 'Use webpack2 and angular2 to build a todo app',
  finished: false,
  isEditing: false
},{
  id: '2',
  content: 'Use webpack2 and vue2 to build a todo app',
  finished: false,
  isEditing: false
}];

@Component({
  selector: 'ng-todo',
  providers: [TodoService],
  template:
  `
 <div class="todo">
 <div class="todo-title">Angular2 Todos</div>
  <ul class="todo-list">
    <li *ngFor="let todo of todos;let i = index;">
        <ng-todo-item [todo]="todo" [index]="i" [onDelete]="onDelete.bind(this)"></ng-todo-item>
    </li>
  </ul>
 </div>
  `,
})
export class TodoComponent {
  todos: Array<Item> = []
  constructor(private todoService: TodoService) { }
  ngOnInit(): void {
    this.todoService.getTodoList().then(todos=>{
      this.todos = todos;
    }).catch(e => {
      console.error(e);
    });
  }
  onDelete(idx: number) {
    this.todos.splice(idx, 1);
  }
  onFinish(item: Item) {
    item.finished = true;
  }
}
