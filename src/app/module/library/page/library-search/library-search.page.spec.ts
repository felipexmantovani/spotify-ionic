import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { LibrarySearchPage } from './library-search.page';

describe('LibrarySearchPage', () => {
  let component: LibrarySearchPage;
  let fixture: ComponentFixture<LibrarySearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LibrarySearchPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LibrarySearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
