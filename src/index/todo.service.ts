import {Injectable} from '@angular/core';
import {Item} from './item'; 

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

@Injectable()
export class TodoService {
    getTodoList() : Promise<Array<Item>>{
        return Promise.resolve(todos);
    }
}