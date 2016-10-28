import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {TodoComponent} from './todo.component';
import {ItemComponent} from './item.component';
import './index.less';

@NgModule({
  imports: [BrowserModule],
  declarations: [TodoComponent, ItemComponent],
  bootstrap: [TodoComponent]
})
export class IndexModule { }
