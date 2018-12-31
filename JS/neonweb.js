var infos = null;
var loader = null;
var currentpage = 0;
var pagesave = 0;
var nohandle = false;
var pagesdictionary = [];
var currentconsole = "";
var instance = null;
function loadwebapp() {

    var elems = document.getElementsByClassName('sidenav');
    instance = M.Sidenav.init(elems[0]);

    var elems2 = document.getElementsByClassName("chips")[0];
    var instances2 = M.Chips.init(elems2);

    var modaleelem = document.querySelectorAll('.modal');
    var instmodal = M.Modal.init(modaleelem);

    loader = document.getElementById("loader");
    var inputt = document.getElementById("busqueda")
    console.log(inputt);
    inputt.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            filter();
        }
    });
    loader.style.display="none";
 

 


}
window.onscroll = function () {
    var d = document.documentElement;
    var offset = d.scrollTop + window.innerHeight;
    var height = d.offsetHeight;


    if (d.scrollTop == 0 && currentpage != 0 && !nohandle) {

        currentpage--;
        container.innerHTML = pagesdictionary[currentpage];
        d.scrollTo(0, height / 1.2);
        console.log("subio");

    }
    if (nohandle)
        nohandle = false;

    if (offset == height) {
        if (pagesdictionary.length > 0) {

            if (currentpage + 1 <= pagesdictionary.length - 1) {
                console.log("bajo");
                currentpage++;
                container.innerHTML = pagesdictionary[currentpage];
                // nohandle=true;
                d.scrollTo(0, 20);

            }
        }
    }
};
function loadroms(consolename, startindex = 0) {
    currentconsole = consolename;
    let innercount = 0;
    var requ = new XMLHttpRequest();
    loader.style.display = "initial";
    
    document.body.removeAttribute("class");
    document.getElementById("barrabusqueda").style.display="initial"
    pagesdictionary = [];
    requ.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("busqueda").value="";
            document.getElementById("eliminartermino").innerText = "search";
            infos = JSON.parse(this.responseText);
            let innertexto = "";
            console.log("paso")
            container.innerHTML="";
            for (let i = 0; i < infos.length; i++) {

                innertexto += getappcard(infos[i].Portrait, infos[i].Name, infos[i].InfoLink, infos[i].Region, i)

                innercount++;
                if (innercount > 49) {
                    innercount = 0;
                    pagesdictionary.push(innertexto)

                    innertexto = "";

                }

            }
            if (innertexto != undefined)
                pagesdictionary.push(innertexto)

            innertexto = "";
            container.innerHTML = pagesdictionary[startindex];
            loader.style.display = "none";
            toast("Mostrando roms de :"+consolename);

        }
    }
    requ.open("GET", "https://raw.githubusercontent.com/Gr3gorywolf/NeonRom3r/master/Rominfos/Data/" + consolename + ".json", true);
    requ.send();



}



function setbutton(elem) {
    if (document.getElementById("busqueda").value !== "") {

        document.getElementById("busqueda").value = "";
        filter();
    }

}



function filter() {
    console.log("pase");
    pagesdictionary = [];
    loader.style.display = "initial";
    var termino = document.getElementById("busqueda").value;
    if (termino !== "") {
        document.getElementById("eliminartermino").innerText = "close";
        container.innerHTML = "";
        var innertexto = "";
        var counter = 0;
        for (let i = 0; i < infos.length; i++) {
            console.log("pase");
            if (infos[i].Name.toLowerCase().includes(termino.toLowerCase())) {

                innertexto += getappcard(infos[i].Portrait, infos[i].Name, infos[i].InfoLink, infos[i].Region, i)
                counter++;

                if (counter > 49) {
                    counter = 0;
                    pagesdictionary.push(innertexto)

                    innertexto = "";

                }



            }

        }
        if (innertexto != undefined)
            pagesdictionary.push(innertexto)

        document.documentElement.scrollTo(0, 5);
        container.innerHTML = pagesdictionary[0];
        pagesave = currentpage;
        currentpage = 0;
        loader.style.display = "none";
        toast("Mostrando resultados para: " + termino);
        console.log("pasex");

    } else {
        document.getElementById("eliminartermino").innerText = "search";
        document.documentElement.scrollTo(0, 5);
        currentpage = pagesave;
        loadroms(currentconsole, currentpage)

    }

}


function openrom(link) {
    console.log("entre");
    var request = new XMLHttpRequest();
    toast("Obteniendo link de descarga ");
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            console.log("gettee");
            toast("Procesando descarga...");
            window.open(JSON.parse(this.responseText).DownloadLink, "_top");
        }

    }
    request.open("GET", encodeURI(link), true);
    request.send()

}

function ponerinfo(link) {

    console.log("entre");
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var objeto = JSON.parse(this.responseText);
            console.log("gettee");
            
            document.getElementById("cotenidomodal").scrollTo(0,0);
            document.getElementById("infotitle").innerHTML = objeto.Name
            document.getElementById("infoimage").src = objeto.Portrait
            document.getElementById("inforegion").innerHTML = `<i class="material-icons inline-icon">flag</i>` + objeto.Region;
            document.getElementById("infosize").innerHTML = `<i class="material-icons inline-icon">donut_large</i>` + objeto.Size
            document.getElementById("infoconsole").innerHTML = `<i class="material-icons inline-icon">gamepad</i>` + objeto.Console
        }

    }
    request.open("GET", encodeURI(link), true);
    request.send()

}

