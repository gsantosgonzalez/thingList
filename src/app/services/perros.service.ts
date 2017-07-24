import { Injectable } from '@angular/core';

export interface PerroRule{
  id:number;
  nombre:string;
  imagen:string;
  tipo:string;
  bio:string;
}

@Injectable()
export class PerrosService {

  perros:PerroRule[] = [
    {
      "id": 0,
      "nombre": "Perro 1",
      "imagen": "img-001.jpeg",
      "tipo": "test",
      "bio": "Lorem ipsum dolor sit amet"
    },
    {
      "id": 1,
      "nombre": "Perro 2",
      "imagen": "img-002.jpeg",
      "tipo": "test 2",
      "bio": "Lorem ipsum dolor sit amet"
    },
    {
      "id": 2,
      "nombre": "Perro 3",
      "imagen": "img-003.jpeg",
      "tipo": "test 3",
      "bio": "Lorem ipsum dolor sit amet"
    },
    {
      "id": 3,
      "nombre": "Perro 4",
      "imagen": "img-004.jpeg",
      "tipo": "test 4",
      "bio": "Lorem ipsum dolor sit amet"
    },
    {
      "id": 4,
      "nombre": "Perro 5",
      "imagen": "img-005.jpeg",
      "tipo": "test 5",
      "bio": "Lorem ipsum dolor sit amet"
    }
  ];

  obtenerPerros(){
    return this.perros;
  }

  obtenerPerro(id:number){
    let perroArr = [];
    for(let perro of this.perros){
      if(perro.id == id){
        perroArr.push(perro);
      }
    }
    return perroArr;
  }

  constructor() { }

}
