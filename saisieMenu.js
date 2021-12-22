const readline = require("readline");

exports.userInput = () => {
  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return rl.question("Veuillez saisir une valeur: ", (saisie) => {
    const value = Number.parseInt(saisie);
    if (isNaN(value)) {
      console.error("Veuillez saisir une valeur numérique.");
    } else {
      switch (value) {
        case 1:
          require("./clientList.js").main();
          break;
        case 99:
          require("./commands_menu/exitApplication.js").main();
          break;
      }
    }
    rl.close();
    require("./presentation").displayMenu();
  });
};
