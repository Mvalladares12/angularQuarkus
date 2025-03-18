import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMunicipioComponent } from './home-municipio.component';

describe('HomeMunicipioComponent', () => {
  let component: HomeMunicipioComponent;
  let fixture: ComponentFixture<HomeMunicipioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeMunicipioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMunicipioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
