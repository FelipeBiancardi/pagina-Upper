const containerCards = document.getElementById("container-cards");

// Elementos.


// Funções.
const inicializandoPagina = async () => {
    const { data } = await axios.get("https://reqres.in/api/users?page=1");

    const novosDados = data.data.map( dados => {
        return { img: dados.avatar, email: dados.email, nome: `${dados.first_name} ${dados.last_name}` }
    });

    const strNovosDados = novosDados.map( dados => {
        return CardUserComponent(dados);
    });
    const novoHtmlInserir = strNovosDados.join(" ");
    containerCards.innerHTML = novoHtmlInserir;
}

// Eventos.
window.document.onload = inicializandoPagina()

// Components.
const CardUserComponent = (dados) => {
    var aux = "";
    aux += `<div class="card">`;
    aux += `    <img class="img" src="./img/edit-icon.png" alt="edit-icon">`;
    aux += `    <img class="foto" src="${dados.img}" alt="foto">`;
    aux += `    <h2>${dados.nome}</h2>`;
    aux += `    <p>${dados.email}</p>`;
    aux += `</div>`;
    return aux;
}