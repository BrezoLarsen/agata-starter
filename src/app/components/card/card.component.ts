import { Component, Input, OnInit } from '@angular/core';
import { IAnimal } from 'src/app/interfaces/animal.model';
import { Router } from '@angular/router';
import { SETTINGS } from 'src/app/config/settings';
import { GenderLabels } from 'src/app/interfaces/genders';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() animal: IAnimal;
  public genderLabels = GenderLabels;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToDetail(id: string) {
    this.router.navigate([`detalle/${Number(id)}`]);
  }

  getAnimalImage(): string {
    return SETTINGS.ANIMALS_IMAGE_PATH + this.animal.principalImageFileName;
  }
}
