//15 
const calcularDesconto = (preco,desconto) => {
    return preco - desconto;
}
console.log(calcularDesconto(200, 20));

//16 
const produto = {
  nome: "Headset",
  preco: 200,
  desconto: 20
};

const calculoPreco = ({preco, desconto }) => {
 return preco - desconto;
}

console.log(`O ${produto.nome} custava R$ ${produto.preco} e agora custa R$ ${calculoPreco(produto)}`);


//17 
const aluno = {
  nome: "Lucas",
  nota1: 8,
  nota2: 6
};

const calcularMedia = ({nome, nota1, nota2}) => {
    return (nota1 + nota2) /2;
};

console.log(`${aluno.nome} ficou com média ${calcularMedia(aluno)}`);

//18 - 
const verificarIdade = (idade) => {
    if (idade >= 18) {
        return `Maior de idade` 
    } else {
        return `Menor de idade`
    }
};

console.log(verificarIdade(17));

//19 - 
const jogo = {
  titulo: "Minecraft",
  genero: "SandBox",
  preco: 99,
};

const exibirJogo = ({titulo, genero, preco}) => {
    return `${titulo} é um jogo do gênero ${genero} e custa R$ ${preco}.`
};

console.log(exibirJogo(jogo));

//20 - Perfeito!
const pedido = {
  produto: "Teclado Mecânico",
  preco: 250,
  quantidade: 2
};

const calcularTotal = ({produto, preco, quantidade}) => {
    return quantidade * preco;
}
const {produto: nomeProduto, preco: precoPedido, quantidade: qtdPedido} = pedido; 


console.log(`Produto: ${pedido.produto}`);
console.log(`Quantidade: ${pedido.quantidade}`);
console.log(`Valor unitário: ${pedido.preco}`);
console.log(`Total: ${calcularTotal(pedido)}`);

//Desafio Final 
const notebook = {
  marca: "Dell",
  modelo: "Inspiron",
  preco: 3500,
  desconto: 500
};

const {marca: marcaNote, modelo: modeloNote, preco: precoNote, desconto: descontoNote} = notebook;

const calcularPrecoFinal = (preco, desconto) => {
    return preco - desconto;
};

console.log(`Notebook ${notebook.marca} ${notebook.modelo}`);
console.log(`Preço original: R$ ${notebook.preco}`);
console.log(`Desconto: R$ ${notebook.desconto}`);
console.log(`Preço final: R$ ${calcularPrecoFinal(notebook.preco, notebook.desconto)}`);