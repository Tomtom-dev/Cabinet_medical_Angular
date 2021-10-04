import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfirmiereModifyComponent } from './infirmiere-modify.component';

describe('InfirmiereModifyComponent', () => {
  let component: InfirmiereModifyComponent;
  let fixture: ComponentFixture<InfirmiereModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfirmiereModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfirmiereModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
