document.querySelector('.btn-cadastrar').addEventListener('click', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const terms = document.getElementById('terms').checked;

    if (name === "") {
        alert("Por favor, digite seu nome.");
        return;
    }

    if (email === "") {
        alert("Por favor, digite seu e-mail.");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, digite um e-mail válido.");
        return;
    }

    if (phone === "") {
        alert("Por favor, digite seu celular.");
        return;
    }
    const phonePattern = /^\d{10,11}$/;
    if (!phonePattern.test(phone)) {
        alert("Por favor, digite um número de celular válido.");
        return;
    }

    if (!terms) {
        alert("Você deve aceitar os termos para continuar.");
        return;
    }
    alert("Formulário enviado com sucesso!");
});