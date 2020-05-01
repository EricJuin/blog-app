import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-temp-text-pagina',
  templateUrl: './temp-text-pagina.component.html',
  styleUrls: ['./temp-text-pagina.component.css']
})
export class TempTextPaginaComponent implements OnInit {

  @Input() contenido:string;

  constructor() { }

  ngOnInit(): void {
  }

}
