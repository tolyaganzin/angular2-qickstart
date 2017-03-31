import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
    selector: '[bold1]'// название директивы
})
export class BoldDirective1{

    // elementRef служит для задание свойств елементу
    // renderer служит для упращения задание свойств елементу
    constructor(private elementRef: ElementRef, private renderer: Renderer){
        this.renderer.setElementStyle(this.elementRef.nativeElement, "font-weight", "bold");
    }
}
