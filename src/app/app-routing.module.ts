import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdoptionDetailComponent } from './pages/adoption-detail/adoption-detail.component';
import { AdoptionPageComponent } from './pages/adoption-page/adoption-page.component';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'inicio',
    component: IndexComponent,
  },
  {
    path: 'adopta',
    component: AdoptionPageComponent,
  },
  {
    path: 'detalle/:id',
    component: AdoptionDetailComponent,
  },
  //// { path: 'la-huronera', component: FerretlandComponent },
  //// { path: 'guarderia', component: KinderGardenComponent },
  // { path: 'nuestra-labor', component: OurWorkComponent },
  //// { path: 'colabora', component: ColaborateComponent }, hazte socio o padrino + donaciones + teaming
  //// { path: 'casa-de-acogida', component: ShelterHomeComponent },

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
