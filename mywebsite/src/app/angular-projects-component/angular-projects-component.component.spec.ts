import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularProjectsComponentComponent } from './angular-projects-component.component';

describe('AngularProjectsComponentComponent', () => {
  let component: AngularProjectsComponentComponent;
  let fixture: ComponentFixture<AngularProjectsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularProjectsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularProjectsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
