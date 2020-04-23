import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { UserConfigurationPage } from './user-configuration.page';

describe('UserConfigurationPage', () => {
  let component: UserConfigurationPage;
  let fixture: ComponentFixture<UserConfigurationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserConfigurationPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserConfigurationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
