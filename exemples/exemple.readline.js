const readline = require("readline");

//récupération de la saisie utilisateur
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
})

//On pose une question à l'utilisateur via stdin et on l'affiche sur stdout
rl.question("Comment ça va ?\n", (saisie)=>{
    console.log(`Vous venez de noter la réponse suivante : ${saisie}`);

    rl.close();
});