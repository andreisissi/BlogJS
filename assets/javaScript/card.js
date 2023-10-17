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
        attributeCards.data_img.setAttribute('src', '../assets/img/ciencia.jpeg');
        attributeCards.data_text_card.innerHTML = `Através da iniciativa Blueprint, o biohacker milionário Bryan Johnson, de 46 anos, busca se manter "eternamente" jovem através das últimas tecnologias disponíveis na área médica, independente dos custos. 
        O norte-americano já assume que quem controla a sua vida é o algoritmo, desenvolvido especificamente para esta finalidade, e que supera a sua mente. Para entender o tamanho do projeto iniciado há dois anos, o biohacker Johnson investe anualmente 
        cerca de US$ 2 milhões (aproximadamente 10 milhões de reais) nos tratamentos, rotinas de cuidados e tecnologias que podem mantê-lo jovem. Considerando apenas a última semana, ele conta que recebeu 60 picadas de agulhas. Por dia, são ingeridos mais
        de 100 tipos diferentes de suplementos.
        
        <br><br><br><strong>O ALGORITMO QUE COMANDA A VIDA DO BIOHACKER MILIONÁRIO</strong><br><br>
                
        <br><p>Para entender as decisões de Johnson em relação à sua saúde, é preciso explicar que o projeto Blueprint é dirigido por algoritmo de Inteligência Artificial (IA). Afinal, "eu construí um algoritmo que cuida melhor de mim do que eu mesmo. Ele 
        excedeu minhas habilidades", explica o milionário, em entrevista para a revista Rolling Stone. Para ser sincero, "a inteligência computacional simplesmente ultrapassou nossas mentes em muitos domínios", como ocorre com a saúde.Aqui, vale mencionar 
        que apesar da busca recente pela juventude, Johnson é, na verdade, conhecido por sua atuação na área de tecnologia, e pela fundação das empresas OS Fund e Kernel. Então, muito do que ele se propõe a fazer envolve a ciência de dados e as análises brutas 
        de informações sobre o corpo humano.<br><br></p>
    
        <br><br>Fonte: Rolling Stone e Blueprint<br> 
        <a href="/index.html"> ← Voltar para página inicial</a>`
        break;

    case '1':
        attributeCards.data_title_card.innerHTML = "Confira os lançamentos de games em setembro de 2023"
        attributeCards.data_date_card.innerHTML = `${dataAtual.data}`
        attributeCards.data_views.innerHTML = views_card_2;
        attributeCards.data_img.setAttribute('src', '../assets/img/game.jpg')
        attributeCards.data_text_card.innerHTML = `Setembro se configurou como o mês mais recheado do ano no calendário de jogos. Afinal de contas, estamos falando do momento de chegada de 
        um dos títulos mais aguardados de 2023, que vem acompanhado do novo capítulo de uma das grandes franquias dos games de luta e da nova forma de um craque eterno dos gramados<br><br>
        
        <strong>06/09</strong><br>
        Baldur's Gate III (PS5)<br>
        Starfield (PC, Xbox Series X|S)<br><br>
        
        <strong>07/09</strong><br>
        The Dragoness: Command of the Flame (Switch)<br>
        Final Fantasy VII: Ever Crisis (iOS, Android)<br>
        The Quintessential Quintuplets: Five Promises Made with Her (Switch, PS4)<br><br>
        
        <strong>08/09</strong><br>
        Anonymous;Code (PC, PS4, Switch)<br>
        Fae Farm (PC, Switch)<br>
        NBA 2K24 (PC, PS4, PS5, Xbox One, Xbox Series X|S, Switch)<br>
        Rhapsody: Marl Kingdom Chronicles (PC, Switch, PS5)<br><br>
        
        <strong>14/09</strong><br>
        AK-xolotl (PC, PS4, PS5, Xbox One, Xbox Series X|S, Switch)<br>
        Inspector Gadget: Mad Time Party (PC, PS4, PS5, Xbox One, Xbox Series X|S, Switch)<br>
        Monster Hunter Now (iOS, Android)<br><br>
        
        <strong>19/09</strong><br>
        The Legend of Nayuta: Boundless Trails (Switch, PC, PS4)<br>
        Lies of P (PC, PS4, PS5, Xbox One, Xbox Series X|S)<br>
        Mortal Kombat 1 (PC, PS5, Xbox Series X|S, Switch)<br><br>
        
        <strong>21/09</strong><br>
        Eternights (PC, PS4, PS5)<br>
        Mon-Yu (PC, Switch, PS5)<br>
        Payday 3 (PC, PS5, Xbox Series X|S)<br><br>

        <a href="/index.html"> ← Voltar para página inicial</a>`
        break;

    case '2':
        attributeCards.data_title_card.innerHTML = "Firefox recebe correção para falha de segurança crítica" 
        attributeCards.data_date_card.innerHTML = `${dataAtual.data}`
        attributeCards.data_views.innerHTML = views_card_3;
        attributeCards.data_img.setAttribute('src', '../assets/img/seguranca.jpeg')
        attributeCards.data_text_card.innerHTML = `A Mozilla liberou nesta semana uma atualização de segurança emergencial para o navegador Firefox, resolvendo uma brecha 
        crítica que já vinha sendo utilizada em ataques contra os usuários. Bastava que os usuários abrissem uma imagem maliciosa em formato WebP, que poderia estar disponível 
        em um site da internet, para que os cibercriminosos pudessem agir.
        A CVE-2023-4863, como vem sendo rastreada, atinge o Firefox e também o cliente de e-mail Thunderbird. Ela estava presente em uma biblioteca de códigos relacionada à 
        abertura do formato visual, com um arquivo manipulado podendo levar à escrita de dados fora dos limites da memória, possibilitando golpes que envolveriam desde o travamento 
        do software e do dispositivo até a execução remota de ataques para instalação de vírus, por exemplo.<br><br>
        
        A Mozilla não deu mais detalhes sobre essa exploração, mas como sua utilização em ofensivas contra os usuários foi confirmada, recomenda a instalação das correções o 
        mais rapidamente possível. Os updates também foram liberadas para versões corporativas ou gerenciadas em grande escala do Firefox e do Thunderbird, com todas devendo ser 
        atualizadas para seus pacotes mais recentes.<br><br>
        
        <a href="/index.html"> ← Voltar para página inicial</a>`;

        break;

    case '3':
        attributeCards.data_title_card.innerHTML = "Intel Core i9-14900KF supera i9-13900K em novos testes vazados"
        attributeCards.data_date_card.innerHTML = `${dataAtual.data}`
        attributeCards.data_views.innerHTML = views_card_4;
        attributeCards.data_img.setAttribute('src', '../assets/img/hardware.png') 
        attributeCards.data_text_card.innerHTML = `Faltando poucos dias para o anúncio oficial dos processadores Intel Raptor Lake Refresh de 14ª geração, o Core i9-14900KF teve sua performance 
        vazada mais uma vez. Felizmente, esse é um dos primeiros vazamentos que coloca a nova CPU em uma posição de maior vantagem frente à concorrência e à 13ª geração da fabricante.<br><br>

        O vazamento é cortesia do usuário One Raichu, que testou o processador no Geekbench 6. Vale salientar que desta vez os testes foram conduzidos em parâmetros mais palatáveis, utilizando 
        uma placa-mãe AsRock Z790 Taichi e 32 GB de memória RAM DDR5 a 7.000 MT/s.<br>
        
        <strong>RAM MAIS RÁPIDA PODE TER FEITO A DIFERENÇA</strong><br><br>

        Com esses resultados, a 14ª geração de processadores da Intel começa a trazer traços de performance que possam justificar um upgrade. É comum que saltos geracionais envolvam ganhos de 
        desempenho entre 15% e 30%, e no caso deste novo teste vazado o desempenho obtido pode estar relacionado com fatores específicos.<br>
        Os testes antigos foram feitos com memórias de baixa frequência, algo que certamente comprometeu o desempenho da máquina. A diferença entre o i9-1400KF e o i9-13900K pode se dar pela 
        otimização de arquitetura e o sutil aumento nas frequências que a nova CPU terá.<br><br>
        
        
        A expectativa é que a Intel anuncie os novos processadores Raptor Lake Refresh na próxima terça-feira (19), durante o Intel Innovation.<br><br>
        <a href="/index.html"> ← Voltar para página inicial</a>`;
        break;

    default:
        break;
}