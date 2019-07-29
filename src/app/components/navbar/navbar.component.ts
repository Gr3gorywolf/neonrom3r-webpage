import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   
  }

  version = "V2.0";
  aptoide = "https://neon-rom3r-the-ultimate-application-of-roms-and-emulators.es.aptoide.com/?store_name=gr3apps&app_id=40785016";
  mega = "https://mega.nz/#!lBxy2SgD!5k7A1qqqlFBgdWoxAjE0_MAWK9yDvlFdKDtEql6yt_w";
  direct = "https://github.com/Gr3gorywolf/NeonRom3r/raw/master/docs/GR3apps.neonrom3r.apk";


  openModalLink(link:string){
window.open(link,'_self');
}
openModal(){
  $('#downloadmodal').modal('open');
}
closeModal(){
  $('#downloadmodal').modal('close');
}
closeSideNav(){
  $('.button-collapse').sideNav('hide');
}

}
