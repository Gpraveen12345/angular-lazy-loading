import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeldialogeComponent } from './modeldialoge.component';

describe('ModeldialogeComponent', () => {
  let component: ModeldialogeComponent;
  let fixture: ComponentFixture<ModeldialogeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeldialogeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeldialogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
