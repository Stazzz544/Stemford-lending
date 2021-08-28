@@include('swiper-bundle.min.js');

//===swiper slider===

const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	centeredSlides: true,
	initialSlide: 1,
	slidesPerView: 3,
	//delay: 400,
	spaceBetween: 30, //Расстояние между слайдами в пикселях.
	// autoplay: {
	// 	delay: 4000,
	//  },

	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
 });

//main Tab function
const tabs = document.querySelectorAll('.tabs-section__tab-nav-item');

tabs.forEach((tab) => {
	tab.addEventListener('click', (event) => {
		const target = event.target.closest('.tabs-section__tab-nav-item');
		const tabText = document.querySelectorAll('.tabs-section__tab-nav-item-text');
		const tabImg = document.querySelectorAll('.tabs-section__tab-nav-item-img');
		const content = document.querySelectorAll('.tabs-section__content');

		deleteActiveClass(content, tabImg, tabImg, tabText, tabs)
		addActiveClass(target, tabs, tabText, tabImg, content)
	})
})

function addActiveClass(target, buttons, ...anotherClasses) {
	buttons.forEach((button, numButton)=> {
		if (target === button) {
			buttons[numButton].classList.add('active')
			anotherClasses.forEach(elem=>{
				elem[numButton].classList.add('active')
			})
		}
	})
}

function deleteActiveClass(...deleteActiveClassAllElements) {
	deleteActiveClassAllElements.forEach(nodes => { nodes.forEach(elem=> {
			if (elem.classList.contains('active')) elem.classList.remove('active')
		})
	})
}



 //spoiler

const spoilers = document.querySelectorAll('.questions__item-wrapper')
spoilers.forEach(e => e.addEventListener('click', (e) => spoiler(e.target)))

const spoiler = (eventTarget) => {
	const spoilerTarget = eventTarget.closest('.questions__item-title-wrapper')
	const spoilerGlobal = spoilerTarget.closest('.questions__item-wrapper')

	const spoilerBody = spoilerGlobal.querySelector('.questions__item-text')
	const spoilerBtn = spoilerGlobal.querySelector('.questions__item-title-btn')

	spoilerBody.classList.toggle('active')
	spoilerBtn.classList.toggle('active')


}