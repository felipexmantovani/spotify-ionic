import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PlayerMaximizadoComponent } from './player-maximizado.component';

describe('PlayerMaximizadoComponent', () => {
  let component: PlayerMaximizadoComponent;
  let fixture: ComponentFixture<PlayerMaximizadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerMaximizadoComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerMaximizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
