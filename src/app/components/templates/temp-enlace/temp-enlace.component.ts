import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-temp-enlace',
  templateUrl: './temp-enlace.component.html',
  styleUrls: ['./temp-enlace.component.css']
})
export class TempEnlaceComponent implements OnInit {

  @Input() contenido:string;

  constructor() { }

  ngOnInit(): void {
  }

}
