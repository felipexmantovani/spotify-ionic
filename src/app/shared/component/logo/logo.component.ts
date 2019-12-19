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

  ngOnInit() {
    this.path = `${this.path}/${this.cor}.png`;
  }

  ngAfterViewInit() {
    if (!this.tamanho) {
      this.addClasse('logo-100');
    } else {
      this.tamanho === '25' ? this.addClasse('logo-25') : null;
      this.tamanho === '50' ? this.addClasse('logo-50') : null;
      this.tamanho === '75' ? this.addClasse('logo-75') : null;
      this.tamanho === '100' ? this.addClasse('logo-100') : null;
    }
  }

  private addClasse(classe: string): void {
    this.renderer.addClass(this.element.nativeElement, classe);
  }
}
