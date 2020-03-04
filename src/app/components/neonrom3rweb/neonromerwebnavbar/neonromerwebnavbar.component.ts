import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { RomsServiceService } from 'src/app/services/roms-service.service';
declare var $:any;
@Component({
  selector: 'app-neonromerwebnavbar',
  templateUrl: './neonromerwebnavbar.component.html',
  styleUrls: ['./neonromerwebnavbar.component.css']
})
export class NeonromerwebnavbarComponent implements OnInit {

  constructor(private rout:Router,public  romservice:RomsServiceService) { }
  hasConsoleLoaded(){
   return this.rout.url.split("neonromerweb")[1].trim()!=="";
  }
  ngOnInit() {
  }
  openSideNav(){
    $('.button-collapse').sideNav('hide');
  }
  closeSideNav(){
    $('.button-collapse').sideNav('hide');
  }
data=[
  {romscount:502,consolename:'GameBoy',slug:'GB'},
  {romscount:425,consolename:'GameBoy Color',slug:'GBC'},
  {romscount:1454,consolename:'GameBoy Advance',slug:'GBA'},
  {romscount:702,consolename:'Nintendo',slug:'NES'},
  {romscount:8234,consolename:'Super Nintendo',slug:'SNES'},
  {romscount:282,consolename:'Nintendo 64',slug:'N64'},
  //{romscount:4012,consolename:'Nintendo DS',slug:'NDS'},
  {romscount:546,consolename:'Sega Dreamcast',slug:'Dreamcast'},
  {romscount:660,consolename:'Sega Genesis',slug:'Genesis'},
  {romscount:492,consolename:'Playstation 1',slug:'PSX'},

]


}
