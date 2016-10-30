import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {TodoComponent} from './todo.component';
import {ItemComponent} from './item.component';
import {HighlightDirective} from './highlight.directive';
import './index.less';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [TodoComponent, ItemComponent, HighlightDirective],
  bootstrap: [TodoComponent]
})
export class IndexModule { }
