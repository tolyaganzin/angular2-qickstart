import {Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
    selector: '[bold3]'// название директивы
})
export class BoldDirective3{

    private fontWeight = "normal";
    constructor(){}

    // @HostBinding декоратор привязваеться к свойствам елемента
    // @HostListener декоратор слушает события елемента и реагирует на них

    @HostBinding("style.fontWeight") get getFontWeight(){
        return this.fontWeight;
    }

    @HostBinding("style.cursor") get getCursor(){
        return "pointer";
    }

    @HostListener("mouseenter") onMouseEnter() {
        this.fontWeight ="bold";
    }

    @HostListener("mouseleave") onMouseLeave() {
        this.fontWeight = "normal";
    }
}
