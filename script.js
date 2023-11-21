function validacao() {
    const nome = document.getElementById("nome").value;
    const email = document.querySelector("#email").value;
    const senha = document.getElementById("senha").value;
    const consenha = document.getElementById("consenha").value;

    if (consenha != senha) {
        window.alert('As senhas devem ser iguais, meu patrão!!')
        return
    }

    if (nome == '' || email == '' || senha == '') {
        window.alert('Preenche o campo, meu patrão!!')
        return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email)) {
        window.alert("DIGITE UM EMAIL QUE EXISTA ADERBAL")
        return
    }

    if (senha.length < 8) {
        window.alert('BOTE UMA SENHA DE RESPEITO COM MENOS DE OITO CARACTERES')
        return
    }


    window.alert("Cadastro Realizado")
}

function darkmode(){
    const pagina = document.body;
    const formulario = document.getElementById("formulario");

    formulario.classList.toggle("formulario")
    pagina.classList.toggle("dark-mode");

    const botao = document.getElementById('darkmode');
    const isdarkmode = document.body.classList.contains("dark-mode");
    
    if(isdarkmode === true){
    botao.textContent =  "Modo Claro"
    }else{
        botao.textContent =  "Modo Escuro"
    }
    }