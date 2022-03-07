let count = 0; // CONTA EM QUAL ARTICLE VC TÁ

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
  if (count === 4) {
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

// FUNCTION KEYS //
function keys() {
  document.addEventListener("keypress", pressEnter);
  document.addEventListener("keydown", pressF);
  document.addEventListener("keyup", unPressF);
  function pressEnter() {
    if (event.keyCode === 13) {
      const elementEnter = document.querySelector(".enter-press");

      if (elementEnter.classList.contains("pressionado")) {
        elementEnter.innerHTML = "Enter foi despressionado";
        elementEnter.classList.remove("pressionado");
      } else {
        elementEnter.classList.add("pressionado");
        elementEnter.innerHTML = "Enter foi pressionado";
      }
    }
  }
  function pressF() {
    if (event.keyCode === 70) {
      document.querySelector(".f-press").innerHTML = "F foi pressionado";
    }
  }
  function unPressF() {
    if (event.keyCode === 70) {
      document.querySelector(".f-press").innerHTML = "F foi solto";
    }
  }
}

function mouse() {
  const elementMouse = document.querySelector(".mouse-over-out");

  elementMouse.addEventListener("mouseover", mouseOver);
  elementMouse.addEventListener("mouseout", mouseOut);

  function mouseOver() {
    elementMouse.innerHTML = "O mouse tá aqui dentro";
  }

  function mouseOut() {
    elementMouse.innerHTML = "O mouse saiu daqui pô";
  }
}
// CHAMANDO FUNÇÕES
click();
focus();
change();
keys();
mouse();
