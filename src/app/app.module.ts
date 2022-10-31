import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AdoptionDetailComponent } from './pages/adoption-detail/adoption-detail.component';
import { AdoptionListComponent } from './pages/adoption-list/adoption-list.component';
import { IndexComponent } from './pages/index/index.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AdoptionDetailComponent,
    AdoptionListComponent,
    IndexComponent,
    CardComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, RouterModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
