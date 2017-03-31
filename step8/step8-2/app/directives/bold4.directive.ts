import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
    selector: '[bold4]',
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})
export class BoldDirective4{

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
