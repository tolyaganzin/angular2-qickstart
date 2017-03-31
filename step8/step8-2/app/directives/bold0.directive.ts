import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[bold0]'// название директивы
})
export class BoldDirective0{

    // elementRef служит для задание свойств елементу
    constructor(private elementRef: ElementRef){
        this.elementRef.nativeElement.style.fontWeight = "bold";
    }
}
