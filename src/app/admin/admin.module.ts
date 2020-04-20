import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FormPaginaComponent } from './components/form-pagina/form-pagina.component';
import { MatButtonModule } from '@angular/material/button';
import { FotoComponent } from './components/foto/foto.component';
import { TextoComponent } from './components/texto/texto.component';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatSelectModule} from '@angular/material/select';
import { ConfigComponent } from './components/config/config.component';
import { FormEtiquetaComponent } from './components/form-etiqueta/form-etiqueta.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { TempTextComponent } from './components/templates/temp-text/temp-text.component';
import { TempEnlaceComponent } from './components/templates/temp-enlace/temp-enlace.component';
import { TempFotoComponent } from './components/templates/temp-foto/temp-foto.component';
import { TempVideoComponent } from './components/templates/temp-video/temp-video.component';
import { TempSaltoLineaComponent } from './components/templates/temp-salto-linea/temp-salto-linea.component';
import { TempSubtituloComponent } from './components/templates/temp-subtitulo/temp-subtitulo.component';
import { MultimediaComponent } from './components/multimedia/multimedia.component';
import { FormMultimediaComponent } from './components/form-multimedia/form-multimedia.component';
import { NgDropFilesDirective } from '../directives/ng-drop-files.directive';
import { ListMultimediaComponent } from './components/list-multimedia/list-multimedia.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogMultimediaComponent } from './components/dialog-multimedia/dialog-multimedia.component';


@NgModule({
  declarations: [
    AdminComponent,
    FormPaginaComponent,
    FotoComponent,
    TextoComponent,
    ConfigComponent,
    FormEtiquetaComponent,
    TempTextComponent,
    TempEnlaceComponent,
    TempFotoComponent,
    TempVideoComponent,
    TempSaltoLineaComponent,
    TempSubtituloComponent,
    MultimediaComponent,
    FormMultimediaComponent,
    NgDropFilesDirective,
    ListMultimediaComponent,
    DialogMultimediaComponent
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatCardModule,
    DragDropModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule
    
  ]
})
export class AdminModule { }
