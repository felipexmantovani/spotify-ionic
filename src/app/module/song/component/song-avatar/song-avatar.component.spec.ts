import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SongAvatarComponent } from './song-avatar.component';

describe('SongAvatarComponent', () => {
  let component: SongAvatarComponent;
  let fixture: ComponentFixture<SongAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SongAvatarComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SongAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
