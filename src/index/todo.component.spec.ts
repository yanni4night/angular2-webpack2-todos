import {
  inject,
  async,
  TestBed
} from '@angular/core/testing';
import {DomSanitizer} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

// Load the implementations that should be tested
import { TodoComponent } from './todo.component';
import { TodoService } from './todo.service';
import {ItemComponent} from './item.component';
import {HighlightDirective} from './highlight.directive';
import { Item } from './item';

describe('App', () => {
 let gTodos: Array<Item> = [{
  id: '1',
  content: 'Use webpack2 and angular2 to build a todo app',
  finished: false,
  isEditing: false
}, {
  id: '2',
  content: 'Use webpack2 and vue2 to build a todo app',
  finished: false,
  isEditing: false
}];
  let fixture: any, comp: any, spy: any, todoService: TodoService;
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TodoComponent, ItemComponent, HighlightDirective],
      providers: [TodoService]
    });
    fixture = TestBed.createComponent(TodoComponent);
    comp = fixture.componentInstance;
    todoService = fixture.debugElement.injector.get(TodoService);
    spy = spyOn(todoService, 'getTodoList')
      .and.returnValue(Promise.resolve(gTodos));
  });

  it('should have a url', async(() => {
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(comp.todos.length).toBe(2);
      });
  }));

});
