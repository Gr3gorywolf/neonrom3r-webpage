import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  constructor() { }
  currentvideo = '';
  ngOnInit() {
  }
  closeModal() {
    $('#featureModal').modal('close');
  }
  openModal() {
    $('#featureModal').modal('open');
  }
  setCurrentVideo(url: string) {
    this.currentvideo = url;
    this.openModal();
  }

  data = [
    {
    feaid: 'filter',
    video: 'assets/vids/2.mp4',
    icon: 'flash_on',
    title: 'Búsqueda rápida de roms',
    description: `Puesto a que hay miles de roms para cada consola
    algunas veces es difícil buscar entre ellos. Pero para este caso NeonRom3r
    posee un buscador dinámico el cual a medida que usted va escribiendo van
    apareciendo los roms que contenga el termino que usted esta escribiendo`
    }
    ,
    {
    feaid: 'rominfo',
    video: 'assets/vids/9.mp4',
    icon: 'remove_red_eye',
    title: 'Vea la información de los roms',
    description: `Una vez que usted encontró el rom deseado
    usted puede obtener la información de el con solo tocarlo y la aplicación le mostrara la siguiente información:\n
    El Nombre del rom \n
    La portada original del rom\n
    El rating del rom\n
    El tamaño del rom en megabytes\n
    La región del rom\n
    La cantidad de descargas\n
    Entre otras cosas...`
    }
    ,
    {
    feaid: 'ddirecta',
    video: 'assets/vids/10.mp4',
    icon: 'file_download',
    title: 'Descarga directa de los roms',
    description: `Una vez que usted obtuvo la información de el
    rom usted puede descargar ese rom con solo darle a un botón
     y este por defecto se
    descarga en la carpeta de descargas de su dispositivo
    (Esta carpeta por defecto puede ser cambiada por cualquiera que desee)`
    }
    ,
    {
    feaid: 'compartir',
    video: 'assets/vids/1.mp4',
    icon: 'share',
    title: 'Comparta el link de descarga de los roms',
    description: `Una vez usted obtuvo la información
    de el rom usted puede compartir el link de descarga directa
    de ese rom a través de sus redes sociales`
    }
    ,
    {
    feaid: 'compartir',
    video: 'assets/vids/3.mp4',
    icon: 'videogame_asset',
    title: 'Emuladores para cada consola',
    description: `En la sección de emuladores de la aplicación usted podrá descargar los emuladores disponibles para cada consola
    y también la app le dirá si usted ya tiene instalado ese emulador NOTA:Hay consolas que no poseen
    emuladores compatibles con la aplicación sin embargo pueden utilizarse para abrir esos roms`
    }
    ,
    {
    feaid: 'path',
    video: 'assets/vids/4.mp4',
    icon: 'folder',
    title: 'Selección de carpeta de descarga',
    description: `Por defecto los roms se descargan en la carpeta de descargas de el sistema pero en la selección de carpetas de descargas de la aplicación
    usted podrá cambiar la carpeta donde los roms de dicho emulador sera descargado
    NOTA:En dispositivos con android superior a 4.4 no se puede seleccionar carpetas ubicadas en el almacenamiento externo`
    }
    ,
    {
    feaid: 'descargados',
    video: 'assets/vids/7.mp4',
    icon: 'collections_bookmark',
    title: 'Biblioteca de roms descargados',
    description: `Una vez usted tiene almenos un rom descargado este
    se almacena en su biblioteca de roms descargados donde usted podra abrir
    dicho rom si usted tiene un emulador compatible instalado o también compartir este rom a través de sus redes sociales`
    }

    ];


}
