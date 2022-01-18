import {
    Directive,
    ElementRef,
    HostBinding,
    HostListener,
    Input,
    OnInit,
    Renderer2
} from "@angular/core";

@Directive({
    selector: '[appBackground]'
})

export class BackgroundDirective implements OnInit {
    @Input('appBackground') hoverColor: string = 'green';
    @Input() defaultColor: string = 'transparent';
    @HostBinding('style.backgroundColor') background: string;

    constructor(
        private element: ElementRef,
        private renderer: Renderer2) { }

    ngOnInit(): void {
        this.background = this.defaultColor;
        // const { nativeElement } = this.element;
        // this.renderer.setStyle(nativeElement, 'background-color', 'green');
        // // this.element.nativeElement.style.backgroundColor = 'red';
        // this.renderer.addClass(nativeElement, 'white-text');
    }

    @HostListener('mouseenter') mouseEnter() {
        // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'red')
        this.background = this.hoverColor;
    }

    @HostListener('mouseleave') mouseLeave() {
        // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'transparent')
        this.background = this.defaultColor;
    }
}