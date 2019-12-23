import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { UsuarioInicioPage } from './usuario-inicio.page';

describe('UsuarioInicioPage', () => {
  let component: UsuarioInicioPage;
  let fixture: ComponentFixture<UsuarioInicioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioInicioPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsuarioInicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
