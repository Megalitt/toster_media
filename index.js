// scroll
const scrollContainer = document.querySelector(".slider__wrap");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
});

//timer
function getTimeRemaining(endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date());
  let seconds = Math.floor((t / 1000) % 60);
  let minutes = Math.floor((t / 1000 / 60) % 60);
  let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  return {
    'total': t,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}
 
function initializeClock(cll, endtime) {
  let clock = document.querySelector(cll);
  let hoursSpan = clock.querySelector('.hours');
  let minutesSpan = clock.querySelector('.minutes');
  let secondsSpan = clock.querySelector('.seconds');
 
  function updateClock() {
		let t = getTimeRemaining(endtime);
    hoursSpan.innerHTML = ('0' + t.hours+ ':' ).slice(-3);
    minutesSpan.innerHTML = ('0' + t.minutes + ':' ).slice(-3);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
 
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }
 
  updateClock();
  let timeinterval = setInterval(updateClock, 0);
}
 
let deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
initializeClock('.timer', deadline);

// footer
let footerText = document.querySelector('.footer p')
let conditionsActiv = document.querySelector('.conditions')
let rovActiv = document.querySelector('.row')
let btnOffer = document.querySelector('.offer')
let dropList = document.querySelector('.drop_list')
let dropListImg = document.querySelector('.drop_list img')
let listCompany = document.querySelector('.list-company')
let menu = document.querySelector('.menu')
let closeMenu = document.querySelector('.close-menu')
let burger = document.querySelector('.burger')
let popapBtn = document.querySelector('.purchase__btn')
let popap = document.querySelector('.popap')
let popapClose = document.querySelector('.close-popap')

btnOffer.addEventListener('click', () => {
	if(footerText.classList.contains('footer-activ')){
		footerText.classList.remove('footer-activ')
		btnOffer.innerHTML = 'Read less'
	}else{
		footerText.classList.add('footer-activ')
		btnOffer.innerHTML = 'Read more'
	}	
})

dropList.addEventListener('click', () => {
	listCompany.classList.toggle('conditions-activ') 
	dropListImg.classList.toggle('row-activ')	
})

closeMenu.addEventListener('click', () => {
	menu.classList.remove('menu-open') 	
})

burger.addEventListener('click', () => {
	menu.classList.add('menu-open') 	
})

popapBtn.addEventListener('click', () => {
	popap.classList.add('popap-open') 	
})

popapClose.addEventListener('click', () => {
	popap.classList.remove('popap-open') 	
})