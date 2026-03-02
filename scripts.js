// apenas um JS: ao clicar, aparece um alert
document.getElementById("btnContato").addEventListener("click", function () {
    alert("Olá! Me chame no WhatsApp ou envie um e-mail 🙂");
});

// extra simples só pra atualizar o ano (não precisa clicar)
document.getElementById("ano").textContent = new Date().getFullYear();