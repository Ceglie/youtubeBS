import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[direttiva]'
})
export class DirettivaDirective {
  @Input() set direttiva(showParagrafo: boolean) {
    if (showParagrafo) {
      //Ci entri quando condizione è false
      //perchè quando condizione=false !condizione == true
      this.viewContainer.createEmbeddedView(this.templateRef);
    }else{
      this.viewContainer.clear();
    }

  }
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }
}
