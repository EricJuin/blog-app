import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { Observable } from 'rxjs';
import { Pagina } from 'src/app/models/pagina';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pagina',
  templateUrl: './list-pagina.component.html',
  styleUrls: ['./list-pagina.component.css']
})
export class ListPaginaComponent implements OnInit {

  paginas:Pagina[] = [];
  displayedColumns: string[] = ['titulo', 'creador', 'ultimaEdicion', 'publicada'];
  dataSource: MatTableDataSource<Pagina> = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(public _adminS: AdminService,public route:Router) { }

  ngOnInit() {
    this.getPaginas();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getPaginas() {
    this
    this._adminS.listPaginas().subscribe(
      docs =>{
        this.paginas = [];
        docs.map(
          doc => {
            let data = doc.payload.doc.data() as Pagina
            let id = doc.payload.doc.id
            this.paginas.push({id,...data} as Pagina)
            this.dataSource.data = this.paginas
          }
        )
      } 
    )
  }

  verPagina(pagina){
    if(pagina){
      this._adminS.pagina = pagina;
      this.route.navigate(['/admin/form-pagina']);
    }
  }

}
