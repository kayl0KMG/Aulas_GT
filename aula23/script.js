// Promises:- Link API: https://dog.ceo/api/breeds/image/random

// O que são? São objetos que representam o sucesso ou a falha de uma
// operação ASSÍNCRONA.

// Javascript = Thread Única; Sequencial; Síncrono.

// Método para gerar um assincronismo no JS:
// setTimeout (() => {}, milisegundos);



// let randomNumber = 10; //Linha Síncrona

// setTimeout (() => {
//     randomNumber += 100;
//     console.log (randomNumber);
// } , 2000)

// console.log (randomNumber); //Linha Síncrona




// Uma das principais características é poder iniciar um processo que será 
//finalizado posteriormente.





const url = 'https://dog.ceo/api/breeds/image/random'
const dogImg = document.getElementById('dogImg')


function fetchDogs () {  // Função para buscar os Dogs na API
fetch (url) // fetch trabalha com uma promisse, realiza requisições de maneira assíncrona(permite que o programa  continue a execução enquanto aguarda que a operação seja concluída)
    .then (response => response.json()) 
    .then ((dogData) => {
        const dogUrl = dogData.message; //variavel que esta recebendo uma constante 
        displayDog(dogUrl);
    })
    .catch(error => console.log('Erro ao buscar o doguinho:', error));
}

// console.log(fetch())

function displayDog(dogUrl) {  // Função para preencher o HTML com a imagem do dog
    dogImg.src = dogUrl;  
}
fetchDogs();





//codigo 02
// Função que busca uma imagem aleatória de cachorro
async function fetchDogImg() { //async: esperando uma reposta
    try {
        // Usando o fetch para fazer a requisição para a API
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        // Verificando se a resposta pelo await foi bem-sucedida
        if (!response.ok) { // 'OK' se não for ok, é falsa
            throw new Error('Falha ao buscar a imagem');
        }
        // Convertendo a resposta para JSON
        const data = await response.json();
        // Preenchendo o src da imagem com o link retornado pela API
        document.getElementById('dogImg').src = data.message;
    } catch (error) {
        console.error('Erro:', error);
    }
}










