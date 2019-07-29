import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Rom, RomInfo } from '../models/Rom';
import { filterQueryId } from '@angular/core/src/view/util';

@Injectable({
  providedIn: 'root'
})
export class RomsServiceService {
  AllRoms: Array<Rom> = [];
  Roms: Array<Rom> = [];
  RomInformation:RomInfo=new RomInfo();
  Loading: Boolean = false;
  LoadingInfo: Boolean = false;
  FullRomsScroll:any;
  IsFiltering:Boolean=false;
  constructor(private client: HttpClient) {

  
  }



  SetToggleEnterEvent( callback:Function){

    var inputt:HTMLInputElement = document.getElementById("busqueda") as HTMLInputElement;
    var toggle:HTMLElement = document.getElementById("searchToggle");
    console.log(inputt);
    toggle.onclick= (event)=> { 
          
           if( this.IsFiltering){
              inputt.value="";
              this.FilterRoms("");
              this.IsFiltering=false;
           }else{
              this.FilterRoms(inputt.value);
              this.IsFiltering=true;
           }
           callback(inputt.value.toString());
    }

  }

  SetInputEnterEvent(callback:Function){

    var inputt:HTMLInputElement = document.getElementById("busqueda") as HTMLInputElement;
    console.log(inputt);
    inputt.onkeyup= (event)=> {
        if (event.key === "Enter") {
          
           if(inputt.value.toString().trim().length>0){
              this.IsFiltering=true;
           }else{
              this.IsFiltering=false;
           }

          callback(inputt.value.toString());
        }
    }

  }


  LoadRomInfo(infoLink: string) {
    
    this.LoadingInfo = true;
    setTimeout(()=>{
    this.client.get(infoLink).subscribe(
      res => {
        this.LoadingInfo = false;
        this.RomInformation=res as RomInfo;
      },

      (err: any) => {
        this.LoadingInfo = false;
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);

      }

    );
    },350);
  }


   
  FilterRoms(query:string){
    query=query.toLocaleLowerCase().trim();  
    this.Roms=this.AllRoms.filter(ax=>ax.Name.toLocaleLowerCase().trim().includes(query));
  }

  LoadRoms(consoleName: String) {
    this.Loading = true; 

    this.client.get(environment.romsinfosurl + consoleName + ".json").subscribe(

      res => {
        this.Loading = false;
        this.AllRoms = (res as Array<Rom>);
        this.Roms = this.AllRoms;
        console.log(false, res);
      },
      (err: any) => {
        this.Loading = false;
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);

      } 
    );
    
  }

}


