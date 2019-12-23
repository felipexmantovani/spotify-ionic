import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { EsqueceuSenhaPage } from './esqueceu-senha.page';

describe('EsqueceuSenhaPage', () => {
  let component: EsqueceuSenhaPage;
  let fixture: ComponentFixture<EsqueceuSenhaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EsqueceuSenhaPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EsqueceuSenhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
