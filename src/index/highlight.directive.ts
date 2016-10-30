import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({ selector: '[todo-item-highlight]' })
export class HighlightDirective {
    constructor(el: ElementRef, renderer: Renderer) {
       renderer.setElementClass(el.nativeElement, 'highlight', true);
    }
}