const section1 = document.querySelector('.button-1');
const galery1 = document.querySelector('.tarjetas-1');
const section2 = document.querySelector('.button-2');
const galery2 = document.querySelector('.tarjetas-2');
const section3 = document.querySelector('.button-3');
const galery3 = document.querySelector('.tarjetas-3');

section1.addEventListener('click' , () => {
	galery1.classList.toggle('active');
});
section2.addEventListener('click' , () => {
	galery2.classList.toggle('active');
});
section3.addEventListener('click' , () => {
	galery3.classList.toggle('active');
});

