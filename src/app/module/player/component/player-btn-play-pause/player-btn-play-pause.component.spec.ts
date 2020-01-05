import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PlayerBtnPlayPauseComponent } from './player-btn-play-pause.component';

describe('PlayerBtnPlayPauseComponent', () => {
  let component: PlayerBtnPlayPauseComponent;
  let fixture: ComponentFixture<PlayerBtnPlayPauseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerBtnPlayPauseComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerBtnPlayPauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
