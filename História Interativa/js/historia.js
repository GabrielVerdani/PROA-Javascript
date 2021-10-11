var nome;

var inicio = `<label for="nome">Qual é o nome do seu personagem?</label>
<input type="text" name="nome" id="nome">
<button onclick=iniciar()>COMEÇAR!</button>`;

var elemento = document.getElementById("conteudo");

var conteudoA,
  ignorar,
  ignorarGato,
  atrasGato,
  pegarBateria,
  seguirGato,
  ignorarGato2,
  sentarAlmofada,
  perguntar,
  atacarPessoa,
  pegarBateria2,
  fugir,
  atacarPessoa2;

function carregarConteudo(conteudo) {
  elemento.innerHTML = conteudo;
}

function iniciar() {
  if (document.querySelector("#nome").value) {
    nome = document.querySelector("#nome").value;

    // Início
    var conteudoA = `<img src='' /> <h2>O Início</h2> <p>Você acorda em um lugar desconhecido. Olhando em volta, você não vê nada que se mexa. ${nome}, um robô com um pensamento quase humano se encontra perdido, em uma cidade completamente nova, diferente de tudo que já viu. Nela, existem diversos prédios quebrados, anúncios de coisas antigas e silêncio, apenas silêncio. Após andar por um tempo, você avista uma janela com a luz acesa em um dos prédios. Dela, você consegue ver um braço de robô pendurado, e uma fumaça saindo. Nenhum som pode ser escutado de lá.</p> <button onclick='carregarConteudo(predio)'>Ir até o quarto.</button> <button onclick='carregarConteudo(ignorar)'>Ignorar e continuar explorando</button>`;

    // Rota - Ignorar
    ignorar = `<img src='' /> <h2>Sem tempo pra isso</h2>  <p>Você decide ignorar e continuar andando, talvez não seja nada. Após alguns longos minutos andando, e olhando para todos os lados daquela cidade morta, você escuta um miado de um gato, bem longe daqui.</p> <button onclick='carregarConteudo(atrasGato)'>Ir atrás do gato</button> <button onclick='carregarConteudo(ignorarGato)'>Ignorar</button>`;

    ignorarGato = `<img src='' /> <h2>Armadilha?</h2> <p>Você decide não seguir aquele som. Talvez seja um erro no sistema, pode ser uma armadilha, nunca se sabe. Você continua andando, e sente que suas pernas ficam cada vez mais fracas. Após um tempo, você cai no chão. Suas pernas desligaram. Você começa a se arrastar, mas não demora muito até que seus braços percam o movimento. Você não consegue mais ouvir nada, e sua visão começa a escurecer. Sua bateria descarregou.</p>
        <button onclick='carregarConteudo(inicio)'>Recomeçar</button>`; // Fim

    atrasGato = `<img src='' /> <h2>Pspsps</h2>  <p>Você decide seguir o som e, após andar por alguns minutos, encontra um pequeno gato, tendo metade de seu corpo completo por circuitos e metais. Em sua barriga brilha uma luz verde, e você consegue avistar uma bateria, bastante parecida com a sua. A luz ao lado dela diz "98%".</p> <button onclick='carregarConteudo(pegarBateria)'>Pegar a bateria do gato</button> <button onclick='carregarConteudo(seguirGato)'>Seguir gato</button>`;

    pegarBateria = `<img src='' /> <h2>Você não é um gato</h2> <p>Você olha para o gato, e olha o estado da sua bateria. Você não resiste e tenta pegar a bateria para você. O gato desliga, e cai no chão, mole. Você troca sua bateria rapidamente, e se sente com muito mais energia. Suas pernas e braços não estão tão fracos, sua visão melhorou, e todas as funcionalidades voltaram ao normal. Após alguns segundos, você começa a ouvir sons, de todos os lados, não sabe daonde vem. Sua visão começa a ficar com muito ruído, seus braços movem incontrolavelmente e você cai no chao. Sua visão começa a escurecer. Aparentemente aquela bateria não era compatível com a sua. Você quebrou.</p>
        <button onclick='carregarConteudo(inicio)'>Recomeçar</button>`; // Fim

    seguirGato = `<img src='' /> <h2>Dormindo</h2>  <p>Você decide seguir aquele gato, que parece saber para onde está indo. Após apeoximadamente dois minutos, passando por diversos prédios e não encontrando uma alma viva, o gato se senta em um dispositivo que parece uma almofada, fecha os olhos, e sua barriga começa a brilhar amarelo. Ao lado dele há um dispositivo parecido.</p> <button onclick='carregarConteudo(sentarAlmofada)'>Sentar no dispositivo ao lado</button> <button onclick='carregarConteudo(ignorarGato2)'>Ignorar e continuar explorando</button>`;

    ignorarGato2 = `<img src='' /> <h2>Armadilha?</h2> <p>Você decide não se sentar, vai saber o que aquele dispositivo está fazendo. Antes a barriga estava verde, agora está amarelo, quanto mais vermelho pior, não é? Então você deixa o gato sozinho e vai embora, e continua andando pela cidade, entrando nos prédios, explorando as lojas, e continua não encontrando nenhuma alma viva. Até que suas pernas ficam fracas, e você cai no chão. Ao tentar se arrastar, seus braços perdem o movimento. De longe, você consegue ouvir barulho, parece com o gato, mas tem um outro som, uma voz humana? De qualquer forma, você não consegue ouvir mais, e sua visão começa a escurecer. Sua bateria descarregou.</p> 
        <button onclick='carregarConteudo(inicio)'>Recomeçar</button>`; // Fim

    sentarAlmofada = `<img src='' /> <h2>????</h2>  <p>Você se senta ao lado do gato, olha pra frente, fecha os olhos e... Como uma noite de sono, se passam segundos, minutos, horas... dias? Você não sabe, mas ao acordar, o gato não está mais ao seu lado. Na verdade, agora há algo que se parece com um humano. Ele de pé, parado, olhando para frente, com os punhos serrados, e os olhos fechados.</p> <button onclick='carregarConteudo(perguntar)'>"Quem é você?"</button> <button onclick='carregarConteudo(perguntar)'>"Onde eu estou?"</button> <button onclick='carregarConteudo(perguntar)'>"O que aconteceu?"</button>`;

    perguntar = `<img src='' /> <h2>????</h2>  <p>Ele te responde, porém tudo que você consegue ouvir é um barulho ensurdecedor, vindo de todos os lados. Nem a sua própria voz você reconhece. Após falar com você por alguns segundos, ele vira bruscamente pra frente, e uma das mãos se abre, derrubando uma bateria, muito parecida com a sua. Você decide chegar seu nível de bateria, e está em 0%. Não tem motivos para você estar ligado nesse momento.</p> <button onclick='carregarConteudo(atacarPessoa)'>Atacar a pessoa ao seu lado</button> <button onclick='carregarConteudo(pegarBateria2)'>Pegar bateria do chão</button>`;

    atacarPessoa = `<img src='' /> <h2>O desconhecido</h2>  <p>Ao tentar atacar, você percebe que não tem energia para chegar até ele, e seus braços ficam moles ao seu lado. Ele percebe o que você tentou fazer, e te empurra, o tirando da plataforma, a única coisa que lhe mantia vivo. Sua bateria acabou.</p><button onclick='carregarConteudo(inicio)'>Recomeçar</button>`;

    pegarBateria2 = `<img src='' /> <h2>Finalmente carregado</h2>  <p>Você tenta com muito cuidado pegar a bateria que caiu próximo a você. Depois de um certo esforço, você finalmente pega a bateria e percebe que está escrito "${nome}" do lado dela. Ao conectar, seu estado de bateria atual é 96%. Você se sente muito mais forte do que antes, com muito mais energia.</p> <button onclick='carregarConteudo(atacarPessoa2)'>Atacar a pessoa ao seu lado</button> <button onclick='carregarConteudo(fugir)'>Fugir dessa cidade</button>`;

    fugir = `<img src='' /> <h2>Fora da cidade</h2>  <p>Você corre, corre e corre. Com a bateria carregada, você corre muito rápido. A coisa que estava ao seu lado tenta ir atrás de você mas desiste após alguns minutos. Você finalmente sai da cidade, e na sua frente não há mais nada, apenas areia, cinzas, e algumas coisas queimadas. Você continua correndo por alguns minutos, horas, dias... Você se perde. Não há mais nada ao seu redor, você não sabe mais se está fazendo progresso, você nem consegue mais correr. Sua bateria está em 2%. Parece que você chegou a um fim.</p><button onclick='carregarConteudo(inicio)'>Recomeçar</button>`;

    atacarPessoa2 = `<img src='' /> <h2>Tudo para sobreviver</h2>  <p>Você ataca a coisa que se parece um humano e, de bateria cheia, você é muito mais forte do que antes. Ele cai no chão e derruba uma outra bateria de sua mão, de mesmo formato, mas com um nome ao lado: "ReixCat". Você sabe que essa cidade não é pacífica, e que vai precisar fazer tudo o que é preciso para se manter carregado.</p><h1>Fim.</h1><button onclick='carregarConteudo(inicio)'>Recomeçar</button>`;

    // Rota Prédio
    predio = `<img src='' /> <h2>Prédio</h2>  <p>Você decide ignorar e continuar andando, talvez não seja nada. Após alguns longos minutos andando, e olhando para todos os lados daquela cidade morta, você escuta um miado de um gato, bem longe daqui.</p> <button onclick='carregarConteudo(atrasGato)'>Ir atrás do gato</button> <button onclick='carregarConteudo(ignorarGato)'>Ignorar</button>`;

    carregarConteudo(conteudoA);
  }
}

carregarConteudo(inicio);
