function conferirSenha() {
    var senhaCorreta = "17/09/2022";
    var senhaFornecida = document.getElementById("senha").value;
    if (senhaFornecida === senhaCorreta) {
        alert("correto");
        window.location.href = "./carta/carta.component.html";
    }
    else {
        alert("Meu deus amorzinho, dica coloca no seguinte formato 00/00/0000 \n te amo amor, tenta de novo.");
    }
}
