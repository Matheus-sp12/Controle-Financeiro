function meuEscopo() {

    //Pegando o formulario e a div fazia para acresentar ao enviar o input
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado');

    // array vazio, onde vamos enviar os inputs
    const dividas = [];

    //criado a função para cadastrar as dividas
    function cadastrarDivida(evento) {
        // evitar o carregamento da pagina
        evento.preventDefault();

        //pegou os inputs
        const conta = form.querySelector('.conta');
        const valor = form.querySelector('.valor');

        //acrescentar os valores no array
        dividas.push({
            conta: conta.value,
            valor: valor.value
        });

        //mostra os valores incluidos no array
        console.log(dividas);

        //Pega a div vazia e cria o elemento inserido no input
        resultado.innerHTML += `<ul class=""lista>
    <li class="linhas">${conta.value}  ${valor.value}</li>
    </ul>`;
    }

    //criado o evento de enviar e cadastrar os inputs
    form.addEventListener('submit', cadastrarDivida);
}

meuEscopo();