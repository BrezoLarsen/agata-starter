import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { IAnimal } from 'src/app/interfaces/animal.model';
import { IFilter } from 'src/app/interfaces/filters.model';
import { AnimalService } from 'src/app/services/animals.service';

@Component({
  selector: 'app-sponsor-page',
  templateUrl: './sponsor-page.component.html',
  styleUrls: ['./sponsor-page.component.scss'],
})
export class SponsorPageComponent implements OnInit {
  public animalsToShow: IAnimal[] = [];
  public animals: IAnimal[] = [];
  public showLoading = false;
  public isMenuVisible = false;

  private _filters: IFilter = {
    showInSponsorPage: true,
  };
  private _ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private animalsService: AnimalService) {}

  ngOnInit(): void {
    this.getAnimals();
  }

  ngOnDestroy(): void {
    this._ngUnsubscribe.next();
    this._ngUnsubscribe.complete();
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

  private removeOverflowHidden() {
    const htmlTag = document.getElementById('html');
    htmlTag.classList.remove('overflow-hidden');
  }

  private getAnimals(): void {
    this.showLoading = true;
    this.animalsService
      .getAnimalsByFilter(this._filters)
      .pipe(finalize(() => (this.showLoading = false)))
      .pipe(takeUntil(this._ngUnsubscribe))
      .subscribe((animals: IAnimal[]) => {
        this.animalsToShow = animals;
      });
  }
}
