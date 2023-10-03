const attributeCards = {
    data_title_card: document.querySelector('[data_title_card]'),
    data_date_card: document.querySelector('[data_date_card]'),
    data_views: document.querySelector('[data_views]'),
    data_img: document.querySelector('[data_img]'),
    data_text_card: document.querySelector('[data_text_card]'),
}

const indice = localStorage.getItem('indice') || '0';
const views_card_1 = localStorage.getItem('views_card_1') || '0';
const views_card_2 = localStorage.getItem('views_card_2') || '0';
const views_card_3 = localStorage.getItem('views_card_3') || '0';
const views_card_4 = localStorage.getItem('views_card_4') || '0';

const dataAtual = {
    data: new Date().toLocaleDateString(),
}

switch (indice) {
    case '0':
        attributeCards.data_title_card.innerHTML = 'Biohacker milionário coloca algoritmo para controlar sua vida';
        attributeCards.data_date_card.innerHTML = `${dataAtual.data}`;
        attributeCards.data_views.innerHTML = views_card_1;
        attributeCards.data_img.setAttribute('src', 'assets/ciencia.jpeg');
        attributeCards.data_text_card.innerHTML = `Através da iniciativa Blueprint, o biohacker milionário Bryan Johnson, de 46 anos, busca se manter "eternamente" jovem através das últimas tecnologias disponíveis na área médica, independente dos custos. O norte-americano já assume que quem controla a sua vida é o algoritmo, desenvolvido especificamente para esta finalidade, e que supera a sua mente.Para entender o tamanho do projeto iniciado há dois anos, o biohacker Johnson investe anualmente cerca de US$ 2 milhões (aproximadamente 10 milhões de reais) nos tratamentos, rotinas de cuidados e tecnologias que podem mantê-lo jovem. Considerando apenas a última semana, ele conta que recebeu 60 picadas de agulhas. Por dia, são ingeridos mais de 100 tipos diferentes de suplementos.<br><br>Entre as polêmicas que Johnson já se envolveu, estão as transfusões de plasma provenientes do seu filho. Por um tempo, ele e o seu pai, Richard, recebiam esta parte do sangue rica em nutrientes. A ideia era de que os compostos do sangue de uma pessoa mais jovem melhorassem os biomarcadores dos mais velhos, como estudos em roedores demonstraram. A questão é que a técnica testada nos modelos animais não era tão simples como foi replicada, e a estratégia não funcionou. Hoje, o biohacker explica que não faz mais isso por falta de resultados práticos.<br><br><strong>O algoritmo que comanda a vida do biohacker milionário</strong><br><br>
                
        <br>Para entender as decisões de Johnson em relação à sua saúde, é preciso explicar que o projeto Blueprint é dirigido por algoritmo de Inteligência Artificial (IA). Afinal, "eu construí um algoritmo que cuida melhor de mim do que eu mesmo. Ele excedeu minhas habilidades", explica o milionário, em entrevista para a revista Rolling Stone. Para ser sincero, "a inteligência computacional simplesmente ultrapassou nossas mentes em muitos domínios", como ocorre com a saúde.Aqui, vale mencionar que apesar da busca recente pela juventude, Johnson é, na verdade, conhecido por sua atuação na área de tecnologia, e pela fundação das empresas OS Fund e Kernel. Então, muito do que ele se propõe a fazer envolve a ciência de dados e as análises brutas de informações sobre o corpo humano.<br><br></p>
        <p>Neste ponto, ele explica que, se dependesse exclusivamente da sua mente, ela poderia arranjar diferentes argumentos, inclusive filosóficos, para contrapor aquilo que precisa ser feito na busca por sua saúde. Para Johnson, estes contrapontos não importam mais. "Tive que fazer isso para alinhar minhas 35 trilhões de células [com o meu objetivo]. Ainda não confio na minha mente em uma despensa cheia de guloseimas", comenta. <br>
        
        Hoje, "a minha mente não decide mais. E esta não é uma preferência de Bryan Johnson, nem um estilo de Bryan Johnson. Esta é a inevitabilidade da tecnologia em geral", complementa sobre a entrega das decisões de sua vida a um algoritmo.<br><br>
        <br><br>Fonte: Rolling Stone e Blueprint<br> <a href="/index.html"> ← Voltar para página inicial</a>`
        break;

    case '1':
        attributeCards.data_title_card.innerHTML = "Os lançamentos de games em setembro de 2023,"
        attributeCards.data_date_card.innerHTML = `${dataAtual.data}`
        attributeCards.data_views.innerHTML = views_card_2;
        attributeCards.data_img.setAttribute('src', '/assets/entretenimento.png')
        attributeCards.data_text_card.innerHTML = `Setembro se configurou como o mês mais recheado do ano no calendário de jogos. Afinal de contas, estamos falando do momento de chegada de um dos títulos mais aguardados de 2023, que vem acompanhado do novo capítulo de uma das grandes franquias dos games de luta e da nova forma de um craque eterno dos gramados.O nono mês de 2023 já começa com Starfield, o épico espacial e tão esperado game inédito da Bethesda. Os jogadores, porém, terão que dividir suas aventuras pelo cosmo com o sangue jorrando de Mortal Kombat 1 e, caso se cansem de tudo isso, poderão bater uma bolinha no bom e velho FIFA, que agora atende como EA Sports FC.Todos os lançamentos de games em setembro de 2023<br><br>
        <strong>01/09</strong><br>
        Bomb Rush Cyberfunk (PS4, PS5, Xbox One, Xbox Series X|S)<br>
        Mega Man X DiVE Offline (PC)<br>
        Rhapsody: Marl Kingdom Chronicles (PC, Switch, PS5)<br><br>
        <strong>05/09</strong><br>
        Chants of Sennaar (PC, PS4, PS5,Switch)<br>
        Monochrome Mobius: Rights and Wrongs Forgotten (PS4, PS5)<br>
        Rune Factory 3 Special (PC, Switch)<br><br>
        <strong>06/09</strong><br>
        Baldur's Gate III (PS5)<br>
        Starfield (PC, Xbox Series X|S)<br><br>
        <strong>07/09</strong><br>
        The Dragoness: Command of the Flame (Switch)<br>
        Final Fantasy VII: Ever Crisis (iOS, Android)<br>
        The Many Pieces of Mr. Coo (Switch, PS4, PS5, Xbox One, Xbox Series X|S)<br>
        The Quintessential Quintuplets: Five Promises Made with Her (Switch, PS4)<br>
        Rugby 24 (PC, PS4, PS5, Xbox One, Xbox Series X|S)<br><br>
        <strong>08/09</strong><br>
        Anonymous;Code (PC, PS4, Switch)<br>
        Fae Farm (PC, Switch)<br>
        Monochrome Mobius: Rights and Wrongs Forgotten (PS4, PS5)<br>
        NBA 2K24 (PC, PS4, PS5, Xbox One, Xbox Series X|S, Switch)<br>
        Rhapsody: Marl Kingdom Chronicles (PC, Switch, PS5)<br>
        Synced (PC)<br><br>
        <strong>12/09</strong><br>
        Mary Skelter Finale (PC)<br>
        MythForce (PC, PS4, PS5, Xbox One, Xbox Series X|S, Switch)<br>
        Touhou: New World (PS4, PS5)<br><br>
        <strong>14/09</strong><br>
        AK-xolotl (PC, PS4, PS5, Xbox One, Xbox Series X|S, Switch)<br>
        Baten Kaitos I & II HD Remaster (Switch)<br>
        The Crew Motorfest (PC, PS4, PS5, Xbox One, Xbox Series X|S)<br>
        Inspector Gadget: Mad Time Party (PC, PS4, PS5, Xbox One, Xbox Series X|S, Switch)<br>
        Monster Hunter Now (iOS, Android)<br>
        Mugen Souls Z (Switch)<br>
        Summum Aeterna (PC, PS4, PS5, Xbox One, Xbox Series X|S, Switch)<br><br>
        <strong>19/09</strong><br>
        The Legend of Nayuta: Boundless Trails (Switch, PC, PS4)<br>
        Lies of P (PC, PS4, PS5, Xbox One, Xbox Series X|S)<br>
        Mortal Kombat 1 (PC, PS5, Xbox Series X|S, Switch)<br><br>
        <strong>21/09</strong><br>
        Eternights (PC, PS4, PS5)<br>
        Mon-Yu (PC, Switch, PS5)<br>
        Payday 3 (PC, PS5, Xbox Series X|S)<br>
        Rin: The Last Child (PC, PS4, PS5, Xbox One, Xbox Series X|S, Switch)<br><br>
        <a href="/index.html"> ← Voltar para página inicial</a>`
        break;

    case '2':
        attributeCards.data_title_card.innerHTML = "Firefox recebe correção para falha de segurança crítica" 
        attributeCards.data_date_card.innerHTML = `${dataAtual.data}`
        attributeCards.data_views.innerHTML = views_card_3;
        attributeCards.data_img.setAttribute('src', '/assets/seguranca.jpeg')
        attributeCards.data_text_card.innerHTML = `A Mozilla liberou nesta semana uma atualização de segurança emergencial para o navegador Firefox, resolvendo uma brecha crítica que já vinha sendo utilizada em ataques contra os usuários. Bastava que os usuários abrissem uma imagem maliciosa em formato WebP, que poderia estar disponível em um site da internet, para que os cibercriminosos pudessem agir.
        A CVE-2023-4863, como vem sendo rastreada, atinge o Firefox e também o cliente de e-mail Thunderbird. Ela estava presente em uma biblioteca de códigos relacionada à abertura do formato visual, com um arquivo manipulado podendo levar à escrita de dados fora dos limites da memória, possibilitando golpes que envolveriam desde o travamento do software e do dispositivo até a execução remota de ataques para instalação de vírus, por exemplo.<br><br>
        
        A Mozilla não deu mais detalhes sobre essa exploração, mas como sua utilização em ofensivas contra os usuários foi confirmada, recomenda a instalação das correções o mais rapidamente possível. Os updates também foram liberadas para versões corporativas ou gerenciadas em grande escala do Firefox e do Thunderbird, com todas devendo ser atualizadas para seus pacotes mais recentes.<br>
        Ainda segundo a organização, a brecha é do tipo zero-day, daquela que era desconhecida até mesmo dos desenvolvedores originais do software antes de começar a ser explorada pelos cibercriminosos. Ela foi relatada à Mozilla por pesquisadores em segurança da Apple e do The Citizen Lab, um laboratório da Universidade de Toronto, no Canadá, também voltado à pesquisas em proteção digital e tecnologia.<br><br>
        
        Chrome também recebeu atualização
        Enquanto este alerta foi feito pela Mozilla, outros aplicativos que utilizem a biblioteca vulnerável também podem estar em risco. Os códigos da libwebp, como é chamada, também são usados no Google Chrome e o Google liberou atualizações, neste começo de semana, para resolver a questão.
        No caso do navegador da gigante, os updates estão sendo liberados aos poucos, tanto para usuários finais e corporativos quanto para aqueles que recebem as versões Beta do navegador. A expectativa é que outros softwares que também utilizem os códigos vulneráveis sejam atualizados, enquanto a recomendação aos usuários é de aplicação das novas versões o mais rapidamente possível, para que fiquem protegidos de eventuais ataques.<br><br>
        <a href="/index.html"> ← Voltar para página inicial</a>`;

        break;

    case '3':
        attributeCards.data_title_card.innerHTML = "Intel Core i9-14900KF supera i9-13900K em novos testes vazados"
        attributeCards.data_date_card.innerHTML = `${dataAtual.data}`
        attributeCards.data_views.innerHTML = views_card_4;
        attributeCards.data_img.setAttribute('src', '/assets/hardware.png') 
        attributeCards.data_text_card.innerHTML = `Faltando poucos dias para o anúncio oficial dos processadores Intel Raptor Lake Refresh de 14ª geração, o Core i9-14900KF teve sua performance vazada mais uma vez. Felizmente, esse é um dos primeiros vazamentos que coloca a nova CPU em uma posição de maior vantagem frente à concorrência e à 13ª geração da fabricante.<br><br>
        O vazamento é cortesia do usuário One Raichu, que testou o processador no Geekbench 6. Vale salientar que desta vez os testes foram conduzidos em parâmetros mais palatáveis, utilizando uma placa-mãe AsRock Z790 Taichi e 32 GB de memória RAM DDR5 a 7.000 MT/s.<br><br>
        
        O resultado no Geekbench mostra que o novo i9 é capaz de fazer 3.497 pontos em single-core e 23.067 pontos em multi-core, valores bem mais expressivos do que já foi visto em rumores anteriores. Esses números mostram que o desempenho do Core i9-14900KF é 15% superior que o Core i9-13900K em single e até 13% em multi-core.<br><br>
        Já em uma disputa direta com a AMD, o i9-14900KF abre 16% a 17% de vantagem contra o Ryzen 9 7950X tanto em single quanto em multi-core, respectivamente.<br><br>
        
        <strong>RAM mais rápida pode ter feito a diferença</strong><br><br>
        Com esses resultados, a 14ª geração de processadores da Intel começa a trazer traços de performance que possam justificar um upgrade. É comum que saltos geracionais envolvam ganhos de desempenho entre 15% e 30%, e no caso deste novo teste vazado o desempenho obtido pode estar relacionado com fatores específicos.<br><br>
        Os testes antigos foram feitos com memórias de baixa frequência, algo que certamente comprometeu o desempenho da máquina. A diferença entre o i9-1400KF e o i9-13900K pode se dar pela otimização de arquitetura e o sutil aumento nas frequências que a nova CPU terá. O duelo contra o Ryzen 7950X tem questões a respeito do número de núcleos maior para o time azul e o fato de a Intel geralmente se sair melhor em testes sintéticos.<br><br>
        Por falar nas especificações, o Core i9-14900KF deve chegar ao mercado com 24 núcleos (8+16), 32 threads, frequência base de 3,4 Ghz com boost para até 6,0 Ghz, 36 MB de cache L3 e TDP de 125W.
        
        A expectativa é que a Intel anuncie os novos processadores Raptor Lake Refresh na próxima terça-feira (19), durante o Intel Innovation.<br><br>
        <a href="/index.html"> ← Voltar para página inicial</a>`;
        break;

    default:
        break;
}