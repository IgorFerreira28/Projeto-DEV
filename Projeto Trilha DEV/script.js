const form = document.querySelector("#form")
const nameInput = document.querySelector("#nome")
const emailInput = document.querySelector("#email")
const linkInput = document.querySelector("#linkport")
const respostaTextarea = document.querySelector("#resposta")


form.addEventListener("submit", (event) => {
    event.preventDefault();


    if (nameInput.value === "") {
        alert("Por Favor, preencha o seu nome");
        return;
    }

    if (emailInput.value === "") {
        alert("Por Favor, preencha o seu email");
        return;
    }

    if (linkInput.value === "") {
        alert("Por Favor, insira o link para seu portifólio");
        return;
    }
    if (respostaTextarea.value === "") {
        alert("Por Favor, escreva os motivos para fazer parte da jojos")
    }

    form.submit();
});


