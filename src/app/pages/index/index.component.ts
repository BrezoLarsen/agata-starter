import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IAnimal } from 'src/app/interfaces/animal.model';
import { IFilter } from 'src/app/interfaces/filters.model';
import { AnimalService } from 'src/app/services/animals.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  public isMenuVisible = false;

  public animalsToShow: IAnimal[] = [];
  private _filters: IFilter = {
    showInAdoptionPage: true,
  };

  private _ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private animalsService: AnimalService) {}

  ngOnInit(): void {
    //this.getAnimals();
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

  shuffle(array): IAnimal[] {
    return array.sort(() => Math.random() - 0.5);
  }

  private getAnimals(): void {
    this.animalsService
      .getAnimalsByFilter(this._filters)
      .pipe()
      .pipe(takeUntil(this._ngUnsubscribe))
      .subscribe((data: IAnimal[]) => {
        this.animalsToShow = this.shuffle(data).splice(0, 3);
      });
  }

  private removeOverflowHidden() {
    const htmlTag = document.getElementById('html');
    htmlTag.classList.remove('overflow-hidden');
  }
}
