const select = require("./saisieMenu.js");

exports.displayMenu = () => {
  console.log("1. Lister les clients");
  console.log("99. Sortir");

  select.userInput();
};
