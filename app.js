const textArea = document.getElementById("input");
const sectionResult = document.getElementById("section-result");
const btnCriptografar = document.getElementById("btn-code");
const btnDescriptografar = document.getElementById("btn-decode");


function textCode() {
  const text = textArea.value;
  const result = text
  .replaceAll("e", "enter")
  .replaceAll("i", "imes")
  .replaceAll("a", "ai")
  .replaceAll("o", "ober")
  .replaceAll("u", "ufat");
  
  document.getElementById("section-result").innerHTML = '<textarea class="textarea-section-result" id="textarea-section-result">' + result + '</textarea>' + '<button class="btn-copiar" id="btn-copiar" onclick="btnCopiar()">Copiar</button>'
}

function textDecode () {
  let description = document.getElementById("input").value;
  let result = description.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u")

  document.getElementById("input").value = result;
  document.getElementById("section-result").innerHTML = '<textarea class="textarea-section-decode" id="textarea-section-result">' + result + '</textarea>' + '<button class="btn-copiar" id="btn-copiar" onclick="btnCopiar()">Copiar</button>'
}

const test = document.getElementById("textarea-section-result")
console.log(test);

function btnCopiar(){
  const btnCopiar = document.getElementById('textarea-section-result');
  btnCopiar.select()
  document.execCommand('copy');
  alert("Texto Copiado!")
}

btnCriptografar.addEventListener("click", textCode);
btnDescriptografar.addEventListener("click", textDecode);