import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IotProjectsComponent } from './iot-projects.component';

describe('IotProjectsComponent', () => {
  let component: IotProjectsComponent;
  let fixture: ComponentFixture<IotProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IotProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IotProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
