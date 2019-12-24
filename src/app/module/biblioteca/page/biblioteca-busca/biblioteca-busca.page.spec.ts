import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { BibliotecaBuscaPage } from './biblioteca-busca.page';

describe('BibliotecaBuscaPage', () => {
  let component: BibliotecaBuscaPage;
  let fixture: ComponentFixture<BibliotecaBuscaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BibliotecaBuscaPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BibliotecaBuscaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
