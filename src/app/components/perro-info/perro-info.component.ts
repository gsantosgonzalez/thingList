import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { PerrosService } from '../../services/perros.service';

@Component({
  selector: 'app-right-content',
  templateUrl: './perro-info.component.html',
  styles: []
})
export class PerroInfoComponent implements OnInit {

  perro:any[] = [];

  constructor(private ParamsRouter:ActivatedRoute, private perroServicio:PerrosService) { 
    this.ParamsRouter.params.subscribe( params => {
      this.perro = this.perroServicio.obtenerPerro(params['id']);
    })
  }

  ngOnInit() {
  }

}
