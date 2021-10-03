import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfirmiereDetailComponent } from './infirmiere-detail.component';

describe('InfirmiereDetailComponent', () => {
  let component: InfirmiereDetailComponent;
  let fixture: ComponentFixture<InfirmiereDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfirmiereDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfirmiereDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
