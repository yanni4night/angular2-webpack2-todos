import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { TodoComponent } from './index/todo.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ItemComponent } from './index/item.component';
import { HighlightDirective } from './index/highlight.directive';
import './app.less';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot([
    {
      path: '',
      component: TodoComponent
    },
    {
      path: 'about',
      component: AboutComponent
    }
  ], {

    })],
  declarations: [AppComponent, TodoComponent, AboutComponent, ItemComponent, HighlightDirective],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
