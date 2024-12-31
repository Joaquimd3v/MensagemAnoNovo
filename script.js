// Lista de mensagens
const mensagens = [
    "Pessoas boas não deveriam ter anos ruins, e você é uma delas. Você é uma pessoa especial e sou grato por tê-la na minha vida.",
    "Que este novo ano traga alegria, saúde e realizações para você e sua família.",
    "Que o seu sorriso seja o reflexo da felicidade neste novo ano que se inicia.",
    "Um brinde a um novo ano cheio de oportunidades e conquistas!",
    "Que neste novo ano, a felicidade esteja sempre ao seu alcance e a paz em seu coração.",
    "Que seus sonhos se tornem realidade e que a felicidade seja sua companhia constante.",
    "A cada novo ano, temos uma chance de recomeçar. Que este seja o seu melhor começo!",
    "Que o próximo ano seja uma jornada de realizações, sorrisos e momentos inesquecíveis.",
    "A vida é feita de momentos especiais. Que o próximo ano seja cheio de muitos deles.",
    "Que a esperança e a felicidade sejam suas parceiras neste novo ciclo que se inicia.",
    "Que o amor e a amizade sejam as bases do seu novo ano!",
    "Que cada dia deste novo ano traga uma razão para sorrir e agradecer.",
    "Que o próximo ano seja repleto de saúde, amor e novas conquistas para você e todos que você ama.",
    "No novo ano, que a coragem, a paz e a felicidade iluminem seus passos.",
    "Que o Ano Novo traga a paz que você merece, e que cada dia seja uma nova oportunidade para conquistar seus sonhos.",
    "Pessoas como você merecem apenas momentos incríveis. Que o seu ano novo seja repleto de felicidade e realizações.",
    "Você é uma daquelas almas especiais que tornam o mundo mais bonito. Que 2024 seja um ano repleto de alegria e sucesso.",
    "Neste novo ciclo, desejo que você continue a brilhar e a inspirar todos ao seu redor, conquistando tudo o que seu coração deseja.",
    "Que a gratidão, a saúde e as boas energias te acompanhem neste novo ano. Você merece tudo de melhor, e que este ano seja incrível para você.",
    "Em um mundo tão agitado, pessoas como você são um verdadeiro tesouro. Que o Ano Novo seja tão especial quanto sua alma generosa.",
];

// Verifica se há um índice salvo no localStorage e, caso contrário, começa do início
let indiceMensagem = parseInt(localStorage.getItem('indiceMensagem')) || 0;

// Função para exibir a próxima mensagem
function exibirProximaMensagem() {
    // Verifica se há mensagens para exibir
    if (indiceMensagem < mensagens.length) {
        // Exibe a mensagem no elemento da página
        document.querySelector('.message').innerText = mensagens[indiceMensagem];

        // Atualiza o índice para a próxima mensagem
        indiceMensagem++;

        // Salva o novo índice no localStorage para manter o estado entre recargas
        localStorage.setItem('indiceMensagem', indiceMensagem);
    } else {
        // Caso todas as mensagens tenham sido exibidas
        document.querySelector('.message').innerText = "Todas as mensagens foram exibidas.";
    }
}

// Exibe a primeira mensagem ao carregar a página
exibirProximaMensagem();

// Função para exibir a segunda parte após a animação de digitação
setTimeout(function() {
    // Esconde a primeira parte
    document.querySelector('.message').style.display = 'none';
    
    // Exibe a segunda parte
    document.querySelector('.outer').style.display = 'block';
}, 12000); // 12 segundos para a animação de digitação terminar
