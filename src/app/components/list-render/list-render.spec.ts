import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRender } from './list-render';

describe('ListRender', () => {
  let component: ListRender;
  let fixture: ComponentFixture<ListRender>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListRender],
    }).compileComponents();

    fixture = TestBed.createComponent(ListRender);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
