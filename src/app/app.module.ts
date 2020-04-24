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
import { TempTextoComponent } from './components/templates/temp-texto/temp-texto.component';
import { TempFotoComponent } from './components/templates/temp-foto/temp-foto.component';
import { TempEnlaceComponent } from './components/templates/temp-enlace/temp-enlace.component';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    PublicacionesComponent,
    ListMiniPublicacionesComponent,
    DetallePublicacionComponent,
    TempTextoComponent,
    TempFotoComponent,
    TempEnlaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule

  ],
  providers: [AdminService,FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
