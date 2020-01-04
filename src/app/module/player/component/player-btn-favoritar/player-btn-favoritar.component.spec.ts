import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PlayerBtnFavoritarComponent } from './player-btn-favoritar.component';

describe('PlayerBtnFavoritarComponent', () => {
  let component: PlayerBtnFavoritarComponent;
  let fixture: ComponentFixture<PlayerBtnFavoritarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerBtnFavoritarComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerBtnFavoritarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
