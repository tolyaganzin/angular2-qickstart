import {Directive, HostListener, Input, HostBinding, OnInit} from '@angular/core';

@Directive({
    selector: '[bold6]' // название директивы
})
export class BoldDirective6{

    // @HostBinding декоратор привязваеться к свойствам елемента
    // @HostListener декоратор слушает события елемента и реагирует на них
    // @Input декоратор ввода данных
    // OnInit интерфейс для метода ngOnInit

    @Input("bold6") selectedSize = "18px";
    @Input() defaultSize = "16px";

    private fontSize : string;
    private fontWeight = "normal";
    ngOnInit(){
        this.fontSize = this.defaultSize;
    }
    constructor(){}

    @HostBinding("style.fontSize") get getFontSize(){

        return this.fontSize;
    }

    @HostBinding("style.fontWeight") get getFontWeight(){

        return this.fontWeight;
    }

    @HostBinding("style.cursor") get getCursor(){
        return "pointer";
    }

    @HostListener("mouseenter") onMouseEnter() {
        this.fontWeight ="bold";
        this.fontSize = this.selectedSize;
    }

    @HostListener("mouseleave") onMouseLeave() {
        this.fontWeight = "normal";
        this.fontSize = this.defaultSize;
    }
}
