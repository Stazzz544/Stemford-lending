//Tabs

const tabBorder = document.querySelectorAll('.tabs-section__tab-nav-item');
const tabText = document.querySelectorAll('.tabs-section__tab-nav-item-text');
const tabImg = document.querySelectorAll('.tabs-section__tab-nav-item-img');
console.log(tabImg)

tabText.forEach((e) => {
	e.addEventListener('click', (e) => {
		const target = e.target;
		borderActive()
	})
})



function borderActive() {
	
	tabText.forEach((q, w) => {
		if (tabText[w] === target) {
			console.log('work')
		}
	})
}