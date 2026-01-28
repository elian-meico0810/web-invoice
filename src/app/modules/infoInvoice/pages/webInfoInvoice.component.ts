import { Component, Inject } from '@angular/core';
import { MSAL_GUARD_CONFIG, MsalGuardConfiguration, MsalService } from '@azure/msal-angular';
import { RedirectRequest } from "@azure/msal-browser";

@Component({
  selector: 'app-webInfoInvoice',
  templateUrl: './webInfoInvoice.component.html',
  styleUrl: './webInfoInvoice.component.css'
})
export class WebInfoInvoiceComponent {
  /**WebInfoInvoice
   * Metodo constructor del modelo
   * @param _msalService Servicio de autenticación de microsoft
   * @param _msalGuardConfig Configuracion de Guard
   */
  constructor(
    private _msalService: MsalService,
    @Inject(MSAL_GUARD_CONFIG) private _msalGuardConfig: MsalGuardConfiguration
  ) { }

 
}
