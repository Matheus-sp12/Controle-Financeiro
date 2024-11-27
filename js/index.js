function meuEscopo() {

    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado');

    const dividas = [];

    function cadastrarDivida(evento) {
        evento.preventDefault();

        const conta = form.querySelector('.conta');
        const valor = form.querySelector('.valor');

        dividas.push({
            conta: conta.value,
            valor: valor.value
        });

        console.log(dividas);

        resultado.innerHTML += `<ul class=""lista>
    <li class="linhas">${conta.value}  ${valor.value}</li>
    </ul>`;
    }

    form.addEventListener('submit', cadastrarDivida);
}

meuEscopo();