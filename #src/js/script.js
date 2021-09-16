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
	autoplay: {
		delay: 7000,
	 },
	delay: 400,
	loop: true,
	direction: 'horizontal',
	centeredSlides: true,
	initialSlide: 1,
	//Расстояние между слайдами в пикселях.
	
	
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});


//========animation mobile divices=========

function removeWOWandAnimateClasses () {
	if (document.body.offsetWidth <= 1024) {
		const wow  = document.querySelectorAll('.wow');
		const animate = document.querySelectorAll('.animate__animated')
		const jackInTheBox  = document.querySelectorAll('.animate__jackInTheBox');
		const fadeInLeftBig  = document.querySelectorAll('.animate__fadeInLeftBig');
		const fadeInRightBig  = document.querySelectorAll('.animate__fadeInRightBig');
		const fadeIn  = document.querySelectorAll('.animate__fadeIn');
		
		delClass(wow, 'wow')
		delClass(animate, 'animate__animated')
		delClass(jackInTheBox, 'animate__jackInTheBox')
		delClass(fadeInLeftBig, 'animate__fadeInLeftBig')
		delClass(fadeInRightBig, 'animate__fadeInRightBig')
		delClass(fadeIn, 'animate__fadeIn')
			function delClass (elements, className) {
				
				elements.forEach(element=>{
					if (element.classList.contains(className)){
						element.classList.remove(className)
					}
				})
			}
		}
	}
	removeWOWandAnimateClasses ()
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



const toggleClassFunc = function () {
	document.querySelector('#forTeacherOpen').classList.toggle('open')
	document.querySelector('#educationOpen').classList.remove('open')
	document.querySelector('.mobile-app').addEventListener('click', e => {
		if (!e.target.classList.contains('submenu__item-link')) {
			document.querySelector('#forTeacherOpen').classList.remove('open')
		}
	})
}

const toggleClassFunc1 = function () {
	document.querySelector('#educationOpen').classList.toggle('open')
	document.querySelector('#forTeacherOpen').classList.remove('open')
	document.querySelector('.mobile-app').addEventListener('click', e => {
		if (!e.target.classList.contains('submenu__item-link')) {
			document.querySelector('#educationOpen').classList.remove('open')
		}
	})
}

document.querySelector('#education').onclick = toggleClassFunc1
document.querySelector('#forTeacher').onclick = toggleClassFunc


//===========acordion=============

const accordionMenu = document.querySelectorAll('.accordeon__menu-item')

accordionMenu.forEach(e=> e.addEventListener('click', (e)=> {
	const target = e.target.closest('.accordeon__menu-item')
	const opener = target.querySelector('.accordeon__submenu')
	opener.classList.toggle('active')
}))


const burger = document.querySelector('.burger').addEventListener('click', (e) => {
	const accordeon = document.querySelector('.accordeon')
	const accordeonWrapper = document.querySelector('.accordeon-wrapper')
	const accordionClose = document.querySelector('.accordeon__close-wrapper')
	const body = document.querySelector('body')
	const submenu = document.querySelector('.accordeon__submenu')

	accordeon.classList.add('active')
	accordeonWrapper.classList.add('active')
	body.classList.add('body-lock')

	accordionClose.addEventListener('click', e => {
		accordeonWrapper.classList.remove('active')
		accordeon.classList.remove('active')
		submenu.classList.remove('active')
		body.classList.remove('body-lock')
	})

	body.addEventListener('click', e=>{
		
		console.log(e.target)
		if (e.target.classList.contains('accordeon-wrapper')){
			accordeonWrapper.classList.remove('active')
			accordeon.classList.remove('active')
			submenu.classList.remove('active')
			body.classList.remove('body-lock')
		}
	})
})


//===========Mailer=============

const forms = document.querySelectorAll('form');

forms.forEach(item => {
	postData(item);
	
});

function postData(form) {
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const loadingProgress = document.querySelector('.form__sending'),
				loadingSuccess = document.querySelector('.form__succes'),
				loadingFail = document.querySelector('.form__fail'),
				loadingDarkWrapper = document.querySelector('.form__sending-wrapper'),
				loadFormClose = document.querySelectorAll('.form__close');

				
				loadingDarkWrapper.classList.add('form__sending-wrapper_active');//затемняем фон
				loadingProgress.classList.add('form_active');//отправка сообщения(процесс)


				loadFormClose.forEach((e) => {
					e.addEventListener('click', () => {
						console.log('test');
						loadingDarkWrapper.classList.remove('form__sending-wrapper_active');

						if (loadingSuccess.classList.contains('form_active')) {
							loadingSuccess.classList.remove('form_active');

						} else if (loadingFail.classList.contains('form_active')) {
							loadingFail.classList.remove('form_active');
						}
					});
				});



		const request = new XMLHttpRequest();
		request.open('POST', 'mailer/smart.php');

		request.setRequestHeader('Content-type', 'application/json');
		const formData = new FormData(form);

		const object = {};
		formData.forEach(function(value, key){
			object[key] = value;
		});

		const json = JSON.stringify(object)

		request.send(json);

		request.addEventListener('load', () => {
			if (request.status === 200) {
				//console.log(request.response);

				loadingProgress.classList.remove('form_active');
				loadingSuccess.classList.add('form_active');

				form.reset();
				setTimeout(() => {
					loadingSuccess.classList.remove('form_active');
					loadingDarkWrapper.classList.remove('form__sending-wrapper_active');
				}, 10000);

			} else {
				loadingProgress.classList.remove('form_active');
				loadingFail.classList.add('form_active');

				setTimeout(() => {
					loadingFail.classList.remove('form_active');
					loadingDarkWrapper.classList.remove('form__sending-wrapper_active');
				}, 10000);
			}
		});
	});
}


