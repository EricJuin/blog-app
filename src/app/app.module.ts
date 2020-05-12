import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AdminService } from './services/admin.service';
import { FileService } from './services/file.service';
import { PublicacionesComponent } from './components/publicaciones/publicaciones.component';
import { ListMiniPublicacionesComponent } from './components/list-mini-publicaciones/list-mini-publicaciones.component';
import { DetallePublicacionComponent } from './components/detalle-publicacion/detalle-publicacion.component';
import { TempTextPaginaComponent } from './components/templates/temp-texto-pagina/temp-text-pagina.component';
import { TempFotoPaginaComponent } from './components/templates/temp-foto-pagina/temp-foto-pagina.component';
import { TempEnlacePaginaComponent } from './components/templates/temp-enlace-pagina/temp-enlace-pagina.component';
import { LogComponent } from './components/log/log.component';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { HeaderComponent } from './components/header/header.component'
import { MatMenuModule } from '@angular/material/menu';
import { FormComentarioComponent, BottomSheetFormComentario } from './components/form-comentario/form-comentario.component';
import { ListComentarioComponent } from './components/list-comentario/list-comentario.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    PublicacionesComponent,
    ListMiniPublicacionesComponent,
    DetallePublicacionComponent,
    TempTextPaginaComponent,
    TempFotoPaginaComponent,
    TempEnlacePaginaComponent,
    LogComponent,
    HeaderComponent,
    FormComentarioComponent,
    ListComentarioComponent,
    BottomSheetFormComentario
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    NgxAuthFirebaseUIModule.forRoot(environment.firebase,
      () => "BlogApp",
      {
        authGuardFallbackURL: '',
        authGuardLoggedInURL: '',
        guardProtectedRoutesUntilEmailIsVerified: true,
        enableEmailVerification: true,
      }),
    MatPasswordStrengthModule.forRoot(),
    MatMenuModule,
    MatBottomSheetModule,
    ReactiveFormsModule
  ],
  providers: [AdminService, FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
