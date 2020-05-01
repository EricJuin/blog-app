import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-temp-foto-pagina',
  templateUrl: './temp-foto-pagina.component.html',
  styleUrls: ['./temp-foto-pagina.component.css']
})
export class TempFotoPaginaComponent implements OnInit {

  @Input() contenido:string;
  constructor() { }

  ngOnInit(): void {
  }

}
