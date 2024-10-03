// let imoveisCadastrados = [];
// let opcao = '';

// do {
//     opcao = prompt(`
//         Bem vindo ao cadastro de imoveis 
//         Total de imóveis: ${imoveis.length} 

//         \n1 - Novo imovel
//         \n2 - Listar 
//         \n3 - sair..
//        `)

//     switch (opcao) {

//         case '1':
//             let imovel = {};
//             imovel.nome = prompt('Qual o nome do proprietario? ')
//             imovel.quartos = parseInt(prompt('Quantos quartos possui o imovel? '))
//             imovel.banheiro = parseInt(prompt('Quantos banheiros possui o imovel? '))
//             imovel.garagem = parseInt(prompt('possui garagem? sim/nao '))

//             let salvarImovel = confirm(`
//         Deseja salavr este imovel?
//         proprietario: ${imovel.nome} \n 
//         quartos: ${imovel.quartos} \n 
//         banheiros: ${imovel.banheiro} \n 
//         garagem: ${imovel.garagem} \n 
//     `)

//             if (salvarImovel) {
//                 imoveisCadastrados.push(imovel)
//             }

//             break;


//         case '2':
//             if (imoveisCadastrados.length === 0) {
//                 alert('nao existe imoveis cadastrados')
//             } else {
//                 for (let i = 0; i < imoveisCadastrados.length; i++) {
//                     alert(`
//                 imoveis:

//              Proprietario: ${imoveisCadastrados[i].nome} \n
//             Quartos: ${imoveisCadastrados[i].quartos} \n
//             Banheiros: ${imoveisCadastrados[i].banheiro} \n
//              Garagem: ${imoveisCadastrados[i].garagem} \n


//             `)
//                 }
//             }
//             break;

//         case '3':
//             break;
//         default:
//             alert('programa encerrado');
//             break;
//     }

// } while (opcao != "3")



// function saudarUsuario(nome = "mandioca"){
//     console.log(`Ola minino ${nome}`);
// }

// saudarUsuario("lucas")



// function dobro(numero = 0){
//     console.log(`O dobro do numero ${numero} é igual a ${numero * 2} `)
// }

// dobro();



// var number1 = parseInt(prompt('Digite primeiro numero: '))
// var number2 = parseInt(prompt('Digite segundo numero: '))

// function somarNumeros(a,b){
//     console.log(`O resultado dos numeros informados são: ${a + b}`)
// }




// function mediaDoAluno(num1, num2){
//     let media = (num1 + num2) / 2
//     return media
// }

// let mediaFinal = mediaDoAluno(10,10);

// console.log(mediaDoAluno(9, 9));

// console.log(mediaFinal)


function cadastrarUsuarios(validacao){

}

function validacao(){
    console.log()
}


