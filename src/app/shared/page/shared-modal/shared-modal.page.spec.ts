import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SharedModalPage } from './shared-modal.page';

describe('SharedModalPage', () => {
  let component: SharedModalPage;
  let fixture: ComponentFixture<SharedModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SharedModalPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SharedModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
