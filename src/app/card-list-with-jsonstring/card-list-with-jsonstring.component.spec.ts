import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListWithJSONStringComponent } from './card-list-with-jsonstring.component';

describe('CardListWithJSONStringComponent', () => {
  let component: CardListWithJSONStringComponent;
  let fixture: ComponentFixture<CardListWithJSONStringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardListWithJSONStringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardListWithJSONStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
