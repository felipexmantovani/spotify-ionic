import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SystemHomePage } from './system-home.page';

describe('SystemHomePage', () => {
  let component: SystemHomePage;
  let fixture: ComponentFixture<SystemHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SystemHomePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SystemHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
