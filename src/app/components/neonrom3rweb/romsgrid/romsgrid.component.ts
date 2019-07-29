import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { RomsServiceService } from 'src/app/services/roms-service.service';
import { Router } from '@angular/router';
import { Rom } from 'src/app/models/Rom';
import { ChangeDetectorRef } from '@angular/core';
import { IPageInfo } from 'ngx-virtual-scroller';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
declare var $: any;
@Component({
  selector: 'app-romsgrid',
  templateUrl: './romsgrid.component.html',
  styleUrls: ['./romsgrid.component.css']
})

export class RomsgridComponent implements OnInit {

  @ViewChild('scrollview') viewPort: CdkVirtualScrollViewport;


  actualConsole = this.rout.url.replace('/neonromerweb/', '');
  constructor(public romservice: RomsServiceService, private rout: Router, public changeDetectorRef: ChangeDetectorRef) {


  }
  public myTrackByFunction(index: number, complexItem: Rom): number {
    return index;
  }



  scrolled(event:number){ 
    if(!this.romservice.IsFiltering)
        this.romservice.FullRomsScroll=event;
   
  }
  openModal() {
    $('#RomInfoModal').modal('open');
  }
  closeModal() {
    $('#RomInfoModal').modal('open');
  }
  downloadRom(romlink:any){
      window.open(romlink, '_blank');
  }



  loadRom(link: string) {
    this.romservice.LoadRomInfo(link);
  }
  ngOnInit() {
    console.log('pase');

    this.romservice.LoadRoms(this.actualConsole);
    this.rout.routeReuseStrategy.shouldReuseRoute = function() { return false; };
    this.romservice.SetToggleEnterEvent((text:string)=>{
      if (text.trim().length == 0) {
        setTimeout(()=>{
         
          this.viewPort.scrollToIndex(this.romservice.FullRomsScroll);
        },15)
       
      }else{
        this.viewPort.scrollToIndex(0);
      }

    });
    this.romservice.SetInputEnterEvent((text: string) => {

      this.romservice.FilterRoms(text);
      console.log(text.trim().length);
      console.log(text.trim());
      if (text.trim().length == 0) {
        setTimeout(()=>{
         
          this.viewPort.scrollToIndex(this.romservice.FullRomsScroll);
        },15)
       
      }else{
        this.viewPort.scrollToIndex(0);
      }
     
    });
  }
}
