import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { LibraryHomePage } from './library-home.page';

describe('LibraryHomePage', () => {
  let component: LibraryHomePage;
  let fixture: ComponentFixture<LibraryHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LibraryHomePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LibraryHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
