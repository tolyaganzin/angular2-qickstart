import {Directive, ElementRef, Renderer, HostListener} from '@angular/core';

@Directive({
    selector: '[bold2]'// название директивы
})
export class BoldDirective2{

    // elementRef служит для задание свойств елементу
    // renderer служит для упращения задание свойств елементу
    constructor(private element: ElementRef, private renderer: Renderer){

        this.renderer.setElementStyle(this.element.nativeElement, "cursor", "pointer");
    }

    //@HostListener декоратор слушает события елемента и реагирует на них
    @HostListener("mouseenter") onMouseEnter() {
        this.setFontWeight("bold");
    }

    @HostListener("mouseleave") onMouseLeave() {
        this.setFontWeight("normal");
    }

    private setFontWeight(val) {
        this.renderer.setElementStyle(this.element.nativeElement, "font-weight", val);
    }
}
