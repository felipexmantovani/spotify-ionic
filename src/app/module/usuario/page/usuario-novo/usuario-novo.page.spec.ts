import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { UsuarioNovoPage } from './usuario-novo.page';

describe('UsuarioNovoPage', () => {
  let component: UsuarioNovoPage;
  let fixture: ComponentFixture<UsuarioNovoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioNovoPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsuarioNovoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
