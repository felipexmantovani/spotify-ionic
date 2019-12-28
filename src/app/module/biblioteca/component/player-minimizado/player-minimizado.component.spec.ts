import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PlayerMinimizadoComponent } from './player-minimizado.component';

describe('PlayerMinimizadoComponent', () => {
  let component: PlayerMinimizadoComponent;
  let fixture: ComponentFixture<PlayerMinimizadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerMinimizadoComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerMinimizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
