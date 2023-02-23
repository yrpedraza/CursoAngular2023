import { Component, OnInit } from '@angular/core';

interface Tarjeta{
   titulo:string;
   subtitulo:string;
   nro?:number; /* cuando le ponemos el ? destras del nombre de la propiedad significa que dicha proipiedad puede tener valor nulo */
  }


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  title = 'learnAngular';
  public ArregloTarjetas: Tarjeta[]=[];

  ngOnInit(): void { /* este metodo se ejecuta cuando se inicializa esta pa gina html*/

       this.ArregloTarjetas=[
        {titulo:'Video 1', subtitulo: 'Subtitulo video 1'},
        {titulo:'Video 2', subtitulo: 'Subtitulo video 2'},
        {titulo:'Video 3', subtitulo: 'Subtitulo video 3'}
       ]
  }
}
