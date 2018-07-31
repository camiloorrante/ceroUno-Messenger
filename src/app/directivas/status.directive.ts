import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appStatus]'
})
export class StatusDirective {
  @HostBinding('class.status') private activo = false;

  @HostListener('click')
  onclick() {
    if(this.activo){
      this.activo = false;
      console.log("false");
    }else{
      this.activo = true;
      console.log("true");
    }    
  }
  
  constructor() { }
}
