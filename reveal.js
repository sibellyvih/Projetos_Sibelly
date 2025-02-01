
window.revelar = ScrollReveal ({reset:true})

// EFEITO NOS TEXTOS
revelar.reveal('.efeito-instrucoes',
    {
        duration: 1000,
        distance: '90px'
})

revelar.reveal('.efeito-no-conteudo',
    {
        duration: 2000,
        distance: '90px'
})

// TÍTULOS DAS SESSÕES
revelar.reveal('.titulo',
    {
        duration: 2000,
        distance: '90px',
        delay: 500
})

// SESSÃO DAS IMAGENS
revelar.reveal('.efeito-na-imagem1',
    {
        duration: 1000,
        distance: '90px'
})

revelar.reveal('.efeito-na-imagem2',
    {
        duration: 1000,
        distance: '90px',
        delay: 500
})

revelar.reveal('.efeito-na-imagem3',
    {
        duration: 1000,
        distance: '90px',
        delay: 1000
})

revelar.reveal('.efeito-na-imagem4',
    {
        duration: 1000,
        distance: '90px',
        delay: 1500
})

revelar.reveal('.efeito-na-imagem5',
    {
        duration: 1000,
        distance: '90px',
        delay: 2000
})

//CONTEÚDOS QUE VÃO APARECER NA ESQUERDA
revelar.reveal('.esquerda',
    {
        duration: 2000,
        distance: '90px',
        delay: 500,
        origin: 'left'
})

//CONTEÚDOS QUE VÃO APARECER NA DIREITA
revelar.reveal('.direita',
    {
        duration: 2000,
        distance: '90px',
        delay: 1000,
        origin: 'right'
})

//MODO FANTASMA
ScrollReveal().reveal('.aparecer', {
    distance: '0px',
    opacity: 0.8,
    delay: 1000
});