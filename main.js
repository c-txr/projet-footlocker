const boitesMysteres = document.querySelectorAll(".btn-boîte");
const jackpot = document.getElementById("pop-up-jackpot");
const victoire = document.getElementById("pop-up-victoire");
const consolation = document.getElementById("pop-up-consolation");
const defaite = document.getElementById("pop-up-défaite");

boitesMysteres.forEach(boite =>{
    boite.addEventListener("click",() => {
        console.log("j'ai cliqué sur une boîte"); /* vérification que mon event listener fonctionne bien */
        const score = Math.floor(Math.random() * 100) /* tirage d'un nombre entre 0 et 100*/

        if (score < 40){
            defaite.classList.add("active");
        }
        else if (score < 75){
            consolation.classList.add("active");
        } else if (score < 95){
            victoire.classList.add("active");
        }
        else{
            jackpot.classList.add("active");
        }
    });
    });


