alert("Bem-vindo à administração da loja de vinhos, Vinharia Agnelo! Por favor, preencha as informações solicitadas para prosseguir com a organização. \n PS: O sistema abaixo foi feito usando funções, para aderir aos requisitos, esse sistema foi gerado para demonstrar somente com alert, console.log e prompt");

let totalCadastros = 0;
let totalEstoqueBaixo = 0;

let safraMaisAntiga = 9999;
let vinhoMaisAntigo = "";

function validarTexto(valor) {
    return valor !== null && valor.trim() !== "";
}

function validarNumero(valor) {
    return !isNaN(valor) && parseInt(valor) > 0;
}

function verificarEstoqueBaixo(quantidade) {
    if (quantidade < 5) {
        totalEstoqueBaixo++;
        return true;
    }
    return false;
}

function classificarVinho(safra) {
    let anoAtual = new Date().getFullYear();
    let idade = anoAtual - safra;

    if (idade <= 3) {
        return "Jovem";
    }

    if (idade <= 10) {
        return "Amadurecido";
    }

    return "Antigo";
}

function exibirCadastro(nome, tipo, safra, quantidade, classificacao, estoqueBaixo) {

    alert("As informações do vinho foram registradas com sucesso! \n Consulte o console para conferir.");

    console.log("====================================");
    console.log("Informações do Vinho");
    console.log("Nome do vinho: " + nome);
    console.log("Tipo de vinho: " + tipo);
    console.log("Safra do vinho: " + safra);
    console.log("Quantidade em estoque: " + quantidade);
    console.log("Classificação: " + classificacao);

    if (estoqueBaixo) {
        console.log("Status do estoque: BAIXO");
    } else {
        console.log("Status do estoque: NORMAL");
    }
}

while (true) {

    let vinhoPromt = prompt("Digite o nome do vinho Agnello");

    while (!validarTexto(vinhoPromt)) {
        alert("Digite um nome válido.");
        vinhoPromt = prompt("Digite o nome do vinho Agnello");
    }

    let tipoVinho = prompt("Digite o tipo de vinho (Tinto, Branco, Rosé):");

    while (!validarTexto(tipoVinho)) {
        alert("Digite um tipo válido.");
        tipoVinho = prompt("Digite o tipo de vinho (Tinto, Branco, Rosé):");
    }

    let safraVinho = prompt("Digite a safra do vinho (ano):");

    while (!validarNumero(safraVinho)) {
        alert("Digite uma safra válida.");
        safraVinho = prompt("Digite a safra do vinho (ano):");
    }

    let quantidadeVinho = prompt("Digite a quantidade em estoque:");

    while (!validarNumero(quantidadeVinho)) {
        alert("Digite uma quantidade válida.");
        quantidadeVinho = prompt("Digite a quantidade em estoque:");
    }

    totalCadastros++;

    let classificacao = classificarVinho(parseInt(safraVinho));

    let estoqueBaixo = verificarEstoqueBaixo(parseInt(quantidadeVinho));

    if (parseInt(safraVinho) < safraMaisAntiga) {
        safraMaisAntiga = parseInt(safraVinho);
        vinhoMaisAntigo = vinhoPromt;
    }

    exibirCadastro(
        vinhoPromt,
        tipoVinho,
        safraVinho,
        quantidadeVinho,
        classificacao,
        estoqueBaixo
    );

    let continuar = prompt("Deseja cadastrar outro vinho? (S/N)");

    if (continuar === null || continuar.toUpperCase() == "S") {
        break;
    }
}

alert(
    "Cadastro finalizado!\n\n" +
    "Total de cadastros: " + totalCadastros +
    "\nVinhos com estoque baixo: " + totalEstoqueBaixo +
    "\nVinho mais antigo: " + vinhoMaisAntigo +
    "\nSafra mais antiga: " + safraMaisAntiga
);

console.log("=========== RESUMO FINAL ===========");
console.log("Total de cadastros: " + totalCadastros);
console.log("Vinhos com estoque baixo: " + totalEstoqueBaixo);
console.log("Vinho mais antigo: " + vinhoMaisAntigo);
console.log("Safra mais antiga: " + safraMaisAntiga);

var nomeCompleto = "";
var quantidade = "";
var email = "";
var telefone = "";
var endereco = "";
var vinho = "";
var formaDePagamento = "";
var valor = 0;

function informarNome(){
    nomecompleto = prompt("Digite seu nome completo:");
    alert("Nome completo informado: " + nomecompleto);
    document.getElementById("nome_completo").innerHTML = nomecompleto;
}
 
function informarQuantidade(){
    quantidade = prompt("Digite a quantidade desejada:");

    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Por favor, insira um número válido para a quantidade.");
        return informarQuantidade();
    }

    alert("Quantidade informada: " + quantidade);
    document.getElementById("quantidade").innerHTML = quantidade;
}

function informarEmail(){
    email = prompt("Digite seu e-mail:");
    alert("E-mail informado: " + email);
    document.getElementById("email").innerHTML = email;
}

function informarTelefone(){
    telefone = prompt("Digite seu telefone:");
    alert("Telefone informado: " + telefone);
    document.getElementById("telefone").innerHTML = telefone;
}

function informarEndereco(){
    endereco = prompt("Digite seu endereço:");
    alert("Endereço informado: " + endereco);
    document.getElementById("endereco").innerHTML = endereco;
}

function informarVinhoEscolhido(){

    vinho = prompt("Digite o nome do vinho desejado (1, 2 ou 3), em caso de dúvida, acesse a página de vinhos:");

    if (vinho === "1") {
        vinho = "Agnello Branco";
        valor = 89.90;
    }
    else if (vinho === "2") {
        vinho = "Agnello Tinto";
        valor = 79.90;
    }
    else if (vinho === "3") {
        vinho = "Agnello Rosado";
        valor = 69.90;
    }
    else{
        alert("Opção inválida. Por favor, escolha 1, 2 ou 3.");
        return informarVinhoEscolhido();
    }

    alert("Vinho informado: " + vinho);
    document.getElementById("vinho").innerHTML = vinho;
}

function informarFormaPagamento(){

    formaDePagamento = prompt("Digite a forma de pagamento desejada: credito, debito ou pix");

    alert("Forma de pagamento informada: " + formaDePagamento);

    document.getElementById("formaDePagamento").innerHTML = formaDePagamento;
}

function confirmarCompra() {

    if (
        nomecompleto === "" ||
        quantidade === "" ||
        email === "" ||
        telefone === "" ||
        endereco === "" ||
        vinho === "" ||
        formaDePagamento === ""
    ) {
        alert("Por favor, preencha todos os campos antes de confirmar a compra.");
        return;
    }

    document.getElementById("resumo_vinho").innerHTML = vinho;
    document.getElementById("resumo_quantidade").innerHTML = quantidade;
    document.getElementById("resumo_preco").innerHTML = "R$ " + valor.toFixed(2);
    document.getElementById("resumo_total").innerHTML = "R$ " + (valor * parseInt(quantidade)).toFixed(2);

    alert("Compra confirmada com sucesso! \nNota fiscal enviada para o console");

    console.log("Resumo da Compra:");
    console.log("Nome completo: " + nomecompleto);
    console.log("Quantidade: " + quantidade);
    console.log("E-mail: " + email);
    console.log("Telefone: " + telefone);
    console.log("Endereço: " + endereco);
    console.log("Vinho escolhido: " + vinho);
    console.log("Forma de pagamento: " + formaDePagamento);
    console.log("Preço unitário: R$ " + valor.toFixed(2));
    console.log("Total da compra: R$ " + (valor * parseInt(quantidade)).toFixed(2));
}