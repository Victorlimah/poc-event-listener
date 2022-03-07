const pai = document.getElementById("pai");
const filho = document.getElementById("filho");
const neto = document.getElementById("neto");

pai.addEventListener("click", (x) => console.log("pai foi clicado"));
filho.addEventListener("click", (x) => console.log("filho foi clicado"));
neto.addEventListener("click", (x) => console.log("neto foi clicado"));

// neto.addEventListener("click", (x) => {
//   console.log("neto foi clicado");
//   event.stopPropagation();
// });
