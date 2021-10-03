import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfirmiereCardComponent } from './infirmiere-card.component';

describe('InfirmiereCardComponent', () => {
  let component: InfirmiereCardComponent;
  let fixture: ComponentFixture<InfirmiereCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfirmiereCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfirmiereCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
