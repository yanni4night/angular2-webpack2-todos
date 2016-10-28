import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {TodoComponent} from './todo.component';
import {ItemComponent} from './item.component';
import './index.less';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [TodoComponent, ItemComponent],
  bootstrap: [TodoComponent]
})
export class IndexModule { }
