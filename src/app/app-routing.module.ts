import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutUsPageComponent } from './pages/about-us/about-us-page.component';
import { AdoptionDetailComponent } from './pages/adoption-detail/adoption-detail.component';
import { AdoptionListComponent } from './pages/adoption-list/adoption-list.component';
import { IndexComponent } from './pages/index/index.component';
import { AdoptedPageComponent } from './pages/adopted-page/adopted-page.component';
import { SponsorPageComponent } from './pages/sponsor/sponsor-page.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'inicio',
    component: IndexComponent,
    title: 'Inicio',
  },
  {
    path: 'adopta',
    component: AdoptionListComponent,
    title: 'Adopta',
  },
  {
    path: 'detalle/:id',
    component: AdoptionDetailComponent,
    title: 'Detalle',
  },
  {
    path: 'sobre-nosotros',
    component: AboutUsPageComponent,
    title: 'Nosotr@s',
  },
  {
    path: 'adoptados',
    component: AdoptedPageComponent,
    title: 'Adoptados',
  },
  {
    path: 'apadrina',
    component: SponsorPageComponent,
    title: 'Apadrina/amadrina',
  },
  { path: '**', redirectTo: 'inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      relativeLinkResolution: 'legacy',
      scrollPositionRestoration: 'enabled',
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
