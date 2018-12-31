function getappcard(image, title, link, description, index = 0) {

    return `<div class="col s12 m6 l4 xl3" id=${index} >
<div class="card hoverable" >
<div class="card-image">

<img src="${image}" style="height:230px;width:100%;background-color:black;" >

</div>
<div class="card-content">
<span class="card-title activator grey-text text-darken-4 singleline" style="font-size:20px;" >${title}</span>

</div>
<div class="card-action center-align">
<a role="button" style="color:black;" href="#modalinfo" class="modal-trigger" onclick="ponerinfo('${link}')" ><i class="material-icons">info</i></a>
<a role="button" style="color:black;"  onclick="openrom('${link}')"><i class="material-icons">file_download</i></a>
</div>
<div class="card-reveal">
<span class="card-title grey-text text-darken-4">${title}<i class="material-icons right">close</i></span>
<p>${description}</p>
</div>
</div>


</div>
</div>`


}


function toast(texto) {
    M.toast({ html: texto })

}