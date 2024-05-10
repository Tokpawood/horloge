
let hrs = document.getElementById("heure");
let min = document.getElementById("minute");
let sec = document.getElementById("seconde");


//Mise à jour à chaque seconde

setInterval(()=>{
        //Affichage de l'heure local

    let currentTime = new Date();
    console.log(currentTime.getHours());

    //Attribution de l'eure local à mes éléments html
    hrs.innerHTML  = currentTime.getHours();
    min.innerHTML  = currentTime.getMinutes();
    sec.innerHTML  = currentTime.getSeconds();
},1000);


