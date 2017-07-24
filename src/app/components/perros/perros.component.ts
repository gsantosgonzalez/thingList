import { Component, OnInit } from '@angular/core';

// Servicios
import { PerrosService, PerroRule } from '../../services/perros.service';

@Component({
  selector: 'app-right-content',
  templateUrl: './perros.component.html',
  styleUrls: ['./perros.component.css']
})
export class PerrosComponent implements OnInit {

  perros:PerroRule[] = [];
  constructor(private _perros:PerrosService) { }

  ngOnInit() {
    this.perros = this._perros.obtenerPerros();
  }

}
