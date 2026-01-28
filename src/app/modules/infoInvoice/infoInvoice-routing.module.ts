import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebInfoInvoiceComponent } from './pages/webInfoInvoice.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'details'
  },
  {
    path: 'details',
    component: WebInfoInvoiceComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class InfoInvoiceRoutingModule { }
