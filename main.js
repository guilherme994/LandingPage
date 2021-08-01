const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView: 'auto',
    direction: 'horizontal',
    centeredSlides: true,
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

/* Toggle Menu */

const menu = document.querySelector(".menuHam")
const ham = document.querySelector(".toggleMenu")
const linksMenu = document.querySelectorAll(".linksMenu")
const iconHam = document.querySelector(".icon-menu")
const iconX = document.querySelector(".icon-x")

ham.addEventListener("click", toggleMenu)

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu")
    iconHam.classList.remove("icon-ham-x")
    iconX.classList.add("icon-ham-x")
  } else {
    menu.classList.add("showMenu")
    iconHam.classList.add("icon-ham-x")
    iconX.classList.remove("icon-ham-x")
  }
}

linksMenu.forEach(function(menuLinks) {
  menuLinks.addEventListener("click", toggleMenu)
})


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
