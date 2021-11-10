/*
// VARIAVEL- SERVE PARA ARMAZENAR COISAS, EX:
const produto = {
nome: 'Tenis Nike',
valor: 1000,
emEstoque: true
}

// FUNÇÕES- REALIZAM ALGUMA AÇÃO
function darOi() {
    alert('OI!')
}


//CONDICIONAIS- REALIZAM AÇOES COMFORME UMA CONDIÇAO
if(1===2) {
    darOi()

}
*/

//BUSCAR OS ITEMS DA TELA
    const itensPerguntasERespostas = document.querySelectorAll('.item');
    

//ENTENDER QUE O ITEM FOI CLICADO
itensPerguntasERespostas.forEach(function(item){
    item.addEventListener('click', function(){
        //VERIFICAR SE A PERGUNTA CLICADA ESTA ATIVA
        const estaAtiva = item.classList.contains('ativo')
        // SE A PERGUNTA NAO ESTA ATIVA
        if(!estaAtiva){
            //EU PRECISO FECHAR TODAS
            itensPerguntasERespostas.forEach(function(item){
                item.classList.remove('ativo')
            })
           //ABRIR A RESPOSTA ATUAL 
            item.classList.add('ativo')
           // SE A PERGUNTA ESTIVER ATIVA 
        } else{
            item.classList.remove('ativo')
        }
    })
})
