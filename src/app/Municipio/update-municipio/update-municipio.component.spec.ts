import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMunicipioComponent } from './update-municipio.component';

describe('UpdateMunicipioComponent', () => {
  let component: UpdateMunicipioComponent;
  let fixture: ComponentFixture<UpdateMunicipioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateMunicipioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMunicipioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
