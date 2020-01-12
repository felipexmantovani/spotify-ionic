import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PlayerBtnLikeComponent } from './player-btn-like.component';

describe('PlayerBtnLikeComponent', () => {
  let component: PlayerBtnLikeComponent;
  let fixture: ComponentFixture<PlayerBtnLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerBtnLikeComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerBtnLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
