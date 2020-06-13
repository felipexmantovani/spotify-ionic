import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit, AfterViewInit {
  @ViewChild('element', { static: false })
  public element: ElementRef;

  public path: string = 'assets/logo';

  @Input()
  public color: string = 'white';

  @Input()
  public size: string;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.path = `${this.path}/${this.color}.png`;
  }

  ngAfterViewInit(): void {
    if (!this.size) {
      this.addClass('logo-100');
    } else {
      if (this.size === '25') {
        this.addClass('logo-25');
      }
      if (this.size === '50') {
        this.addClass('logo-50');
      }
      if (this.size === '75') {
        this.addClass('logo-75');
      }
      if (this.size === '100') {
        this.addClass('logo-100');
      }
    }
  }

  private addClass(classLogo: string): void {
    this.renderer.addClass(this.element.nativeElement, classLogo);
  }
}
