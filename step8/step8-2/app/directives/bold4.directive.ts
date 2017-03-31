import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
    selector: '[bold4]',// название директивы
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }// подписка на события елемента
})
export class BoldDirective4{

    // elementRef служит для задание свойств елементу
    // renderer служит для упращения задание свойств елементу
    constructor(private element: ElementRef, private renderer: Renderer){

        this.renderer.setElementStyle(this.element.nativeElement, "cursor", "pointer");
    }

    onMouseEnter(){
        this.setFontWeight("bold");
    }
    onMouseLeave(){
        this.setFontWeight("normal");
    }
    private setFontWeight(val) {
        this.renderer.setElementStyle(this.element.nativeElement, "font-weight", val);
    }
}
