import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { UsuarioConfigurarPage } from './usuario-configurar.page';

describe('UsuarioConfigurarPage', () => {
  let component: UsuarioConfigurarPage;
  let fixture: ComponentFixture<UsuarioConfigurarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioConfigurarPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsuarioConfigurarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
