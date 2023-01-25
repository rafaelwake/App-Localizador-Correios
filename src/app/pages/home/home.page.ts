import { Component } from '@angular/core';
import { CorreioService } from 'src/app/services/correio.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private correioService: CorreioService) {}

  localizarObjeto(event: any) {
    console.log(event.detail.value);
    let codigo = event.detail.value;
    this.correioService.localizarObjeto(codigo);
    console.log('teste');
  }
}
