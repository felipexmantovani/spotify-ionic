import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SistemaInicioPage } from './sistema-inicio.page';

describe('SistemaInicioPage', () => {
  let component: SistemaInicioPage;
  let fixture: ComponentFixture<SistemaInicioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SistemaInicioPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SistemaInicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
