// // let personagens = ['frodo','alfredo', 'genadalf', 'pippin', 'aragon', 'legolas'];

// // personagens.push('boromir')
// // //push: adiciona dados no final do array
// // console.log(personagens)


// // personagens.unshift('Sauron')
// // //unshiftt: adiciona daados no inico do array
// // console.log(personagens)



// // personagens.pop('boromir');
// // console.log(personagens);
// // //pop: retira o ultimo elemento do array


// // personagens.shift('sauro')
// // console.log(personagens)
// // //shift: retire o primeiro dado do array


// // let procura = personagens.includes
// // ('gendalf');
// // console.log(procura)
// // // includes: verifica se um certo elemento está presnete no array


// // let procuraIndice = personagens.indexOf('frodo');
// // //indexOF: procura indice no elemento no array
// // personagens[1] = 'gandolf o Cinzento';
// // console.log(procuraIndice);
// // console.log(personagens)


// // let selecaoPersonagem = personagens.slice(0, 4);
// // //slice: seleciona com -n, faaz com que pegue do ultimo ate o numero selecionado
// // console.log(selecaoPersonagem)

// // let outrasSelecao = personagens.slice(-4)
// // console.log(personagens)
// // console.log(outrasSelecao)


// // let personagens2 = ["fheanor", "Fingolfin"];
// // let arrayConcat = personagens.concat(personagens2)
// // //concat: junta os arrays e os itens e devolve um array sem alterar originais
// // console.log(arrayConcat)


// // let juntarCom = personagens.join('-')
// // //join: Ele junta os elementos de acordo com o que a gente passa como argumento
// // console.log(juntarCom)

// // let personagens = ['frodo','gendalf','pippin','aragon','legolas']

// // for(let indice = 0; indice < personagens.length; indice ++){
// //     let elemento = personagens[indice];
// //     console.log(`o personagem ${elemento} esta no indice ${indice}`)
// // }




// // let fila = []
// // let opcao = "";


// // do {
// //     let JuntarPaciente = fila.join("-");
// //     opcao = prompt(`
// //         \n Lista de pacientes: ${JuntarPaciente}
// //         \n Escolha uma opção
// //         \n1 - Novo paciente
// //         \n2 - consultar paciente
// //         \n3 - sair..
// //     `)


// // switch (opcao) { 

// //     case"1":
// //     let novoPaciente = prompt('Digite o nome do paciente: ')
// //     fila.push(novoPaciente)
// //     break;

// //     case"2":
// //     let pacienteConsultado = fila.shift();
// //     if(!pacienteConsultado){
// //         alert("Não existe paciente na fila")
// //     } else {
// //         alert(`o ${pacienteConsultado} foi consultado`)
// //     }
// //     break;

// //     case"3":
// //     alert('programa encerrado')
// //     break; 
// //     default:
// //     break;
// // } 
// // } while(opcao!= '3')




// // let listaDevs = [
// //     {
// //         nome: "David",
// //         idade: 29,
// //         profissao: "DevFront",
// //         tecnologias: ["React", "Next", "TailWind"]
// //     },
// //     {
// //         nome: "Eduardo",
// //         idade: 22,
// //         profissao: "Dev Java",
// //         tecnologias: ["Spring", "Hibernate"]
// //     },
// //     {
// //         nome: "Bryan",
// //         idade: 25,
// //         profissao: "Dev Mobile",
// //         tecnologias: ["React-Native", "Styled-component", "TailWind"]
// //     }
// // ]

// // console.log(listaDevs);

// // const novoDev = {
// //     nome = '';
// //     idade = ;
// //     profissao = ;

// // }





// // for(let i = 0; i < listaDevs.length; i++){
// //     console.log(``)
// // }


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

























