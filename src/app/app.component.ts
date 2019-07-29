import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'neonromerweb';
  constructor(private rout: Router){
             
  }
  isOnNeonRom3rWeb(){
    if(this.rout.url.includes("neonromerweb"))
        return true;
    else
        return false;
  }
}
