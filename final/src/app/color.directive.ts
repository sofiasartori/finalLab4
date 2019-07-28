import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {
  @Input() set appColor (atencion:string){
    if(atencion){
      this.el.nativeElement.style.color="red";
    }    
  };
  el: ElementRef;
  constructor(el:ElementRef) { 
    this.el=el;
  }

}
