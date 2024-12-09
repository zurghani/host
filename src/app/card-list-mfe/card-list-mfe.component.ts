import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import React from 'react';
import ReactDOM from 'react-dom/client';

declare const window: any;

// Import the bundled React component
const { CardList } = await window.mfeReact.get('./CardList');

@Component({
  selector: 'app-card-list-mfe',
  imports: [],
  templateUrl: './card-list-mfe.component.html',
  styleUrl: './card-list-mfe.component.css',
  standalone: true, // Standalone component

})
export class CardListMfeComponent implements OnInit, OnDestroy {
  @Input() message: string = '';
  private containerId = 'react-container';

  constructor(private hostRef: ElementRef) { }

  ngOnInit() {
    const cardData = [
      { title: "Card 1", description: "Description for card 1" },
      { title: "Card 2", description: "Description for card 2" },
      { title: "Card 3", description: "Description for card 3" },
      { title: "Card 4", description: "Description for card 4" },
      { title: "Card 5", description: "Description for card 5" },
      { title: "Card 6", description: "Description for card 6" },
      { title: "Card 7", description: "Description for card 7" },
      { title: "Card 8", description: "Description for card 8" },
      { title: "Card 9", description: "Description for card 9" },
    ];
    const container = this.hostRef.nativeElement.querySelector(`#${this.containerId}`);
    const root = ReactDOM.createRoot(container);
    // root.render(        
    //   <CardList  cards={cardData} />)
    ;
  }

  ngOnDestroy() {
    const container = this.hostRef.nativeElement.querySelector(`#${this.containerId}`);
    const root = ReactDOM.createRoot(container);
    root.unmount();
  }
}
