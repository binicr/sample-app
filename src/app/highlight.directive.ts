import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef) {
   
   }
   @HostListener('mouseenter') onMouseEnter()
   {
     this.highlight('red');
   }
   @HostListener('mouseleave') onMouseLeave()
   {
     this.highlight(null);
   }
private highlight(colour)
{
  this.el.nativeElement.style.backgroundColor = colour;
}
}
