import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
    selector: '[bold1]'
})
export class BoldDirective1{

    constructor(private elementRef: ElementRef, private renderer: Renderer){

        this.renderer.setElementStyle(this.elementRef.nativeElement, "font-weight", "bold");
    }
}
