import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }




  data = [

    {
      image: 'assets/imgs/s17.png',
      title: 'Menú de navegación',
    },
    {
      image: 'assets/imgs/s11.png',
      title: 'Selección de las consolas para ver sus roms',
    },
    {
      image: 'assets/imgs/s12.png',
      title: 'Vista de los roms de una consola seleccionada',
    }
    ,
    {
      image: 'assets/imgs/s5.png',
      title: 'Vista de información de rom seleccionado',
    }
    ,
    {
      image: 'assets/imgs/s14.png',
      title: 'Selección de consola para ver sus emuladores',
    }
    ,
    {
      image: 'assets/imgs/s15.png',
      title: 'Vista de los emuladores de una consola seleccionada',
    }
    ,
    {
      image: 'assets/imgs/s16.png',
      title: 'Selección de las carpetas de descarga de las consolas',
    }
    ,
    {
      image: 'assets/imgs/s13.png',
      title: 'Vista de biblioteca de roms descargados',
    }
    ,
    {
      image: 'assets/imgs/s18.png',
      title: 'Formulario de envió de feedback',
    }
    ,
    {
      image: 'assets/imgs/s10.png',
      title: 'Dialogo de información de la aplicación',
    }
  ]

  ngOnInit() {
  }


}
