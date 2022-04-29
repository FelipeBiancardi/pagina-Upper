// Elementos.
const inp_email = document.getElementById("input_email");
const inp_senha = document.getElementById("input_senha");
const btn_entrar = document.getElementById("btn_entrar");

// Funções.
const getLocalStorage = () => {
    return JSON.parse( localStorage.getItem("db_local") ) || [];
}

const verificaLogin = ( email, senha ) => {
    const bancoLocal = getLocalStorage();
    console.log(bancoLocal);
    if( bancoLocal.length === 0 )  return { acesso: false, message: "Usuario ou Senha Invalidos." };
    const buscaUsuario = bancoLocal.filter( user => user.email === email && user.senha === senha );
    return buscaUsuario.length === 0 ? { acesso: false, message: "Usuario ou Senha Invalidos." } : { acesso: true, message: "Bem Vindo." };
}

const resetarCampos = () => {
    inp_email.value = "";
    inp_senha.value = "";
    inp_email.focus();
}

const efetuarLogin = (e) => {
    if( e.key === "Enter" || e.key === undefined){
        const { acesso, message } = verificaLogin(inp_email.value, inp_senha.value);
        if(acesso){
            alert(message);
            window.location.href = window.location.origin + "/lista-usarios.html";
        } else {
            alert(message)
        }
        resetarCampos();
    }
}

// Eventos.
btn_entrar.addEventListener("click", efetuarLogin )
inp_senha.addEventListener("keyup", efetuarLogin )
