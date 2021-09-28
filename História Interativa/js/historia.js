var nome;

var inicio = `<label for="nome">Qual é o nome do seu personagem?</label>
<input type="text" name="nome" id="nome">
<button onclick=iniciar()>COMEÇAR!</button>`;

var elemento = document.getElementById("conteudo");

var conteudoA;
var explorarPredio;
var explorarQuarto;
var quartoQuem;
var quartoBem;
var quartoReparar;
var quartoAjudar;

var fimA;
var fimB;

function carregarConteudo(conteudo) {
    elemento.innerHTML = conteudo;
}

function iniciar() {
    if (document.querySelector("#nome").value) {
        nome = document.querySelector('#nome').value;

        // Início
        conteudoA = `<img src='' /> <h2>O Início</h2> <p>Você acorda em um lugar desconhecido, aparentemente deserto, e sente que sua bateria está acabando. ${nome}, um robô com um pensamento quase humano se encontra perdido, em uma cidade completamente nova, diferente de tudo que já viu. Nela, existem diversos prédios quebrados, anúncios de coisas antigas e silêncio, apenas silêncio. Após andar por um tempo, você avista uma janela com a luz acesa em um dos prédios. Dela, você consegue ver um braço de robô pendurado, e uma fumaça saindo. Nenhum som pode ser escutado de lá.</p> <button onclick='carregarConteudo(explorarPredio)'>Ir até o quarto.</button> <button onclick='carregarConteudo(explorarA)'>Ignorar e continuar explorando</button>`;

        // Explorar prédio: *explorar quarto || explorar o resto do predio
        explorarPredio = `<img src='' /> <h2>Quarto misterioso</h2>  <p>Você entra no prédio, o elevador está completamente destruído, não parece ter ninguém ali. Subindo as escadas, você chega no quarto iluminado, uma luz forte sai de lá de dentro e passa pela fresta da porta. Seus sensores de odor percebem um cheiro muito forte de fumaça saindo de dentro. Você tem 10 minutos de bateria restante.</p> <button onclick='carregarConteudo(explorarQuarto)'>Entrar no quarto</button> <button onclick='carregarConteudo(predioA)'>Explorar o resto do prédio</button>`;

        // Entrar no quarto: *quem é? || o que quer?
        explorarQuarto = `<img src='' /> <p>Ao abrir a porta do quarto, uma luz extremamente forte quase quebra os seus sensores ópticos. Você perde sua visão temporariamente. Você ouve uma voz, bem baixinha, vindo de trás de você... "${nome}?"</p>
        <p>Visão danificada.<br>Tempo de reparo aproximado: 2 minutos e 37 segundos.<br>Nível de bateria crítico: 9 minutos e 22 segundos restantes. </p>
        <button onclick='carregarConteudo(quartoQuem)'>"Quem É Você?"</button> <button onclick='carregarConteudo(quartoC2)'>"É O Meu Nome, O Que Você Quer?"</button>`;

        // Quem é você?: *você está bem? || *reparar visão
        quartoQuem = `<img src='' /> <p>Sou e-e-e-eu, ${nome}, vo--c-ccê não lembra-aa-a? Não sss-se lembra de tudo que vi-vi-vi-vv-v--vvv-vemos juntos ${nome}? Sou eu... C-aa-r-laaa.<br>O cheiro de fumaça se intensifica. Você não consegue identificar daonde vem o cheiro, mas está próximo.</p>
        <p>Visão danificada.<br>Tempo de reparo aproximado: 2 minutos e 37 segundos.<br>Nível de bateria crítico: 8 minutos e 48 segundos restantes. </p>
        <button onclick='carregarConteudo(quartoBem)'>"Carla... Você Está Bem?"</button> <button onclick='carregarConteudo(quartoReparar)'>"Não Conheço Nenhuma Carla. (Sentar e reparar visão)"</button>`

        // Você está bem?: *ajudar || sair do quarto
        quartoBem = `<img src='' /> <p>Mee-eu br-aço... Eu es--tou mor--rendo, ${nome}. Você precis-sa me a-aa-judar... <br>O cheiro de fumaça está cada vez mais forte, e você pode tentar ajudá-la, porém você não tem muito tempo.</p>
        <p>Visão danificada.<br>Tempo de reparo aproximado: 2 minutos e 37 segundos.<br>Nível de bateria crítico: 7 minutos e 10 segundos restantes. </p>
        <button onclick='carregarConteudo(quartoAjudar)'>Tentar ajudá-la</button> <button onclick='carregarConteudo(quartoC3)'>Sair do quarto</button>`

        // Sentar e reparar visão: sair do quarto || *esperar reparar
        quartoReparar = `<img src='' /> <p>Você se senta e começa a reparar sua visão... cerca de 1 minuto se passa, e você ouve o som de algo se desligando. Seus sensores de calor começam a apitar. O quarto está a 50° Celsius.</p>
        <p>Visão danificada.<br>Tempo de reparo aproximado: 55 segundos.<br>Nível de bateria crítico: 7 minutos e 10 segundos restantes. </p>
        <button onclick='carregarConteudo(quartoBem)'>"Tentar sair do quarto."</button> <button onclick='carregarConteudo(fimA)'>"Esperar terminar de reparar."</button>`

        // Ajudar Carla: *pedir ajuda || sair do quarto
        quartoAjudar = `<img src='' /> <p>Você se abaixa e tenta ajudar Carla, utilizando suas ferramentas de reparação, você conserta seus circuitos. O cheiro de fumaça vai se dissipando aos poucos, mas agora você tem muito pouco tempo.</p>
        <p>Visão danificada.<br>Tempo de reparo aproximado: 2 minutos e 37 segundos.<br>Nível de bateria crítico: 2 minutos e 3 segundos restantes. </p>
        <button onclick='carregarConteudo(fimB)'>"Minha Bateria Está Acabando"</button> <button onclick='carregarConteudo(quartoC4)'>Sair do quarto</button>`

        // Fim - Robô explode
        fimA = `<img src='' /> <p>Você continua sentado, esperando consertar sua visão. A temperatura continua aumentando... 60°C ...70°C...<br>Sua visão é reparada, e você vê um robô, sem um braço, pegando fogo. O quarto inteiro está pegando fogo, e você não tem mais tempo. O robô explode, destruindo o seu núcleo de energia junto.</p>
        <p>${nome}, você morreu.</p>
        <button onclick='carregarConteudo(inicio)'>Recomeçar</button>`

        // Fim - Bateria acaba
        fimB = `<p>Você pede ajuda ao Robô, ele se levanta, pega seu braço pendurado na janela, sai do quarto e tranca a porta. Você consegue ouvir bem baixinho um rádio ligado. "Compre já o seu 1M1T4R! Ele consegue enganar qualquer um!"</p>
        <p>Nível de bateria crítico: 10 segundos</p>
        <p>${nome}, sua bateria acabou.</p>
        <button onclick='carregarConteudo(inicio)'>Recomeçar</button>`
        carregarConteudo(conteudoA);
    }
}

carregarConteudo(inicio)