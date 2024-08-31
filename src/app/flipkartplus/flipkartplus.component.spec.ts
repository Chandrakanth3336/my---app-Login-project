import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipkartplusComponent } from './flipkartplus.component';

describe('FlipkartplusComponent', () => {
  let component: FlipkartplusComponent;
  let fixture: ComponentFixture<FlipkartplusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipkartplusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipkartplusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
