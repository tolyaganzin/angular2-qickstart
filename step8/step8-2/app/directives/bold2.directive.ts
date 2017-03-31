import {Directive, ElementRef, Renderer, HostListener} from '@angular/core';

@Directive({
    selector: '[bold2]'
})
export class BoldDirective2{

    constructor(private element: ElementRef, private renderer: Renderer){

        this.renderer.setElementStyle(this.element.nativeElement, "cursor", "pointer");
    }

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
