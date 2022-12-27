import { Component, Input, OnInit } from '@angular/core';
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
    // return SETTINGS.ANIMALS_IMAGE_PATH + this.event.principalImageFileName;
    return '../../../../assets/img/main3.jpg';
  }
}
