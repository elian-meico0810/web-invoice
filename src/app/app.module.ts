import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

import { HttpClientModule, provideHttpClient, withInterceptors } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MsalModule, MsalRedirectComponent } from "@azure/msal-angular";
import { NgxSpinnerModule } from "ngx-spinner";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MsalGuardConfig, MsalInstance, MsalInterceptorConfig } from "./app.config";
import { CoreModule } from "./core/core.module";
import { httpRequestAuthorizationInterceptor } from "./core/interceptors/http-request-authorization.interceptor";
import { httpRequestHandlerErrorsInterceptor } from "./core/interceptors/http-request-handler-api-errors.interceptor";
import { httpRequestLoadingInterceptor } from "./core/interceptors/http-request-loading.interceptor";
import { SeguridadModule } from "./modules/seguridad/seguridad.module";
import { SharedModule } from "./shared/shared.module";
import { InfoInvoiceRoutingModule } from "./modules/infoInvoice/infoInvoice-routing.module";
import { WebInfoInvoiceComponent } from "./modules/infoInvoice/pages/webInfoInvoice.component";

@NgModule({
  declarations: [AppComponent, WebInfoInvoiceComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SeguridadModule,
    InfoInvoiceRoutingModule,
    CoreModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    NgxSpinnerModule.forRoot({ type: 'ball-fussion' }),
    MsalModule.forRoot(
      MsalInstance(),
      MsalGuardConfig(),
      MsalInterceptorConfig()
    )
  ],
  providers: [
    provideHttpClient(
      withInterceptors([
        httpRequestAuthorizationInterceptor,
        httpRequestLoadingInterceptor,
        httpRequestHandlerErrorsInterceptor
      ])
    )
  ],
  bootstrap: [AppComponent, MsalRedirectComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
