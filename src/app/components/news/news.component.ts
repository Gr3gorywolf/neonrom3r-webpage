import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor() { }
  data = [
    {
      title: 'Versión 1.0: Versión inicial de la aplicación',
      image: 'assets/imgs/v1-0.png',
      text: `En esta versión se incluyen todos los
    elementos básicos previamente descritos en la sección de funciones`,

    },
    {
      title: 'Caida de emulator.games :,(',
      image: 'assets/imgs/v1-0.png',
      text: `Lastimosamente emulators.games se ha protegido con cloudflare 
        por lo cual es basicamente imposible obtener informacion de los roms y mucho menos descargarlos. 
        Pero se esta pensando una forma para buscar roms de otra forma y hacer la app utilizable de nuevo`,

    }
    ,
    {
      title: 'El regreso de emulator.games',
      image: 'assets/imgs/v1-0.png',
      text: `Es un día feliz puesto a que emulator.games volvió y ahora mas tiene mucha mejor
         latencia por lo que ahora la aplicación obtiene información mas rápido`,

    }
    ,
    {
      title: 'V2 esta aquí y mucho mejor optimizada',
      image: 'assets/imgs/v2-0.png',
      text: `En esta versión no solo se optimizaron muchísimas 
        cosas tales como la búsqueda de roms,los tiempos de carga si
         no que también se añadió una nueva consola la cual
          es la nintendo ds. Esto se debe a un cambio de 
          servidor el cual se utiliza uno mucho mas 
          confiable y con mayor ancho de banda.
          Tambien se hicieron compatibles el 90% de los emuladores que esta en 
          la app y no solo eso sino que se mejoraron los métodos de extracción
        `,

    }

  ]

  ngOnInit() {
  }

}
