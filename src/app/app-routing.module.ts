import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PublicacionesComponent } from './components/publicaciones/publicaciones.component';
import { DetallePublicacionComponent } from './components/detalle-publicacion/detalle-publicacion.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "publicaciones", component: PublicacionesComponent },
  { path: "publicaciones/:titulo", component: DetallePublicacionComponent },
  { path: "admin", loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
