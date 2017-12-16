import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsBarComponent } from './bs-bar.component';

describe('NavbarComponent', () => {
  let component: BsBarComponent;
  let fixture: ComponentFixture<BsBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
