import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  public isMenuVisible = false;

  constructor() {}

  ngOnInit(): void {}

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
}
