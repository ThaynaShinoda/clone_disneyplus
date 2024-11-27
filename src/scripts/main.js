// Quando termina de carregar o DOM ai ele executa essa função

document.addEventListener('DOMContentLoaded', function() {
    // Selecionou TODOS os botões com o atributo DATA-TAB-BUTTON
    const buttons = document.querySelectorAll('[data-tab-button]')
    
    const questions = document.querySelectorAll('[data-faq-question]')

    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao){
            const tabSelected = botao.target.dataset.tabButton
            const tab = document.querySelector(`[data-tab-id=${tabSelected}]`)
            hideTabs();
            tab.classList.add('shows__list--is-active')
            removeActiveBtn();
            botao.target.classList.add('shows__tabs__button--is-active')

        })
    }

    for(let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', openCloseAnswer)
    }
})

function openCloseAnswer(elemento) {
    const classe = 'faq__list__item--is-open'
    const elementoPai = elemento.target.parentNode

    elementoPai.classList.toggle(classe)
}

function removeActiveBtn() {
    const buttons = document.querySelectorAll('[data-tab-button]')

    for(let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }
}

function hideTabs() {
    const containers = document.querySelectorAll('[data-tab-id]')

    for(let i = 0; i < containers.length; i++) {
        containers[i].classList.remove('shows__list--is-active')
    }
}