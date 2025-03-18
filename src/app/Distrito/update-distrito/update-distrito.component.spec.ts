import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDistritoComponent } from './update-distrito.component';

describe('UpdateDistritoComponent', () => {
  let component: UpdateDistritoComponent;
  let fixture: ComponentFixture<UpdateDistritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateDistritoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDistritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
