import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-temp-enlace-pagina',
  templateUrl: './temp-enlace-pagina.component.html',
  styleUrls: ['./temp-enlace-pagina.component.css']
})
export class TempEnlacePaginaComponent implements OnInit {

  @Input() contenido:string;

  constructor() { }

  ngOnInit(): void {
  }

}
