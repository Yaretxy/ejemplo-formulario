import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto20';
  valor1=0;
  valor2=0;
  resultado=0;

  sumar(){
    this.resultado = this.valor1 + this.valor2;
  }
}
