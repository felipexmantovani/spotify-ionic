import { Directive, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[scrollOpacity]',
  host: {
    '(ionScroll)': 'onScroll($event)'
  }
})
export class ScrollOpacityDirective {
  @Input()
  public elementOpacity: HTMLElement;

  @Input()
  public hideIn: number = 100;

  constructor(private renderer: Renderer2) {}

  private checkMaxHideIn(): void {
    this.hideIn > 100 ? (this.hideIn = 100) : null;
  }

  public onScroll(event: CustomEvent): void {
    this.checkMaxHideIn();
    let scrollTop: number = event.detail.scrollTop;
    let opacity: number = scrollTop === 0 ? 1 : this.calcOpacity(scrollTop);
    this.renderer.setStyle(this.elementOpacity, 'opacity', opacity);
  }

  private calcOpacity(scrollTop: number): number {
    let value = this.hideIn - scrollTop;
    if (value < 10) return parseFloat(`0.0${value}`);
    if (value < 0) return 0;
    return parseFloat(`0.${value}`);
  }
}
