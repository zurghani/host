import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListMfeComponent } from './card-list-mfe.component';

describe('CardListMfeComponent', () => {
  let component: CardListMfeComponent;
  let fixture: ComponentFixture<CardListMfeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardListMfeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardListMfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
