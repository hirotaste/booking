import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorTailorModule } from '@ngneat/error-tailor';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ToastrModule } from 'ngx-toastr';

import { errorTailorConfig } from './core/resources/error-tailor-config';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { LayoutsModule } from './layouts/layouts.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ErrorTailorModule.forRoot(errorTailorConfig)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
