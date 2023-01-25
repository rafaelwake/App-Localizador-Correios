import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { rastrearEncomendas } from 'correios-brasil';

@Injectable({
  providedIn: 'root',
})
export class CorreioService {
  constructor() {}

  localizarObjeto(codigoObjeto: Array<string>) {
    //const codRastreio = 'QM710153725BR';
    const response = rastrearEncomendas(codigoObjeto);
    console.log(response);
  }
}
