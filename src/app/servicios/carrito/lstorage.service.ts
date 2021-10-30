import { Injectable } from '@angular/core';

import { CarritoInterface } from 'src/app/interfaces/carrito/carrito-interface';
import { ProductoInterface } from 'src/app/interfaces/productos/producto-interface';

@Injectable({
  providedIn: 'root'
})
export class LstorageService {

  carrito: CarritoInterface[] = []; 

  constructor() { }

  getCarrito(){
    return this.carrito;
  }

  addCarrito(carro: CarritoInterface){
  
    this.carrito.push( carro);

    var costo=0;
    for(var i=0; i < this.carrito.length; i++){
      costo += this.carrito[i].subtotal;
    }

    var canasta = [{
      "cantidad": this.carrito.length,
      "productos": this.carrito,
      "total": costo,
    }];

    localStorage.setItem('carrito', JSON.stringify(canasta));
    console.log("LISTA: " + canasta);

  }

}
