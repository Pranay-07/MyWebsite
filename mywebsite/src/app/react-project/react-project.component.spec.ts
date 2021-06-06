import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactProjectComponent } from './react-project.component';

describe('ReactProjectComponent', () => {
  let component: ReactProjectComponent;
  let fixture: ComponentFixture<ReactProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
