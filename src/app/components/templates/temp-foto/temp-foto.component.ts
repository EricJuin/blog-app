import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-temp-foto-pagina',
  templateUrl: './temp-foto.component.html',
  styleUrls: ['./temp-foto.component.css']
})
export class TempFotoComponent implements OnInit {

  @Input() contenido:string;
  constructor() { }

  ngOnInit(): void {
  }

}
