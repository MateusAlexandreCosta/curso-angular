import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponet } from './first-componet';

describe('FirstComponet', () => {
  let component: FirstComponet;
  let fixture: ComponentFixture<FirstComponet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstComponet],
    }).compileComponents();

    fixture = TestBed.createComponent(FirstComponet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
