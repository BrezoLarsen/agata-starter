import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { SETTINGS } from 'src/app/config/settings';
import { IFilter } from 'src/app/interfaces/filters.model';
import { GenderLabels } from 'src/app/interfaces/genders';
import { AnimalService } from 'src/app/services/animals.service';
import { IAnimal } from '../../interfaces/animal.model';

@Component({
  selector: 'app-adoption-detail',
  templateUrl: './adoption-detail.component.html',
  styleUrls: ['./adoption-detail.component.scss'],
})
export class AdoptionDetailComponent implements OnInit {
  public animal: IAnimal;
  public showLoading = false;
  public isMenuVisible = false;
  public genderLabels = GenderLabels;

  private _filters: IFilter = {};
  private _param: string;
  private _ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private animalsService: AnimalService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this._param = this.activatedRoute.snapshot.paramMap.get('id');
    this._filters.animalId = Number(this._param);
    this.getAnimal();
  }

  ngOnDestroy(): void {
    this._ngUnsubscribe.next();
    this._ngUnsubscribe.complete();
  }

  goBack(): void {
    this.location.back();
  }

  presentMenu(e) {
    const htmlTag = document.getElementById('html');
    this.isMenuVisible = !this.isMenuVisible;
    if (this.isMenuVisible) {
      document.body.classList.add('overflow-hidden');
      htmlTag.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
      this.removeOverflowHidden();
    }
  }

  closeMenu() {
    document.body.classList.remove('overflow-hidden');
    this.isMenuVisible = false;
    this.removeOverflowHidden();
  }

  getAnimalImage(): string {
    return SETTINGS.ANIMALS_IMAGE_PATH + this.animal.imageUrl;
  }

  private removeOverflowHidden() {
    const htmlTag = document.getElementById('html');
    htmlTag.classList.remove('overflow-hidden');
  }

  private getAnimal(): void {
    this.showLoading = true;
    this.animalsService
      .getAnimalsByFilter(this._filters)
      .pipe(finalize(() => (this.showLoading = false)))
      .pipe(takeUntil(this._ngUnsubscribe))
      .subscribe((animals: IAnimal[]) => {
        this.animal = animals[0];
      });
  }
}
