//ex8 
const aluno = { nome: "Maria", idade: 17, turma: "2TDS" }; 
console.log(`Nome: ${aluno.nome}`); 
console.log(`Idade: ${aluno.idade}`); // CORRIGIDO: Estava escrito "Turma:" duas vezes
console.log(`Turma: ${aluno.turma}`); 

//9 Pegando apenas algumas propriedades 
const usuario = { 
  nome:"Pedro", 
  idade: 20, 
  email: "pedro@gmail.com", // CORRIGIDO: Faltava uma vírgula aqui
  cidade: "SP" 
}; 
console.log(`nome: ${usuario.nome} - ${usuario.email}`); 

//10 Desestruturação + Template Literal 
const filme = { titulo: "Interestelar", ano: 2014, diretor: "Christopher Nolan" }; 
const {titulo, ano, diretor} = filme; 
console.log(`${titulo} foi lançado em ${ano} e dirigido por ${diretor}.`); 

//11 
const carro = { marca:"Toyota", modelo: "Corolla", ano: 2024 }; 
console.log(`${carro.marca} ${carro.modelo} - Ano ${carro.ano}`); 

//12 
const produto = { nome: "Mouse", preco: 80 }; 
// CORRIGIDO: Usando desestruturação nos parâmetros para acessar 'nome' e 'preco' diretamente
const mostrarProduto = ({ nome, preco }) => { 
  console.log(`Produto: ${nome} - R$ ${preco}`); // Removido o 'return' desnecessário antes do console.log
} 
mostrarProduto(produto);

//13
const produto1 = {
    nome: "Mouse",
    preco: 80
};
const {nome, preco} = produto;
const mostrarproduto = (nome, preco) => { 
    return console.log(`Produto: ${nome} - R$ ${preco}`)
};

mostrarproduto(produto.nome, produto.preco);

//14
const pessoa = {
  nome: "Mariana",
  idade: 25,
  profissao: "Desenvolvedora"
};

const apresentarPessoa = ({nome,idade,profissao}) => {
 return `${nome} tem ${idade} e trabalho como ${profissao}`;
}

console.log(apresentarPessoa(pessoa))

