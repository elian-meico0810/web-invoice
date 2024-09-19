import { Component, Inject } from '@angular/core';
import { MSAL_GUARD_CONFIG, MsalGuardConfiguration, MsalService } from '@azure/msal-angular';
import { RedirectRequest } from "@azure/msal-browser";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  /**
   * Metodo constructor del modelo
   * @param _msalService Servicio de autenticación de microsoft
   * @param _msalGuardConfig Configuracion de Guard
   */
  constructor(
    private _msalService: MsalService,
    @Inject(MSAL_GUARD_CONFIG) private _msalGuardConfig: MsalGuardConfiguration
  ) { }

  /**
   * Metodo para realizar la autenticacion usando el servicio de microsoft
   */
  public loginMicrosoft(): void {
    if (this._msalGuardConfig.authRequest) {
      this._msalService.loginRedirect({ ...this._msalGuardConfig.authRequest } as RedirectRequest);
    } else {
      this._msalService.loginRedirect();
    }
  }

  /**
   * Metodo para realizar el cierre de sesion usando el servicio de microsoft
   */
  public logoutMicrosoft(): void {
    this._msalService.logoutRedirect();
  }
}
