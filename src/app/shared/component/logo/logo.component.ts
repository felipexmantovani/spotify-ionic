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
  public percentSize: number = 100;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.path = `${this.path}/${this.color}.png`;
  }

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.element.nativeElement, 'width', `${this.percentSize}%`);
  }
}
