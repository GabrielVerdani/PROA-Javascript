var nome;

var inicio = `<label for="nome">Qual é o nome do seu personagem?</label>
<input type="text" name="nome" id="nome" placeholder="Ex: 'Gabriel'">
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
    var conteudoA = `<h2>O Início</h2><img src='./imagens/inicio.png' /><p>Você acorda em um lugar desconhecido. Olhando em volta, você não vê nada que se mexa. ${nome}, um robô com um pensamento quase humano se encontra perdido, em uma cidade completamente nova, diferente de tudo que já viu. Nela, existem diversos prédios quebrados, anúncios de coisas antigas e silêncio, apenas silêncio. Após andar por um tempo, você avista uma janela com a luz acesa em um dos prédios. Dela, você consegue ver um braço de robô pendurado, e uma fumaça saindo. Nenhum som pode ser escutado de lá.</p> <button onclick='carregarConteudo(predio)'>Ir até o quarto.</button> <button onclick='carregarConteudo(ignorar)'>Ignorar e continuar explorando</button>`;

    // Rota - Ignorar
    ignorar = `<h2>Sem tempo pra isso</h2> <img src='./imagens/ignorar.png' />  <p>Você decide ignorar e continuar andando, talvez não seja nada. Após alguns longos minutos andando, e olhando para todos os lados daquela cidade morta, você escuta um miado de um gato, bem longe daqui.</p> <button onclick='carregarConteudo(atrasGato)'>Ir atrás do gato</button> <button onclick='carregarConteudo(ignorarGato)'>Ignorar</button>`;

    ignorarGato = ` <h2>Armadilha?</h2><img src='./imagens/desligando.png' /><p>Você decide não seguir aquele som. Talvez seja um erro no sistema, pode ser uma armadilha, nunca se sabe. Você continua andando, e sente que suas pernas ficam cada vez mais fracas. Após um tempo, você cai no chão. Suas pernas desligaram. Você começa a se arrastar, mas não demora muito até que seus braços percam o movimento. Você não consegue mais ouvir nada, e sua visão começa a escurecer. Sua bateria descarregou.</p>
        <button onclick='carregarConteudo(inicio)'>Recomeçar</button>`; // Fim

    atrasGato = ` <h2>Pspsps</h2> <img src='./imagens/gato.png' />  <p>Você decide seguir o som e, após andar por alguns minutos, encontra um pequeno gato, tendo metade de seu corpo completo por circuitos e metais. Em sua barriga brilha uma luz verde, e você consegue avistar uma bateria, bastante parecida com a sua. A luz ao lado dela diz "98%".</p> <button onclick='carregarConteudo(pegarBateria)'>Pegar a bateria do gato</button> <button onclick='carregarConteudo(seguirGato)'>Seguir gato</button>`;

    pegarBateria = `<h2>Você não é um gato</h2> <img src='./imagens/incompativel.png' /> <p>Você olha para o gato, e olha o estado da sua bateria. Você não resiste e tenta pegar a bateria para você. O gato desliga, e cai no chão, mole. Você troca sua bateria rapidamente, e se sente com muito mais energia. Suas pernas e braços não estão tão fracos, sua visão melhorou, e todas as funcionalidades voltaram ao normal. Após alguns segundos, você começa a ouvir sons, de todos os lados, não sabe daonde vem. Sua visão começa a ficar com muito ruído, seus braços movem incontrolavelmente e você cai no chao. Sua visão começa a escurecer. Aparentemente aquela bateria não era compatível com a sua. Você quebrou.</p>
        <button onclick='carregarConteudo(inicio)'>Recomeçar</button>`; // Fim

    seguirGato = `<h2>Dormindo</h2> <img src='./imagens/almofadas.png' />  <p>Você decide seguir aquele gato, que parece saber para onde está indo. Após aproximadamente dois minutos, passando por diversos prédios e não encontrando uma alma viva, o gato se senta em um dispositivo que parece uma almofada, fecha os olhos, e sua barriga começa a brilhar amarelo. Ao lado dele há um dispositivo parecido.</p> <button onclick='carregarConteudo(sentarAlmofada)'>Sentar no dispositivo ao lado</button> <button onclick='carregarConteudo(ignorarGato2)'>Ignorar e continuar explorando</button>`;

    ignorarGato2 = `<h2>Armadilha?</h2> <img src='./imagens/desligando.png' /> <p>Você decide não se sentar, vai saber o que aquele dispositivo está fazendo. Antes a barriga estava verde, agora está amarelo, quanto mais vermelho pior, não é? Então você deixa o gato sozinho e vai embora, e continua andando pela cidade, entrando nos prédios, explorando as lojas, e continua não encontrando nenhuma alma viva. Até que suas pernas ficam fracas, e você cai no chão. Ao tentar se arrastar, seus braços perdem o movimento. De longe, você consegue ouvir barulho, parece com o gato, mas tem um outro som, uma voz humana? De qualquer forma, você não consegue ouvir mais, e sua visão começa a escurecer. Sua bateria descarregou.</p> 
        <button onclick='carregarConteudo(inicio)'>Recomeçar</button>`; // Fim

    sentarAlmofada = `<h2>????</h2> <img src='./imagens/homem.png' />  <p>Você se senta ao lado do gato, olha pra frente, fecha os olhos e... Como uma noite de sono, se passam segundos, minutos, horas... dias? Você não sabe, mas ao acordar, o gato não está mais ao seu lado. Na verdade, agora há algo que se parece com um humano. Ele de pé, parado, olhando para frente, com os punhos serrados, e os olhos fechados.</p> <button onclick='carregarConteudo(perguntar)'>"Quem é você?"</button> <button onclick='carregarConteudo(perguntar)'>"Onde eu estou?"</button> <button onclick='carregarConteudo(perguntar)'>"O que aconteceu?"</button>`;

    perguntar = `<h2>????</h2> <img src='./imagens/homem2.png' /> <p>Ele te responde, porém tudo que você consegue ouvir é um barulho ensurdecedor, vindo de todos os lados. Nem a sua própria voz você reconhece. Após falar com você por alguns segundos, ele vira bruscamente pra frente, e uma das mãos se abre, derrubando uma bateria, muito parecida com a sua. Você decide checar seu nível de bateria, e está em 0%. Não tem motivos para você estar ligado nesse momento.</p> <button onclick='carregarConteudo(atacarPessoa)'>Atacar a pessoa ao seu lado</button> <button onclick='carregarConteudo(pegarBateria2)'>Pegar bateria do chão</button>`;

    atacarPessoa = `<h2>Sem forças</h2> <img src='./imagens/desligando.png' />  <p>Ao tentar atacar, você percebe que não tem energia para chegar até ele, e seus braços ficam moles ao seu lado. Ele percebe o que você tentou fazer, e te empurra, o tirando da plataforma, a única coisa que lhe mantia vivo. Sua bateria acabou.</p><button onclick='carregarConteudo(inicio)'>Recomeçar</button>`;

    pegarBateria2 = `<h2>Finalmente carregado</h2> <img src='./imagens/homem3.png' />  <p>Você tenta com muito cuidado pegar a bateria que caiu próximo a você. Depois de um certo esforço, você finalmente pega a bateria e percebe que está escrito "${nome}" do lado dela. Ao conectar, seu estado de bateria atual é 96%. Você se sente muito mais forte do que antes, com muito mais energia.</p> <button onclick='carregarConteudo(atacarPessoa2)'>Atacar a pessoa ao seu lado</button> <button onclick='carregarConteudo(fugir)'>Fugir dessa cidade</button>`;

    fugir = `<h2>Fora da cidade</h2> <img src='./imagens/mundoVazio.png' /> <p>Você corre, corre e corre. Com a bateria carregada, você corre muito rápido. A coisa que estava ao seu lado tenta ir atrás de você mas desiste após alguns minutos. Você finalmente sai da cidade, e na sua frente não há mais nada, apenas areia, cinzas, e algumas coisas queimadas. Você continua correndo por alguns minutos, horas, dias... Você se perde. Não há mais nada ao seu redor, você não sabe mais se está fazendo progresso, você nem consegue mais correr. Sua bateria está em 2%. Parece que você chegou a um fim.</p><button onclick='carregarConteudo(inicio)'>Recomeçar</button>`;

    atacarPessoa2 = `<h2>Tudo para sobreviver</h2> <img src='./imagens/fim.png' />  <p>Você ataca a coisa que se parece um humano e, de bateria cheia, você é muito mais forte do que antes. Ele cai no chão e derruba uma outra bateria de sua mão, de mesmo formato, mas com um nome ao lado: "ReixCat". Você sabe que essa cidade não é pacífica, e que vai precisar fazer tudo o que é preciso para se manter carregado.</p><h1>Fim.</h1><button onclick='carregarConteudo(inicio)'>Recomeçar</button>`;

    // Rota Prédio
    predio = `<h2>Prédio</h2> <img src='./imagens/porta.png' />  <p>Você entra num prédio completamente vazio, e não escuta nenhum som além de algo eletrocutado.<br>
    Você segue andando até o quarto iluminado, e no caminho não encontra nada, nem uma alma viva, nenhum som além daquele.
    Na fresta da porta do quarto sai uma luz extremamente forte, você não tem ideia do que pode ser.</p> <button onclick='carregarConteudo(quarto)'>Abrir a porta</button> <button onclick='carregarConteudo(predio2)'>Sair e explorar o resto do prédio</button>`;

    predio2 = `<h2>Não aceite doce de estranhos</h2> <img src='./imagens/incompativel.png' /> <p>Você passa um tempo explorando o resto do prédio, alguns minutos, procurando algo que possa te recarregar... Após alguns minutos andando você vê um ratinho, que corre pra um dos quartos. Entrando nesse quarto, você encontra uma bateria jogada em cima de uma das camas. Você rapidamente, com 2 minutos de bateria restante, troca sua bateria com essa nova, mas infelizmente, ela não é compatível. Você perde controle do seu corpo por um tempo, e ele cai duro no chão. Você desligou.</p>
        <button onclick='carregarConteudo(inicio)'>Recomeçar</button>`; // Fim

    quarto = `<h2>Quarto</h2> <img src='./imagens/visorDanificado.png' /> <p>Abrindo a porta, uma luz extremamente forte danifica o seu visor, e tudo que você consegue ver é a cor branca. Um som de choque sai da sua direita, e um cheiro de fumaça toma o quarto. Consertar o seu visor vai levar tempo, todas as suas outras funções serão desligadas durante o conserto, e sua bateria está próxima do fim.</p>
    
    <p>Tempo restante de bateria: 27 minutos.<br>
	  Tempo para consertar visor: 17 minutos.</p>

    <p>Você escuta uma voz fina, da sua direita: "${nome}?"</p>

    <button onclick='carregarConteudo(quartoQueme)'>"Quem é você?"</button>
    <button onclick='carregarConteudo(consertarVisorA)'>Ignorar, se sentar, e começar a consertar imediatamente seu visor.</button>`;

    quartoQueme = `<h2>Carla</h2> <img src='./imagens/visorDanificado.png' /> <p>"Sou eu, ${nome}, Carla, você não se lembra? Você estava desligado quando acordei, então fui para a cidade procurar recursos para te ajudar. Achei que estava sozinha aqui, mas um homem chegou com essa luz e um aparelho de som, não sei o que era mas danificou todo o meu equipamento, ele arrancou meu braço e acredito que foi embora. Felizmente consegui consertar o meu visor, mas acho que sem meu braço eu não tenho muito tempo viva."</p>
    
    <p>Tempo restante de bateria: 25 minutos.
		Tempo para consertar visor: 17 minutos.</p>

    <button onclick='carregarConteudo(quartoAjudar)'>"E como eu posso te ajudar?"</button>
    <button onclick='carregarConteudo(consertarVisorB)'>Ignorar, se sentar, e começar a consertar imediatamente seu visor.</button>`;

    quartoAjudar = `<h2>Tentando ajudar</h2> <img src='./imagens/visorDanificado.png' /> <p>"Eu não sei, você provavelmente não consegue ver nada, mas ele largou o meu braço da janela, acredito que ele só pegou uma peça dele. Se você conseguir pegá-lo pra mim, eu poderia consertar seu visor, e poderiamos sair daqui finalmente."</p>
    
    <p>Tempo restante de bateria: 23 minutos.
		Tempo para consertar visor: 17 minutos.</p>

    <button onclick='carregarConteudo(pedirInstrucoes)'>Pedir instruções para pegar o braço.</button>
    <button onclick='carregarConteudo(consertarVisorC)'>Consertar visor.</button>`;

    pedirInstrucoes = `<h2>Bom em seguir instruções</h2> <img src='./imagens/visorDanificado.png' /> <p>"Está bem próximo daí, só se levanta, vira 34 graus para a esquerda, anda 46cm para frente e aponte seu braço para frente, imagino que vá esbarrar nele, só tenha cuidado para não derrubá-lo!"</p>
    
    <p>Tempo restante de bateria: 23 minutos.
		Tempo para consertar visor: 17 minutos.</p>

    <button onclick='luck()'>Tentar pegar o braço</button>
    <button onclick='carregarConteudo(consertarVisorC)'>Consertar visor.</button>`;

    win = `<h2>Por pouco</h2> <img src='./imagens/visorDanificado.png' /> <p>Você esbarra no braço e ele quase cai, mas você o segura rapidamente.
		Você refaz os seus paços de volta e tenta entregá-lo à Carla. Ela te dá instruções exatas de como e onde você deve colocá-lo, e você segue. Isso toma um pouco de seu tempo.</p>
    
    <p>Tempo restante de bateria: 16 minutos.
		Tempo para consertar visor: 17 minutos.</p>

    <button onclick='carregarConteudo(win2)'>Continuar</button>`;

    win2 = `<h2>Como é bom ver!</h2> <img src='./imagens/carlaConserta.png' />  <p>Carla, agora com seu braço consertado, começa a emitir alguns sons, como se estivesse consertando algo. Rapidamente você ouve sons de passos, ela se levanta, e você a sente atrás de você. Ela começa a mexer na sua cabeça, e de repente, você está vendo novamente! Porém, você ainda não se lembra dela.</p>
    
    <p>Tempo restante de bateria: 10 minutos.</p>

    <button onclick='carregarConteudo(win3)'>Continuar</button>`;

    win3 = `<h2>Como de fábrica</h2> <img src='./imagens/carla.png' /> <p>"Minha bateria está acabando, eu preciso recarregar rápido", você diz. Carla rapidamente procura em suas caixas uma bateria nova. Com muito medo de não ser compatível, ela troca a bateria dela mesma primeiro e depois te dá a bateria dela, com um rótulo ao lado escrito "Carla".</p>
    
    <p>Tempo restade de bateria: Aproximadamente 7 dias.</p>

    <button onclick='carregarConteudo(consertarNave)'>Tentar consertar a sua nave com Carla</button>
    <button onclick='carregarConteudo(homemMisterioso)'>Ir atrás do homem misterioso com Carla</button>`;

    consertarNave = `<h2>Uma nave?</h2> <img src='./imagens/nave1.png' />  <p>Com sua bateria cheia, e totalmente consertados, Carla te leva até a nave que vocês caíram. Não é o mesmo local que você acordou, é como se todas as suas memórias antes daquilo não existissem. Vocês chegam na nave, e começam a consertá-la lentamente. Após alguns dias indo e voltando da cidade, coletando diversos recursos e utilizando a habilidade incrível de Carla para reparos. </p>

    <button onclick='carregarConteudo(consertarNave2)'>Continuar</button>`;

    consertarNave2 = `<h2>De volta para casa</h2> <img src='./imagens/nave2.png' /> <p>Você se senta na nave, Carla te conecta à nave com um cabo em sua cabeça, ela se senta no assento ao seu lado, se conecta também, e vocês saem desse planeta. Ao olhar para trás, você percebe que o planeta era completamente deserto, e tudo o que há é aquela pequena cidade em ruínas. </p>

    <h2>Fim.</h2>

    <button onclick='carregarConteudo(inicio)'>Recomeçar</button>`;

    homemMisterioso = `<h2>Vingança</h2> <img src='./imagens/finalHomem1.png' />  <p>Você e Carla combinam de ir atrás daquele homem misterioso que danificou seu visor e todos os equipamentos dela. Vocês saem nas ruas atrás dele e, após alguns minutos andando, você escuta o barulho de um gato com raiva. Vocês vão atrás dele e encontram um homem correndo furiosamente atrás desse gato. </p>

    <button onclick='carregarConteudo(homemMisterioso2)'>Continuar</button>`;

    homemMisterioso2 = `<h2>A escolha certa?</h2> <img src='./imagens/finalHomem2.png' />  <p>Carla corre rapidamente atrás do homem e, de surpresa, arranca uma bateria que estava presa à ele. Ele não desliga completamente, mas perde as forças de continuar de pé. Após Carla perguntar com muita raiva o que ele quer, ele diz suas ultimas palavras: "Vocês... estragaram tudo..."</p>

    <button onclick='carregarConteudo(homemMisterioso3)'>Continuar</button>`;

    homemMisterioso3 = `<h2>Adeus</h2> <img src='./imagens/finalHomem3.png' /> <p>Após o homem morrer, parece que não há mais nada além de vocês e aquele gato, e de repente o chão começa a tremer. Vocês desestabilizaram o mundo? O que está acontecendo? O que que ele sabe? Por que aquele homem era capaz de tudo para se manter vivo? Aquele homem era o que mantia esse mundo inteiro? Tantas perguntas sem resposta, e aparentemente vocês não tem tempo para descobri-la. O chão debaixo de vocês se quebra, e vocês começam a afundar na areia abaixo do asfalto. Vocês tentam rapidamente subir, mas é impossível. O mundo começa a se comprimir cada vez mais, comprimindo vocês junto, até que ele te consome por completo</p>

    <h2>Fim.</h2>

    <button onclick='carregarConteudo(inicio)'>Recomeçar</button>`;

    lose = `<h2>Sem sorte</h2> <img src='./imagens/visorDanificado.png' />  <p>Você tenta pegar o braço na janela, mas acaba esbarrando nele forte demais, e infelizmente ele cai para fora.
		Você está cego e se lembra do caminho para baixo do prédio, mas não tem certeza se tem tempo suficiente para isso.</p>
    
    <p>Tempo restante de bateria: 19 minutos<br>
		Tempo para consertar o visor: 17 minutos</p>

    <button onclick='carregarConteudo(predioBaixo)'>Ir para baixo do prédio.</button>
    <button onclick='carregarConteudo(consertarVisorD)'>Consertar o visor.</button>`;

    predioBaixo = `<h2>Cadê o braço</h2> <img src='./imagens/visorDanificado.png' /> <p>Você se desespera e começa a ir para baixo do prédio, tentando desfazer o caminho que fez para subir. Isso leva um tempo, e chegando la em baixo você se agacha e começa a procurar o braço. Você sente que empurra algumas coisas, mas não encontra nenhuma peça grande o bastante para ser um braço.
		Você começa a juntar todas as peças que encontrou e levar para cima.</p>

    <p>Tempo restante de bateria: 3 minutos<br>
		Tempo para consertar o visor: 17 minutos</p>

    <button onclick='carregarConteudo(predioBaixo2)'>Continuar</button>`;

    predioBaixo = `<h2>Sem tempo</h2> <img src='./imagens/visorDanificado.png' /> <p>Carla percebe que é seu braço, porém todo despedaçado, e impossível de utilizar. Infelizmente você não consegue enxergar, seu visor está quebrado, e o cheiro de fumaça está muito mais forte no quarto. Parece que sua história está chegando a um fim. Como última pergunta, você diz: "Mas... quem é você?"
		"Eu sou sua criadora, ${nome}."</p>

    <p>Ela explode.</p>

    <button onclick='carregarConteudo(inicio)'>Recomeçar</button>`;

    consertarVisorD = `<h2>Consertar por conta própria</h2> <img src='./imagens/carlaMorrendo.png' /> <p>Você começa a consertar seu visor, e como num piscar de olhos... Você está vendo novamente! Na sua frente você vê uma mulher, metade humana, metade robô. De seu corpo sai muita fumaça e ela não consegue se mover. Está sem seu braço direito, e quase não consegue falar.</p>

    <p>Tempo restante de bateira: 1 minuto e 15 segundos.</p>

    <button onclick='carregarConteudo(consertarVisorD2)'>Pegar bateria de Carla</button>`;

    conhsertarVisorD2 = `<h2>Tarde demais</h2> <img src='./imagens/explosao.png' /> <p>Você desesperadamente tenta roubar a bateria dela, e ela começa a te avisar loucamente dizendo "não não não". Você a ignora e, ao chegar próximo, ela explode, o destruindo completamente."</p>

    <p>Você morreu.</p>

    <button onclick='carregarConteudo(inicio)'>Recomeçar</button>`;

    consertarVisorC = `<h2>Precaução</h2> <img src='./imagens/carlaMorrendo.png' /> <p>Você decide consertar o seu visor antes, afinal, o perigo de derrubar o braço é muito grande. Você começa a consertar seu visor, e como num piscar de olhos... Você está vendo novamente! Na sua frente você vê uma mulher, metade humana, metade robô. De seu corpo sai muita fumaça e ela não consegue se mover. Está sem seu braço direito, e quase não consegue falar.</p>
    
    <p>Tempo restante de bateria: 6 minutos</p>

    <button onclick='carregarConteudo(pegarBraco)'>Pegar o braço para Carla. </button>
    <button onclick='carregarConteudo(deixarCarla)'>Deixar Carla e sair para tentar recarregar sua bateria.</button>`;

    pegarBraco = `<h2>Ajudar a desconhecida</h2> <img src='./imagens/carla.png' />  <p>Você rapidamente vai até a janela e pega o braço de Carla, e conecta ao corpo dela. Ela, em poucos minutos se conserta por completo. "Minha bateria está acabando, eu preciso recarregar rápido", você diz. Carla rapidamente procura em suas caixas uma bateria nova. Com muito medo de não ser compatível, ela troca a bateria dela mesma primeiro e depois te dá a bateria dela, com um rótulo ao lado escrito "Carla".</p>
    
    <p>Tempo restante de bateria: Aproximadamente 7 dias.</p>

    <button onclick='carregarConteudo(consertarNave)'>Tentar consertar a sua nave com Carla</button>
    <button onclick='carregarConteudo(homemMisterioso)'>Ir atrás do homem misterioso com Carla</button>`;

    deixarCarla = `<h2>Sem tempo para distrações</h2> <img src='./imagens/desligando.png' /> <p>Você sai do quarto, a deixando sozinha, e sai correndo de quarto em quarto, procurando alguma bateria ou algum caregador compatível. Infelizmente, após alguns minutos procurando, sua energia vai aos poucos se acabando, e sem forças, você cai no chão.</p>

    <p>Tempo restante de bateria: 10 segundos.</p>

    <p>Parece que sua história chegou a um fim.</p>

    <button onclick='carregarConteudo(inicio)'>Recomeçar</button>`;

    consertarVisorB = `<h2>Ver primeiro!</h2> <img src='./imagens/carlaMorrendo.png' /> <p>Você decide consertar o seu visor antes, afinal, você não tem muito tempo vivo. Você começa a consertar, e como num piscar de olhos... Você está vendo novamente! Na sua frente você vê uma mulher, metade humana, metade robô. De seu corpo sai muita fumaça e ela não consegue se mover. Está sem seu braço direito, e quase não consegue falar.</p>
    
    <p>Tempo restante de bateria: 8 minutos</p>

    <button onclick='carregarConteudo(quartoAjudarB)'>"E como eu posso te ajudar?"</button>
    <button onclick='carregarConteudo(quartoBateria)'>"A minha bateria está acabando, pode me ajudar?"</button>`;

    quartoAjudarB = `<h2>Tentando ajudar</h2> <img src='./imagens/carlaMorrendo.png' /> <p>"O homem, ele arrancou o meu braço mas não o levou, está ali na janela, acredito que ainda funcione, mesmo que ele tenha levado algumas peças dele. Se você conectar ao meu corpo eu posso me consertar e nós podemos sair daqui"</p>
    
    <p>Tempo restante de bateria: 7 minutos.</p>

    <button onclick='carregarConteudo(pegarBraco)'>Pegar o braço de Carla</button>
    <button onclick='carregarConteudo(deixarCarla)'>Sair do quarto para tentar recarregar a bateria.</button>`;

    quartoBateria = `<h2>Pedindo ajuda</h2> <img src='./imagens/carlaMorrendo.png' /> <p>"No momento não, mas se você pegar o meu braço na janela eu posso me consertar e te ajudar. Está ali na janela, o homem que veio aqui o largou lá mas acredito que ainda funciona, mesmo que ele tenha levado algumas peças."</p>
    
    <p>Tempo restante de bateria: 7 minutos.</p>

    <button onclick='carregarConteudo(pegarBraco)'>Pegar o braço de Carla</button>
    <button onclick='carregarConteudo(deixarCarla)'>Sair do quarto para tentar recarregar a bateria.</button>`;

    consertarVisorA = `<h2>Ver é prioridade</h2> <img src='./imagens/carlaMorrendo.png' /> <p>Você decide ignorar, afinal, não tem muito tempo restante vivo. Você começa a consertar seu visor, e como num piscar de olhos... Você está vendo novamente! Na sua frente você vê uma mulher, metade humana, metade robô. De seu corpo sai muita fumaça e ela não consegue se mover. Está sem seu braço direito.</p>
    
    <p>Tempo restante de bateria: 10 minutos.</p>

    <button onclick='carregarConteudo(quartoQuemeB)'>"Quem é você?"</button>
    <button onclick='carregarConteudo(deixarCarla)'>Sair para tentar recarregar a bateria</button>`;

    quartoQuemeB = `<h2>Quem é a desconhecida?</h2> <img src='./imagens/carlaMorrendo.png' /> <p>"Sou eu, ${nome}, Carla, você não se lembra? Você estava desligado quando acordei, então fui para a cidade procurar recursos para te ajudar. Achei que estava sozinha aqui, mas um homem chegou com essa luz e um aparelho de som, não sei o que era mas danificou todo o meu equipamento, ele arrancou meu braço e acredito que foi embora. Felizmente consegui consertar o meu visor, mas acho que sem meu braço eu não tenho muito tempo viva."</p>
    
    <p>Tempo restante de bateria: 10 minutos.</p>

    <button onclick='carregarConteudo(quartoAjudarB)'>"E como eu posso te ajudar?"</button>
    <button onclick='carregarConteudo(deixarCarla)'>Sair para tentar recarregar a bateria</button>`;

    carregarConteudo(conteudoA);
  }
}

function luck() {
  let randomNumber = Math.round(Math.random());
  if (randomNumber === 0) {
    carregarConteudo(win);
  } else {
    carregarConteudo(lose);
  }
}

carregarConteudo(inicio);
