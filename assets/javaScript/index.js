const attributeHtml = {
    data_categories_all: document.querySelector('[data_categories_all]'),
    data_science: document.querySelector('[data_science]'),
    data_games: document.querySelector('[data_games]'),
    data_security: document.querySelector('[data_security]'),
    data_hardware: document.querySelector('[data_hardware]'),
    data_article: document.querySelectorAll('[ data_article]'),
    data_categorie: document.querySelectorAll('[data_categorie]'),
    data_date: document.querySelectorAll('[data_date]'),
    data_views_1: document.querySelector('[data_views_1]'),
    data_views_2: document.querySelector('[data_views_2]'),
    data_views_3: document.querySelector('[data_views_3]'),
    data_views_4: document.querySelector('[data_views_4]'),
    data_p: document.querySelectorAll('[data_p]'),
}

attributeHtml.data_views_1.innerHTML = localStorage.getItem('views_card_1') || '0';
attributeHtml.data_views_2.innerHTML = localStorage.getItem('views_card_2') || '0';
attributeHtml.data_views_3.innerHTML = localStorage.getItem('views_card_3') || '0';
attributeHtml.data_views_4.innerHTML = localStorage.getItem('views_card_4') || '0';

function limitarTexto(texto, limite) {
    if (texto.length > limite) {
        return texto.substring(0, limite) + '...';
    }
    return texto;
}

attributeHtml.data_p.forEach((paragrafo) => {
    const limiteCaracteres = 100;
    const textoCompleto = paragrafo.textContent;
    const textoLimitado = limitarTexto(textoCompleto, limiteCaracteres);
    paragrafo.textContent = textoLimitado;
});


const dataAtual = {
    data: new Date().toLocaleDateString()
}


attributeHtml.data_date.forEach((data) => {
    data.innerHTML = `${dataAtual.data}`
})

attributeHtml.data_categories_all.addEventListener('click', () => {
    attributeHtml.data_article.forEach((card) => {
        card.style.display = 'block'
    })
})

attributeHtml.data_science.addEventListener('click', () => {
    attributeHtml.data_article.forEach((card) => {
        if(card.getAttribute('data_categorie') === 'ciencia'){
            card.style.display = 'block'
        } else {
            card.style.display = 'none'
        }
    })
})

attributeHtml.data_games.addEventListener('click', () => {
    attributeHtml.data_article.forEach((card) => {
        if(card.getAttribute('data_categorie') === 'games'){
            card.style.display = 'block'
        } else {
            card.style.display = 'none'
        }
    })
})

attributeHtml.data_security.addEventListener('click', () => {
    attributeHtml.data_article.forEach((card) => {
        if(card.getAttribute('data_categorie') === 'seguranca'){
            card.style.display = 'block'
        } else {
            card.style.display = 'none'
        }
    })
})

attributeHtml.data_hardware.addEventListener('click', () => {
    attributeHtml.data_article.forEach((card) => {
        if(card.getAttribute('data_categorie') === 'hardware'){
            card.style.display = 'block'
        } else {
            card.style.display = 'none'
        }
    })
})

attributeHtml.data_article.forEach((card, indice) => {
    
    card.addEventListener('click', () =>{
        localStorage.setItem('indice', indice)

        switch (indice) {
            case 0:
                attributeHtml.data_views_1.innerHTML = parseInt(attributeHtml.data_views_1.innerHTML) + 1
                localStorage.setItem('views_card_1', attributeHtml.data_views_1.innerText)
                window.location.assign('./assets/card.html')
                break;

            case 1:
                attributeHtml.data_views_2.innerHTML = parseInt(attributeHtml.data_views_2.innerHTML) + 1
                localStorage.setItem('views_card_2', attributeHtml.data_views_2.innerText)
                window.location.assign('./assets/card.html')
                break;

            case 2:
                attributeHtml.data_views_3.innerHTML = parseInt(attributeHtml.data_views_3.innerHTML) + 1
                localStorage.setItem('views_card_3', attributeHtml.data_views_3.innerText)
                window.location.assign('./assets/card.html')
                break;
                
            case 3:
                attributeHtml.data_views_4.innerHTML = parseInt(attributeHtml.data_views_4.innerHTML) + 1
                localStorage.setItem('views_card_4', attributeHtml.data_views_4.innerText)
                window.location.assign('./assets/card.html')
                break;
        
            default:
                break;
        }
    })
})
