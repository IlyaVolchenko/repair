$(function(){
  
$('.options__inner').slick({
   dots: false,
   arrows: false,
  autoplay: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplaySpeed: 2000,
});

$('.portfolio__inner').slick({
   dots: false,
   arrows: false,
  autoplay: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  autoplaySpeed: 2000,
});

    $('.menu__btn').on('click', function() {
      $('.menu__list').toggleClass('menu__list--active');
   });

	$(".menu__list, a").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});

});

let modal = document.querySelector('.modal');
let modalBtn = document.querySelector('.btn');
let modalBg = document.querySelector('.modal__bg');

modalBtn.addEventListener('click', function(){
  modal.classList.add('show');
  modalBg.classList.add('show');
});

document.addEventListener('click', function(e){
  let click = e.target.classList.value;
  if (click === 'modal__bg show') {
    modal.classList.remove('show');
    modalBg.classList.remove('show');
  }
});

