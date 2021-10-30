import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { BusquedaProductoServicioService } from 'src/app/servicios/productos/busqueda-producto-servicio.service';

import { ProductoInterface } from 'src/app/interfaces/productos/producto-interface';

import { BusquedaProductoModel } from 'src/app/clases/productos/busqueda-producto-model';

import {render} from 'creditcardpayments/creditCardPayments';

//import {RastreoProductoService} from '../../servicios/rastreo/rastreo-producto.service';

import { CarritoInterface } from 'src/app/interfaces/carrito/carrito-interface';

import { LstorageService } from 'src/app/servicios/carrito/lstorage.service';

import { TotalesInterface } from 'src/app/interfaces/carrito/totales-interface';

@Component({
  selector: 'app-pagina-compra-productos',
  templateUrl: './pagina-compra-productos.component.html',
  styleUrls: ['./pagina-compra-productos.component.css']
})
export class PaginaCompraProductosComponent implements OnInit {

  registro: TotalesInterface = {
    "quantity": 0,
    "subtotal": 0,
    "envio": 0,
    "total": 0
  };
  bskModel = new BusquedaProductoModel('');
  carga: boolean = false;
  carrito: CarritoInterface[] = [];


  constructor(
    private busquedaservicio:BusquedaProductoServicioService,
    private lstorageservicio: LstorageService
    //private rastreo:RastreoProductoService
  ) {
    
  }

  ngOnInit(): void {
    this.carrito = this.lstorageservicio.getCarrito();
    console.log(this.carrito);
    this.registro.quantity = 0;
    this.registro.subtotal = 0;
    this.registro.envio = 0;
    for(var i=0; i < this.carrito.length; i++){
      this.registro.subtotal += this.carrito[i].subtotal;
      this.registro.quantity += 1;
    }
    this.registro.total = this.registro.subtotal + this.registro.envio;
    this.pagoPaypal(String(this.registro.total));
  }

  pagoPaypal = (price:any)=>{
    render({
      id:"#paypal",
      currency:"MXN",
      value: price,
      onApprove:(details)=>{
        console.log(details);
        console.log("aprovado");
      }
    })
  }

  /*sendQuery = () => {
    this.busquedaservicio.busqueda(this.bskModel.q).then( (response) => {
      console.log(response);
      response.price = Math.round((((response.code/1000000000000) + 50) + Number.EPSILON) * 100) / 100;
      response.price_f = '$ ' + this.numberWithCommas(response.price) + ' MXN.';
      this.registro =  response;
      console.log(response);
      this.carga = true;
    }, (error) => {
      alert("error: " + error.statusText );
    })

  }*/

  numberWithCommas(x: number):string{
      return x.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

}
