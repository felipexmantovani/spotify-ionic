import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { UsuarioEsqueceuSenhaPage } from './usuario-esqueceu-senha.page';

describe('UsuarioEsqueceuSenhaPage', () => {
  let component: UsuarioEsqueceuSenhaPage;
  let fixture: ComponentFixture<UsuarioEsqueceuSenhaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioEsqueceuSenhaPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsuarioEsqueceuSenhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
