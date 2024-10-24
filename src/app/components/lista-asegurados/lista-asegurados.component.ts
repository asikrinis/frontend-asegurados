import { Component, OnInit } from '@angular/core';
import { Asegurado, AseguradoService } from '../../services/asegurado.service';

@Component({
  selector: 'app-lista-asegurados',
  templateUrl: './lista-asegurados.component.html',
  styleUrl: './lista-asegurados.component.scss'
})
export class ListaAseguradosComponent {
  asegurados: Asegurado[] = [];

  constructor(private aseguradoService: AseguradoService) { }

  ngOnInit(): void {
    this.aseguradoService.getAsegurados().subscribe(data => {
      this.asegurados = data;
    });
  }

}
