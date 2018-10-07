var instance = null;
var instance2 = null;
var instance3 = null;
var container = null;
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.getElementsByClassName('sidenav');

  instance = M.Sidenav.init(elems[0]);

  container = document.getElementById("container");
  var logo = document.getElementsByClassName("logito")[0];
  logo.addEventListener("click", function () {
    window.open("index.html", "_self");
  });
});
function loaddescargas() {






}
function abrirdescargas() {

  if (document.getElementById("modal1") == null) {

    var version="V1.0";
    var aptoide="https://neon-rom3r-the-ultimate-application-of-roms-and-emulators.es.aptoide.com/?store_name=gr3apps&app_id=40785016";
    var mega="";
    var direct="https://gr3gorywolf.github.io/NeonRom3r/GR3apps.neonrom3r.apk";

    container.innerHTML += 
      `<div id="modal1" class="modal bottom-sheet white">
        <div class="modal-content">

          <h5>Descargar app</h5>
          <ul class="collection with-header  ">
            <li  role="button" class="collection-item avatar"  onclick="window.open('${direct}','_self') ;instance2.close()">
              <i class="material-icons circle imgdown black">file_download</i>
              <span class="title">&nbsp</span>
              <p>Descarga directa  - ${version}<br>
             </p>
      </li>

              <li role="button" class="collection-item avatar" onclick="window.open('${mega}','_self') ;instance2.close()">
                <img src="imgs/mega.png" alt="" class="circle imgdown">
                  <span class="title">&nbsp</span>
                  <p>Mega - ${version}  <br>
                  </p>
            </li>
                  <li  role="button" href="#" class="collection-item avatar" onclick="window.open('${aptoide}','_self') ;instance2.close()">
                    <img src="imgs/download.jpg" alt="" class="circle imgdown">
                      <span class="title">&nbsp</span>
                      <p>Aptoide - ${version}<br>
                     </p>
            </li>


          </ul>


    </div>

  </div>`;
  }

  if (document.getElementById("modal1") != null) {

    var elemsx = document.getElementById("modal1");
    instance2 = M.Modal.init(elemsx);
    instance2.open();

  }


}
function loadfunciones(){



   
   /*   var elems = document.getElementsByClassName('tap-target');
     instance3 = M.TapTarget.init(elems[0]);
     instance3.open();*/
    

var innertexto="";
for(let i=0;i<data.length;i++){

innertexto+=`<div class="col s12 m6 l4" id="${data[i].feaid}">
          <div class="card" >
        <div class="card-image">
   
    <video src="${data[i].imagen}" style="height:100%;width:100%;background-color:black;" poster="imgs/logo.png"  controls preload="metadata">
  
  </div>
  <div class="card-content">
      <span class="card-title activator grey-text text-darken-4 singleline" style="font-size:20px;" >${data[i].titulo}</span>
   
  </div>
  <div class="card-action">
  <a role="button" style="color:black;" class="activator">MOSTRAR MAS</a>
  
</div>
  <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">${data[i].titulo}<i class="material-icons right">close</i></span>
      <p>${data[i].texto}</p>
    </div>
</div>


</div>
</div>`

}
container.innerHTML=innertexto;
$('.gif').gifplayer();

}

function loadindex() {



  var slider = document.getElementById("slider");
  var inner = "";
  for (let i = 0; i < data.length; i++) {
    inner += ` <li>                                                                                                              
             <img src='${data[i].imagen}'  style='opacity:0.5'>                                  
             <div class='caption center-align' >                                                                                        
               <h4>${data[i].titulo} </h4>                                                                                                     
               <h6 class='light grey-text text-lighten-3'>                                                                              
               ${data[i].texto}                                
                                                                                              
                 </h6>     
                 <a href="${data[i].referencia}" style="margin-top:calc(100% - 80px);">Conozca mas</a>                                                                                                                     
             </div> 
                                                                                                                            
           </li>  `

  }
  slider.innerHTML += inner;

  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems, { interval: 5000 });

  window.addEventListener('wheel', function(e) {
    if (e.deltaY < 0) {
      instances[0].prev();
    }
    if (e.deltaY > 0) {
      instances[0].next();
    }
  });



}


