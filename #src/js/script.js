@@include('wow.min.js');
@@include('swiper-bundle.min.js');

//===swiper slider===
const swiper = new Swiper('.swiper', {
	// Optional parameters
	breakpoints: {
		320: {
			slidesPerView: 1,
			initialSlide: 4,
			spaceBetween: 0,
			spaceBetween: 30,
		},
		1350: {
			slidesPerView: 3,
			spaceBetween: 30,
		}
	},
	direction: 'horizontal',
	loop: true,
	centeredSlides: true,
	initialSlide: 1,
	//Расстояние между слайдами в пикселях.
	delay: 400,
	autoplay: {
		delay: 3000,
	 },
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

//======wow========
new WOW().init();

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
	buttons.forEach((button, numButton) => {
		if (target === button) {
			buttons[numButton].classList.add('active')
			anotherClasses.forEach(elem => {
				elem[numButton].classList.add('active')
			})
		}
	})
}

function deleteActiveClass(...deleteActiveClassAllElements) {
	deleteActiveClassAllElements.forEach(nodes => {
		nodes.forEach(elem => {
			if (elem.classList.contains('active')) elem.classList.remove('active')
		})
	})
}



//=============spoiler========

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

//==============modal==============

const modalActive = () => {
	const modal = document.querySelector('.overlay')
	const body = document.querySelector('body')

	modal.classList.add('active')
	body.classList.add('body-lock')

	const modalClose = () => {
		modal.classList.remove('active')
		body.classList.remove('body-lock')
	}
	document.querySelector('.modal__close').onclick = modalClose;

	
}

document.querySelector('.mobile-app__info-get-course').onclick = modalActive;


//=============Navigation menu==============

//forTeacher education

const toggleClassFunc = function () {
	document.querySelector('#forTeacherOpen').classList.toggle('open')
}
const toggleClassFunc1 = function () {
	document.querySelector('#educationOpen').classList.toggle('open')
}


document.querySelector('#education').onclick = toggleClassFunc1
document.querySelector('#forTeacher').onclick = toggleClassFunc
