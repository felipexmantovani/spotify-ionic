import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PlayerBtnShuffleComponent } from './player-btn-shuffle.component';

describe('PlayerBtnShuffleComponent', () => {
  let component: PlayerBtnShuffleComponent;
  let fixture: ComponentFixture<PlayerBtnShuffleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerBtnShuffleComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerBtnShuffleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
