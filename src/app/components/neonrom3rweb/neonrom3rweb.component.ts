import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-neonrom3rweb',
  templateUrl: './neonrom3rweb.component.html',
  styleUrls: ['./neonrom3rweb.component.css']
})
export class Neonrom3rwebComponent implements OnInit {

  constructor(private rout:Router) { }
  hasConsoleLoaded(){
    return this.rout.url.replace("/","").split("neonromerweb")[1].trim()!=="";
   }
  ngOnInit() {
  
  }

}
