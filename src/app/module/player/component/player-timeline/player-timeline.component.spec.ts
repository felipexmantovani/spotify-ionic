import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PlayerTimelineComponent } from './player-timeline.component';

describe('PlayerTimelineComponent', () => {
  let component: PlayerTimelineComponent;
  let fixture: ComponentFixture<PlayerTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerTimelineComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
