import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerroInfoComponent } from './perro-info.component';

describe('PerroInfoComponent', () => {
  let component: PerroInfoComponent;
  let fixture: ComponentFixture<PerroInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerroInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerroInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
