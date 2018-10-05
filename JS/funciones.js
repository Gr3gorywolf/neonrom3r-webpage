var instance=null;
var instance2=null;
var container=null;
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.getElementsByClassName('sidenav');
   
    instance = M.Sidenav.init(elems[0]);
    
    container=document.getElementById("container");
    var logo=document.getElementsByClassName("logito")[0];
    logo.addEventListener("click",function(){
     window.open("index.html","_self");
    });
});
function loaddescargas(){
    
     




}
function abrirdescargas(){

   if(document.getElementById("modal1")==null){
   container.innerHTML+=`
     <div id="modal1" class="modal bottom-sheet">
    <div class="modal-content">
        <h5>Descargar app a travez de?</h5>
        <ul class="collection with-header  ">          
            <li class="collection-item avatar  ">
                    <img src="imgs/mega.png" alt="" class="circle imgdown">
              <span class="title">&nbsp</span>
              <p>Mega <br>  
             </p>
              <a href="#!" class="secondary-content"><i class="material-icons black-text imgdown">file_download</i></a>
            </li>
            <li class="collection-item avatar">
                    <img src="imgs/download.jpg" alt="" class="circle imgdown">
              <span class="title">&nbsp</span>
              <p>Aptoide <br>
               
             </p>
              <a href="#!" class="secondary-content"><i class="material-icons black-text imgdown">file_download</i></a>
            </li>
            <li class="collection-item avatar">
              <i class="material-icons circle imgdown black">file_download</i>
              <span class="title">&nbsp</span>
              <p>Descarga directa <br>
              
             </p>
              <a href="#!" class="secondary-content"><i class="material-icons black-text imgdown">file_download</i></a>
            </li>
           
          </ul>
          

    </div>
   
  </div>`;
}

if(document.getElementById("modal1")!=null){

    var elemsx = document.getElementById("modal1");
    instance2 = M.Modal.init(elemsx);
    instance2.open();

}


}
function loadindex(){

        
   
        var slider=document.getElementById("slider");
        var inner="";
        for(let i=0;i<data.length;i++){
             inner+=` <li>                                                                                                              
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
        slider.innerHTML+=inner;

        var elems = document.querySelectorAll('.slider');
        var instances = M.Slider.init(elems,{interval:5000});
       
    
}


