import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenevolesDetailComponent } from './benevoles-detail.component';

describe('BenevolesDetailComponent', () => {
  let component: BenevolesDetailComponent;
  let fixture: ComponentFixture<BenevolesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenevolesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenevolesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
