import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {
  @Input() set appColor (estado:string){
    if(estado=='asignado'){
      this.el.nativeElement.style.color="blue";
    }    
    else if(estado=='finalizado' || estado=="atendido"){
      this.el.nativeElement.style.color="green";
    }    
    else
      this.el.nativeElement.style.color="red";
  };
  el: ElementRef;
  constructor(el:ElementRef) { 
    this.el=el;
  }

}
