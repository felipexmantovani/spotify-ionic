import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PlayerBtnRepeatComponent } from './player-btn-repeat.component';

describe('PlayerBtnRepeatComponent', () => {
  let component: PlayerBtnRepeatComponent;
  let fixture: ComponentFixture<PlayerBtnRepeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerBtnRepeatComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerBtnRepeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
