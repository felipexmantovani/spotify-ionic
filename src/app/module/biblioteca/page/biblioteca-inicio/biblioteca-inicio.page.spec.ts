import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { BibliotecaInicioPage } from './biblioteca-inicio.page';

describe('BibliotecaInicioPage', () => {
  let component: BibliotecaInicioPage;
  let fixture: ComponentFixture<BibliotecaInicioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BibliotecaInicioPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BibliotecaInicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
