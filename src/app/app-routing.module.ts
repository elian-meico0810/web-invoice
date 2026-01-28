import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'seguridad'
  },
    {
    path: 'info-invoice',
    loadChildren: () =>
      import('./modules/infoInvoice/infoInvoice-routing.module').then((m) => m.InfoInvoiceRoutingModule)
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
