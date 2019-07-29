import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RECAPTCHA_LANGUAGE } from 'ng-recaptcha';
import { RecaptchaModule } from 'ng-recaptcha';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioAltaComponent } from './componentes/formulario-alta/formulario-alta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './componentes/login/login.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { Routes, RouterModule } from '@angular/router';
import { ErrorLoginComponent } from './componentes/error-login/error-login.component';
import { EmailSesionComponent } from './componentes/email-sesion/email-sesion.component';
import { PedirTurnoComponent } from './componentes/pedir-turno/pedir-turno.component';
import { ListarTurnoComponent } from './componentes/listar-turno/listar-turno.component';
import { AuthService } from './servicios/auth.service';
import { AuthGuard } from './auth.guard';
import { MenuComponent } from './componentes/menu/menu.component';
import { BotonMenuComponent } from './componentes/boton-menu/boton-menu.component';
import { ChatService } from './servicios/chat.service';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormularioChatComponent } from './componentes/formulario-chat/formulario-chat.component';
import { MensajeComponent } from './componentes/mensaje/mensaje.component';
import { SalaChatComponent } from './componentes/sala-chat/sala-chat.component';
import { EncuestaComponent } from './componentes/encuesta/encuesta.component';
import { CancelarTurnoComponent } from './componentes/cancelar-turno/cancelar-turno.component';
import { ListadoConsultoriosComponent } from './componentes/listado-consultorios/listado-consultorios.component';
import { HistoriaClinicaComponent } from './componentes/historia-clinica/historia-clinica.component';
import { FormularioHistoriaComponent } from './componentes/formulario-historia/formulario-historia.component';
import { ColorDirective } from './color.directive';
import { FiltroTurnosComponent } from './componentes/filtro-turnos/filtro-turnos.component';
import { FechaTurnosComponent } from './componentes/fecha-turnos/fecha-turnos.component';
import { AtenderPacienteComponent } from './componentes/atender-paciente/atender-paciente.component';


const appRoutes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  { path: '',   redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'formularioTurno', component: PedirTurnoComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'formulario-usuario',  component: FormularioAltaComponent},
  { path: 'errorLogin',  component: ErrorLoginComponent},
  { path: 'listaTurno',  component: ListarTurnoComponent, canActivate: [AuthGuard]},
  { path: 'menu',  component: MenuComponent, canActivate: [AuthGuard]},
  { path: 'chat',  component: SalaChatComponent, canActivate:[AuthGuard]},
  { path: 'listaConsultorios',  component: ListadoConsultoriosComponent, canActivate:[AuthGuard]},
  { path: 'listaTurnos',  component: FiltroTurnosComponent, canActivate:[AuthGuard]},
  { path: 'historiaClinica',  component: FormularioHistoriaComponent, canActivate:[AuthGuard]}
  //{ path: '**', component: ErrorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FormularioAltaComponent,
    LoginComponent,
    InicioComponent,
    ErrorLoginComponent,
    EmailSesionComponent,
    PedirTurnoComponent,
    ListarTurnoComponent,
    MenuComponent,
    BotonMenuComponent,
    FormularioChatComponent,
    MensajeComponent,
    SalaChatComponent,
    EncuestaComponent,
    CancelarTurnoComponent,
    ListadoConsultoriosComponent,
    HistoriaClinicaComponent,
    FormularioHistoriaComponent,
    ColorDirective,
    FiltroTurnosComponent,
    FechaTurnosComponent,
    AtenderPacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    RecaptchaModule.forRoot()   
  ],
  providers: [AuthService, ChatService, {provide: RECAPTCHA_LANGUAGE, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
