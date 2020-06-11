import { AfterViewInit, Directive, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[scrollOpacity]',
  host: {
    '(ionScroll)': 'onScroll($event)'
  }
})
export class ScrollOpacityDirective implements AfterViewInit {
  @Input()
  public elementFadeIn: HTMLElement;

  @Input()
  public elementFadeOut: HTMLElement;

  @Input()
  public endAnimationScroll: number = 100;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.isFadeIn() ? this.renderer.setStyle(this.elementFadeIn, 'opacity', 0) : null;
    this.isFadeOut() ? this.renderer.setStyle(this.elementFadeOut, 'opacity', 1) : null;
  }

  private isFadeIn(): boolean {
    return this.elementFadeIn !== undefined;
  }

  private isFadeOut(): boolean {
    return this.elementFadeOut !== undefined;
  }

  private endAnimationCheckMaxScroll(): void {
    this.endAnimationScroll > 100 ? (this.endAnimationScroll = 100) : null;
  }

  public onScroll(event: CustomEvent): void {
    this.endAnimationCheckMaxScroll();
    let scrollTop: number = event.detail.scrollTop;

    if (this.isFadeIn()) {
      let opacityFadeIn: number;
      opacityFadeIn = scrollTop === 0 ? 0 : this.calcOpacityFadeIn(scrollTop);
      this.renderer.setStyle(this.elementFadeIn, 'opacity', opacityFadeIn);
    }
    if (this.isFadeOut()) {
      let opacityFadeOut: number;
      opacityFadeOut = scrollTop === 0 ? 1 : this.calcOpacityFadeOut(scrollTop);
      this.renderer.setStyle(this.elementFadeOut, 'opacity', opacityFadeOut);
    }
  }

  private calcOpacityFadeIn(scrollTop: number): number {
    if (scrollTop < 10) return parseFloat(`0.0${scrollTop}`);
    if (scrollTop >= this.endAnimationScroll - 1) return 1;
    return parseFloat(`0.${scrollTop}`);
  }

  private calcOpacityFadeOut(scrollTop: number): number {
    let value = this.endAnimationScroll - scrollTop;
    if (value < 10) return parseFloat(`0.0${value}`);
    if (value < 0) return 0;
    return parseFloat(`0.${value}`);
  }
}
