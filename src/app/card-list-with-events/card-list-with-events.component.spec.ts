import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListWithEventsComponent } from './card-list-with-events.component';

describe('CardListWithEventsComponent', () => {
  let component: CardListWithEventsComponent;
  let fixture: ComponentFixture<CardListWithEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardListWithEventsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardListWithEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
