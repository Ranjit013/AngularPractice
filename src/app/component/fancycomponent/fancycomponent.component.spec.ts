import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FancycomponentComponent } from './fancycomponent.component';

describe('FancycomponentComponent', () => {
  let component: FancycomponentComponent;
  let fixture: ComponentFixture<FancycomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FancycomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FancycomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
