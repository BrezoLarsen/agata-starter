import { Component, Input, OnInit } from '@angular/core';
import { SETTINGS } from 'src/app/config/settings';
import { IEvent } from 'src/app/interfaces/event.model';

@Component({
  selector: 'app-event-box',
  templateUrl: './event-box.component.html',
  styleUrls: ['./event-box.component.scss'],
})
export class EventBoxComponent implements OnInit {
  @Input() event: IEvent;

  constructor() {}

  ngOnInit(): void {}

  getEventImage(): string {
    if (!this.event.hasImage) {
      return '';
    }
    return `${SETTINGS.EVENTS_IMAGE_PATH}event__${this.event.id}.jpg`;
  }
}
