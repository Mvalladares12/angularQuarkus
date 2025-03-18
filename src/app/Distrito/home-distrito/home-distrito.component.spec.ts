import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDistritoComponent } from './home-distrito.component';

describe('HomeDistritoComponent', () => {
  let component: HomeDistritoComponent;
  let fixture: ComponentFixture<HomeDistritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeDistritoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeDistritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
