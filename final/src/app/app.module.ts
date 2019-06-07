import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { Pagina1Component } from './components/pagina1/pagina1.component';
import { Pagina2Component } from './components/pagina2/pagina2.component';
import { VerificarJWTService } from './services/verificar-jwt/verificar-jwt.service';
import { Routes, RouterModule } from '@angular/router';
import { JwtModule } from './jwt/jwt.module';
import { WsService } from './services/ws/ws.service';
import { AutService } from './services/auth/auth.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RecaptchaModule } from 'angular-google-recaptcha';

const appRoutes: Routes = [
  {
    path: 'pagina1',
    canActivate: [VerificarJWTService],
    component: Pagina1Component
  },
  { path: 'pagina2', component: Pagina2Component, canActivate: [VerificarJWTService], },
  { path: 'login', component: LoginComponent },
  { path: '',   redirectTo: '/pagina1', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    LoginComponent,
    MenuComponent,
    Pagina1Component,
    Pagina2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
// tslint:disable-next-line: deprecation
    HttpModule,
    JwtModule,
    RouterModule.forRoot(appRoutes),
    RecaptchaModule.forRoot({
      siteKey: '6Lf-lqcUAAAAAAeKz7gAZM8NsleoUS_H05wGUSqe',
  }),
  ],
  providers: [
    WsService,
    AutService,
    VerificarJWTService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
