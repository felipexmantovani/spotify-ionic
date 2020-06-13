import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';

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
  public cor: string = 'white';

  @Input()
  public tamanho: string = null;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.path = `${this.path}/${this.cor}.png`;
  }

  ngAfterViewInit() {
    if (!this.tamanho) {
      this.addClass('logo-100');
    } else {
      if (this.tamanho === '25') {
        this.addClass('logo-25');
      }
      if (this.tamanho === '50') {
        this.addClass('logo-50');
      }
      if (this.tamanho === '75') {
        this.addClass('logo-75');
      }
      if (this.tamanho === '100') {
        this.addClass('logo-100');
      }
    }
  }

  private addClass(classe: string): void {
    this.renderer.addClass(this.element.nativeElement, classe);
  }
}
