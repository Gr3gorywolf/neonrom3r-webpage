import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-startslider',
  templateUrl: './startslider.component.html',
  styleUrls: ['./startslider.component.css']
})
export class StartsliderComponent implements OnInit {

  constructor() { }








  data = [
    {
      title: 'Descargue sus roms desde el navegador',
      image: 'assets/imgs/nes.jpg',
      text: `Ya no es obligatorio tener un 
        dispositivo android para utilizar la 
        información de los servidores de neonromer 
        ya que en la v2 se añadió el neonrom3r web 
        la cual es una aplicación web la cual permite 
        hacer lo mismo que se hace en neonrom3r.android`,
      link: '/neonromerweb'
    },
    {
      title: 'Miles de roms',
      image: 'assets/imgs/651244.jpg',
      text: `Esta  aplicación posee miles de roms para ciertas consolas tales
 como Gameboy,Gameboy Color, Gameboy Advance,Nintendo 64,Super nintendo,
 Nintendo,Play station 1,Sega genesis,Sega dreamcast`,
      link: ''
    },
    {
      title: 'Libre de publicidad',
      image: 'assets/imgs/maxresdefault.jpg',
      text: `Esta  aplicación fue 
diseñada para aprendizaje y crecimiento personal
 y su propósito no es para fines de lucro `,
      link: ''
    }
    ,
    {
      title: 'Descarga  directa de los roms',
      image: 'assets/imgs/nes_controller___minimal_wallpaper_4k_by_frankvaglia-d9ye5my.png',
      text: `Usted podrá descargar cualquier roms sin tener 
que abrir ningún navegador ni tener que ver tediosa publicidad`,
      link: ''
    }
    ,
    {
      title: 'Ejecute sus roms directamente',
      image: 'assets/imgs/wallpaper2you_469311.png',
      text: `Todos los roms que usted ha descargado pueden 
abrirse directamente desde la
 aplicación si se tiene un emulador 
 compatible instalado`,
      link: ''
    }
    ,
    {
      title: 'Open source',
      image: 'assets/imgs/1600x900_px_Controllers_N64_Nintendo_64-1431955.jpg',
      text: `Usted puede colaborar con este proyecto y agregar mas funciones ya que todo el código fuente esta 
disponible el repositorio de la aplicación en 
github.com/Gr3gorywolf/NeonRom3r`,
      link: 'https://github.com/Gr3gorywolf/NeonRom3r'
    }
  ]
 isValidLink(link:string){
   return link!=="";
 }
  ngOnInit() {
  }



}
