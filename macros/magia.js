function processInput(event) {
    event.preventDefault();

    const nom = document.getElementById("nom").value;
    const dur = document.getElementById("dur").value;
    const alv = document.getElementById("alv").value;
    const type = document.getElementById("type").value;
    const exe = document.getElementById("exe").value;
    const resist = document.getElementById("resist").value;
    const desc = document.getElementById("desc").value;
    const cd = Number(document.getElementById("cd").value);

    const macro = "&{template:spell}{{spellname=" + nom +"}}{{type="+ type +"}}{{execution="+ exe +"}}{{duration="+ dur +"}}{{range="+ alv +"}}{{targetarea="+ alv +"}}{{resistance="+ resist +"}}{{description="+ desc +"}}{{cd="+ cd +"}}";

    document.getElementById("magia").innerHTML = "<article style='max-width: 25%; margin: 0 auto; text-align: left;'>" + macro + "</article>";
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