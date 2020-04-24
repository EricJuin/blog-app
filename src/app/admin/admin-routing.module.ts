import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { FormPaginaComponent } from './components/form-pagina/form-pagina.component';
import { ConfigComponent } from './components/config/config.component';
import { MultimediaComponent } from './components/multimedia/multimedia.component';
import { ListPaginaComponent } from './components/list-pagina/list-pagina.component';


const routes: Routes = [
  {
    path: "", component: AdminComponent,
    children:[
      {path:"",component:ListPaginaComponent},
      {path:"form-pagina",component:FormPaginaComponent},
      {path:"config",component:ConfigComponent},
      {path:"multimedia",component:MultimediaComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
