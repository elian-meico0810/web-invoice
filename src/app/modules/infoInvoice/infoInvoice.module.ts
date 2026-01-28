import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CoreModule } from "../../core/core.module";
import { SharedModule } from "../../shared/shared.module";
import { InfoInvoiceComponent } from './infoInvoice.component';
import { InfoInvoiceRoutingModule } from "./infoInvoice-routing.module";

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    InfoInvoiceRoutingModule
  ],
  exports: []
})
export class InfoInvoiceModule { }
