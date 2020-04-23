import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PlayerMinimizedComponent } from './player-minimized.component';

describe('PlayerMinimizedComponent', () => {
  let component: PlayerMinimizedComponent;
  let fixture: ComponentFixture<PlayerMinimizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerMinimizedComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerMinimizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
