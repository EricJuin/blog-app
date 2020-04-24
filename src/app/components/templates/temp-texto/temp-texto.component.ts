import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-temp-texto',
  templateUrl: './temp-texto.component.html',
  styleUrls: ['./temp-texto.component.css']
})
export class TempTextoComponent implements OnInit {

  @Input() contenido:string;

  constructor() { }

  ngOnInit(): void {
  }

}
