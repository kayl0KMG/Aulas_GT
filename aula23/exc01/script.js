
//Usando o TRY/CATCH para tratar texto

// async function media (n1, n2) {
//     const media = n1 + n2 / 2
// return media
// }

// console.log(media(10,8))




// function media (n1, n2) {
//     // TRY e CATCH são como if/else
//     try { 
//         medias
//         return media
//     } catch (error) {
//         console.log(`deu ruim : ${error}`)
//     }

// }

// console.log(media(10,7))
// console.log('ola')

//////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\


async function fetchCep() {
    let cep = document.getElementById('cep').value
    const url = "https://viacep.com.br/ws/"+cep+"/json/"

    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

    async function listarCep(){
        if (document.getElementById('cep').value.length > 7){
            const lista = await fetchCep();
            console.log(lista.erro)
            if(!lista.erro){
                document.getElementById('logradouro').value =lista.logradouro
                document.getElementById('bairro').value =lista.bairro
                document.getElementById('localidade').value =lista.localidade 
                document.getElementById('uf').value =lista.uf
            }
            else {
                document.getElementById('cep-error').innerHTML = "Digite um Cep Válido!"
            }
        }
        else{
            document.getElementById('cep-error').innerHTML = ""
        }
    };
    
function busca(){
    listarCep()
}



 