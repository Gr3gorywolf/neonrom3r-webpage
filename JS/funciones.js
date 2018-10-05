var instance = null;
var instance2 = null;
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
    var direct="https://gr3gorywolf.github.io/NeonRom3r/";

    container.innerHTML += 
      `<div id="modal1" class="modal bottom-sheet">
        <div class="modal-content">

          <h5>Descargar app</h5>
          <ul class="collection with-header  ">
            <li class="collection-item avatar"  onclick="window.open('${direct}','_self')">
              <i class="material-icons circle imgdown black">file_download</i>
              <span class="title">&nbsp</span>
              <p>Descarga directa  - ${version}<br>
             </p>
      </li>

              <li class="collection-item avatar" onclick="window.open('${mega}','_self')">
                <img src="imgs/mega.png" alt="" class="circle imgdown">
                  <span class="title">&nbsp</span>
                  <p>Mega - ${version}  <br>
                  </p>
            </li>
                  <li class="collection-item avatar" onclick="window.open('${aptoide}','_self')">
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



    var elemsx = document.querySelectorAll('.materialboxed');
    var instancesxd = M.Materialbox.init(elemsx);

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
                  <br><br><br><br><br><br><a href="${data[i].referencia} ">Conozca mas</a>                                                                                   
                 </h6>                                                                                                                  
             </div>                                                                                                                     
           </li>  `

  }
  slider.innerHTML += inner;

  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems, { interval: 5000 });


}


