function calcularImpacto() {
    let compostagem = Number(document.getElementById("compostagem").value);
    let irrigacao = Number(document.getElementById("irrigacao").value);
    let rotacao = Number(document.getElementById("rotacao").value);

    let impactoTotal = compostagem + irrigacao + rotacao;

    let mensagem = "";

    if (impactoTotal >= 80) {
        mensagem = "Excelente! Sua propriedade possui alto nível de sustentabilidade. 🌱";
    }
    else if (impactoTotal >= 50) {
        mensagem = "Bom trabalho! Continue adotando práticas sustentáveis. 🌿";
    }
    else {
        mensagem = "Há espaço para melhorar as ações sustentáveis. 🌎";
    }

    document.getElementById("resultado").innerHTML =
        `Impacto Sustentável: ${impactoTotal}%<br>${mensagem}`;
}
