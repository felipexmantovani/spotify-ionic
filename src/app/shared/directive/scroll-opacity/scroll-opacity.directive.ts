import { AfterViewInit, Directive, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollOpacity]'
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
    if (this.isFadeIn()) {
      this.renderer.setStyle(this.elementFadeIn, 'opacity', 0);
    }
    if (this.isFadeOut()) {
      this.renderer.setStyle(this.elementFadeOut, 'opacity', 1);
    }
  }

  private isFadeIn(): boolean {
    return this.elementFadeIn !== undefined;
  }

  private isFadeOut(): boolean {
    return this.elementFadeOut !== undefined;
  }

  private endAnimationCheckMaxScroll(): void {
    if (this.endAnimationScroll > 100) {
      this.endAnimationScroll = 100;
    }
  }

  @HostListener('ionScroll', ['$event'])
  public onScroll(event: CustomEvent): void {
    if (event) {
      this.endAnimationCheckMaxScroll();
      const scrollTop: number = event.detail.scrollTop;

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
  }

  private calcOpacityFadeIn(scrollTop: number): number {
    if (scrollTop < 10) {
      return parseFloat(`0.0${scrollTop}`);
    }
    if (scrollTop >= this.endAnimationScroll - 1) {
      return 1;
    }
    return parseFloat(`0.${scrollTop}`);
  }

  private calcOpacityFadeOut(scrollTop: number): number {
    const value = this.endAnimationScroll - scrollTop;
    if (value < 10) {
      return parseFloat(`0.0${value}`);
    }
    if (value < 0) {
      return 0;
    }
    return parseFloat(`0.${value}`);
  }
}
