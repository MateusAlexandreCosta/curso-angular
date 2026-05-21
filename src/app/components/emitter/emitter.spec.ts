import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Emitter } from './emitter';

describe('Emitter', () => {
  let component: Emitter;
  let fixture: ComponentFixture<Emitter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Emitter],
    }).compileComponents();

    fixture = TestBed.createComponent(Emitter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
