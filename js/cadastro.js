// Elementos.
const inp_nome    = document.getElementById("input_nome");
const inp_email   = document.getElementById("input_email");
const inp_estado  = document.getElementById("input_estado");
const inp_senha   = document.getElementById("input_senha");
const inp_csenha  = document.getElementById("input_csenha");

const btn_cadastrar = document.getElementById("btn_cadastrar");

// Funções.
const getLocalStorage = () => {
    return JSON.parse( localStorage.getItem("db_local") ) || [];
}

const saveLocalStorage = ( data ) => {
    const dadosBanco = getLocalStorage();
    dadosBanco.push(data);
    localStorage.setItem("db_local", JSON.stringify(dadosBanco));
}

const isExistsUser = ( email ) => {
    const dadosBanco = getLocalStorage();
    const buscaUsuario = dadosBanco.filter( user => user.email === email );
    return buscaUsuario.length === 0 ? false : true;
}

const isPasswordEquals = (senha, csenha) => {
    return senha === csenha ? true : false;
}

const efetuarCadastro = () => {
    
    if( isExistsUser( inp_email.value ) ) 
        return alert("Usuario ja cadastrado no sistema.");

    if( !isPasswordEquals( inp_senha.value, inp_csenha.value ) ){
        alert("Senha não sao iguais.")
        inp_csenha.value = "";
        inp_csenha.focus();
        return;
    }
        
    const inp_sexo = document.querySelector('input[name="chose-sexo"]:checked')

    const dados = {
        nome: inp_nome.value,
        email: inp_email.value,
        estado: inp_estado.value,
        sexo: inp_sexo.value,
        senha: inp_senha.value,
    }

    saveLocalStorage(dados);

    alert("Usuario Criado com Sucesso.");
    window.location.href = window.location.origin + "/index.html";
}


// Eventos.
btn_cadastrar.addEventListener("click", efetuarCadastro )
