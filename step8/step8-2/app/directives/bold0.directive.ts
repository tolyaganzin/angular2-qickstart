import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[bold0]'
})
export class BoldDirective0{

    constructor(private elementRef: ElementRef){

        this.elementRef.nativeElement.style.fontWeight = "bold";
    }
}
