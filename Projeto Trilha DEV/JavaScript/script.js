const form = document.querySelector("#form")
const nameInput = document.querySelector("#nome")
const emailInput = document.querySelector("#email")
const linkInput = document.querySelector("#linkport")
const respostaTextarea = document.querySelector("#resposta")
const modal = document.querySelector("#modal")



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

    function showModal() {
        const modal = document.getElementById("modal");
        const fade = document.getElementById("fade");
        modal.classList.remove("hide");
        fade.classList.remove("hide");
    }

    
    function hideModal() {
        const modal = document.getElementById("modal");
        const fade = document.getElementById("fade");
        const form = document.getElementById("form");
        form.reset(); 
        modal.classList.add("hide");
        fade.classList.add("hide");
    }

    showModal();

    const modal = document.getElementById("modal");
    const fade = document.getElementById("fade");
    modal.addEventListener("click", hideModal);
    fade.addEventListener("click", hideModal);
});


