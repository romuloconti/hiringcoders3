var nome = "Romulo";

if (nome === "Carlos") {
    console.log("Ta certo doidao");
} else if (nome === "Jose") {
    console.log("Quase la")
} else {
    console.log("Tá maluco?")
}


/* Usando swith */

var nome = "Carlos";

switch (nome) {
    case "Romulo":
        console.log("É tu merrmooo maluco");
        break;
    case "Jose":
        console.log("Não tem tu vai tu mesmo");
        break;
    default:
        console.log("Sai fora malucao");
        break;
}