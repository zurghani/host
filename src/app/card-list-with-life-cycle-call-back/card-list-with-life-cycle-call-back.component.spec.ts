import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListWithLifeCycleCallBackComponent } from './card-list-with-life-cycle-call-back.component';

describe('CardListWithLifeCycleCallBackComponent', () => {
  let component: CardListWithLifeCycleCallBackComponent;
  let fixture: ComponentFixture<CardListWithLifeCycleCallBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardListWithLifeCycleCallBackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardListWithLifeCycleCallBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
