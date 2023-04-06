function processInput(event) {
  event.preventDefault();
  // Get the values of the input fields and generate the macro string
  const nom = document.getElementById("nom").value;
  const dur = document.getElementById("dur").value;
  const alv = document.getElementById("alv").value;
  const type = document.getElementById("type").value;
  const exe = document.getElementById("exe").value;
  const resist = document.getElementById("resist").value;
  const desc = document.getElementById("desc").value;
  const cd = Number(document.getElementById("cd").value);

  const macrotemp =
    "&{template:spell}{{spellname=" +
    nom +
    "}}{{type=" +
    type +
    "}}{{execution=" +
    exe +
    "}}{{duration=" +
    dur +
    "}}{{range=" +
    alv +
    "}}{{targetarea=" +
    alv +
    "}}{{resistance=" +
    resist +
    "}}{{description=" +
    desc +
    "}}{{cd=" +
    cd +
    "}}";

  const macro = "<p id='macro_magia'>" + macrotemp + "</p>";

  // Create a temporary textarea element to copy the macro to the clipboard
  const tempTextarea = document.createElement("textarea");
  tempTextarea.value = macrotemp;
  tempTextarea.setAttribute("readonly", "");
  tempTextarea.style.position = "absolute";
  tempTextarea.style.left = "-9999px";
  document.body.appendChild(tempTextarea);
  tempTextarea.select();
  document.execCommand("copy");
  document.body.removeChild(tempTextarea);

  // Update the content of the div with id="magia"
  document.getElementById("magia").innerHTML =
    "<article style='max-width: 25%; margin: auto; background-color: #222; padding: 15px'><h3>Macro Gerada:</h3>" +
    macro +
    "</article>";

  alert("Sua cópia foi texto! Aqui está o texto: \n\n"+ macrotemp);
}

// &{template:spell}{{spellname=NOME DA MAGIA}}{{type=TIPO}}{{execution=AÇÃO}}{{duration=DURAÇÃO}}{{range=ALCANCE}}{{targetarea=ALVO}}{{resistance=RESISTÊNCIA}}{{description=DESCRIÇÃO DA MAGIA, PODENDO SER O TEXTO DELA, ANOTAÇÕES, OU BOTÕES E GIFS}}{{cd=CD DA MAGIA}}
// nom - nome
// dur - duração
// alv - alvo
// cd - CD da magia
// type - tipo de magia
// exe - execução
// resist - resistencia
// desc - descrição

function Copy() {
  // Get the text field
  var copyText = document.getElementById("macro_magia");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}
