const btn1 = document.querySelector('.button-1');
const tg1 = document.querySelector('.tarjetas-1');

btn1.addEventListener('click' , () => {
	tg1.classList.toggle('active');
        
        tg1.style.opacity = "1";
        tg2.style.opacity = "0";
        tg3.style.opacity = "0";

});

const btn2 = document.querySelector('.button-2');
const tg2 = document.querySelector('.tarjetas-2');

btn2.addEventListener('click' , () => {
	tg2.classList.toggle('active');

        tg1.style.opacity = "0";
        tg2.style.opacity = "1";
        tg3.style.opacity = "0";

});

const btn3 = document.querySelector('.button-3');
const tg3 = document.querySelector('.tarjetas-3');

btn3.addEventListener('click' , () => {
	tg3.classList.toggle('active');

        tg1.style.opacity = "0";
        tg2.style.opacity = "0";
        tg3.style.opacity = "1";
});