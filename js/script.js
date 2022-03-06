let count = 0;

// PREVIOUS AND NEXT //
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");

previous.addEventListener("click", previousElement);
next.addEventListener("click", nextElement);

function previousElement() {
  if (count === 0) {
    alert("Não tem elemento anterior!");
    return false;
  } else {
    const thisElement = document.querySelectorAll(`#e${count}`);
    const nextElement = document.querySelectorAll(`#e${count - 1}`);
    for (let i = 0; i < thisElement.length; i++) {
      thisElement[i].classList.add("hidden");
      nextElement[i].classList.remove("hidden");
    }
    count--;
  }
}

function nextElement() {
  if (count === 6) {
    alert("Não tem próximo elemento!");
    return false;
  } else {
    const thisElement = document.querySelectorAll(`#e${count}`);
    const nextElement = document.querySelectorAll(`#e${count + 1}`);
    for (let i = 0; i < thisElement.length; i++) {
      thisElement[i].classList.add("hidden");
      nextElement[i].classList.remove("hidden");
    }
    count++;
  }
}

// FUNCTION CLICK //
function click() {
  const elementClick = document.querySelector(".elemento-click");
  elementClick.addEventListener("click", alertClick);

  function alertClick() {
    alert("Você clicou na parada");
  }
}

// FUNCTION FOCUS //
function focus() {
  const elementFocus1 = document.querySelector(".elemento-focus-1");
  const elementFocus2 = document.querySelector(".elemento-focus-2");

  elementFocus1.addEventListener("focus", alertFocus1);
  elementFocus2.addEventListener("focus", alertFocus2);
  elementFocus1.addEventListener("blur", alertblur1);
  elementFocus2.addEventListener("blur", alertblur2);

  function alertFocus1() {
    elementFocus1.classList.remove("desfocado");
    elementFocus1.classList.add("focado");
  }

  function alertFocus2() {
    elementFocus2.classList.remove("desfocado");
    elementFocus2.classList.add("focado");
  }

  function alertblur1() {
    elementFocus1.classList.remove("focado");
    elementFocus1.classList.add("desfocado");
  }

  function alertblur2() {
    elementFocus2.classList.remove("focado");
    elementFocus2.classList.add("desfocado");
  }
}

// FUNCTION CHANGE //
function change() {
  const elementChange = document.querySelector(".elemento-select");

  elementChange.addEventListener("change", alertChange);

  function alertChange() {
    alert("Trocaram a seleção");
    const text = document.querySelector(".textSelect");
    text.innerHTML = `${elementChange.value} foi selecionado.`;
  }
}
// CHAMANDO FUNÇÕES
click();
focus();
change();
