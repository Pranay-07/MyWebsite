import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColouselComponent } from './colousel.component';

describe('ColouselComponent', () => {
  let component: ColouselComponent;
  let fixture: ComponentFixture<ColouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
