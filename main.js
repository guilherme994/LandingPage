const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView: 'auto',
    direction: 'horizontal',
    centeredSlides: false,
    autoplay: true,


    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  /* mudar o header da página quando der scroll */
const header = document.querySelector('.headerLayout')
const headerShadow = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('headerScroll')
    headerShadow.classList.add('headerShadow')
  } else {
    header.classList.remove('headerScroll')
    headerShadow.classList.remove('headerShadow')
  }
}

  /* Menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 3

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('.linksMenu[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('.linksMenu[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* Botão voltar para o topo */
const backToTopButton = document.querySelector(".arrow-up")

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show-arrow')
  } else {
    backToTopButton.classList.remove('show-arrow')
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  activateMenuAtCurrentSection()
  changeHeaderWhenScroll()
  backToTop()
})
