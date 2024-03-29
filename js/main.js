const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};

if (isMobile.any()) {
	document.body.classList.add('_touch');
	let menuArrows = document.querySelectorAll('.menu__arrow');
	if (menuArrows.length > 0) {
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener("click", function (e) {
				menuArrow.parentElement.classList.toggle('_active');
			});
		}
	}
} else {
	document.body.classList.add('_pc')
}

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

// Progress
let progress = document.querySelectorAll('.progress');
let progress_text = document.querySelectorAll('.reserves__item-text ');
progress.forEach((pro) => {
	let percentage = pro.getAttribute('data-value');
	let color = pro.getAttribute('data-stroke');
	let radius = pro.r.baseVal.value;
	let circumference = radius * 2 * Math.PI;
	let stroke = circumference - (circumference * percentage) / 100;
	pro.style.setProperty('--stroke-dashoffset', stroke);
	pro.style.setProperty('--stroke-dasharray', circumference);
	pro.style.setProperty('--stroke', color);
	pro.style.setProperty('--animation-time', `${percentage * 100}ms`);
});
progress_text.forEach((text) => {
	let data = text.getAttribute('data-value');
	let progress_value = 0;
	let progress_bar = setInterval(() => {
		progress_value++;
		if (data >= 66) {
			text.innerHTML = "Достатній";
		} else if (data <= 65 && data >= 33) {
			text.innerHTML = "Середній";
		}
		else {
			text.innerHTML = "Низький";
		}
		if (progress_value == data) {
			clearInterval(progress_bar);
		}
	}, 100);
});

/*-----ANIMATION------*/
const animItems = document.querySelectorAll('._anim-items');
if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				animItem.classList.remove('_active');
			}
		}
	}

	function offset(el) {
		var rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	setTimeout(() => {
		animOnScroll();
	}, 500);
}

/*------VIDEO----*/
window.addEventListener('DOMContentLoaded', function () {
	var videos = document.querySelectorAll('.video');

	videos.forEach(function (video) {

		video.addEventListener('click', function () {

			if (video.classList.contains('ready')) {

				return;

			}

			video.classList.add('ready');

			var src = video.dataset.src;

			video.insertAdjacentHTML('afterbegin', '<iframe width="560" height="315" src="' + src + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');

		});

	});

});

/*-------ACCORDEON--------*/
+function () {

	var accordeonHeaderClickHandler = function (e) {

		document.querySelectorAll('.accordeon__section').forEach(function (section) {

			section.querySelector('.accordeon__body').style.maxHeight = '0px'

		})

		var accordeonSection = e.target.closest('.accordeon__section');

		var insideElHeight = accordeonSection.querySelector('.accordeon__body > *').clientHeight;

		e.target.closest('.accordeon__section').querySelector('.accordeon__body').style.maxHeight = insideElHeight + 'px';

	}

	document.querySelectorAll('.accordeon__section').forEach(function (section) {
		section.addEventListener('click', accordeonHeaderClickHandler)
	})
}()


$('.documentation-certificate__item').magnificPopup({
	type: 'image',
	gallery: {
		enabled: true
	},
	removalDelay: 300,
});


$(document).ready(function () {
	$('.popup-youtube').magnificPopup({
		type: 'iframe',
		iframe: {
			markup: '<div class="mfp-iframe-scaler">' +
				'<div class="mfp-close"></div>' +
				'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
				'</div>',

			patterns: {
				youtube: {
					index: 'youtube.com/',

					id: 'v=',

					src: '//www.youtube.com/embed/%id%?autoplay=1'
				},
				vimeo: {
					index: 'vimeo.com/',
					id: '/',
					src: '//player.vimeo.com/video/%id%?autoplay=1'
				},
				gmaps: {
					index: '//maps.google.',
					src: '%id%&output=embed'
				}

			},

			srcAction: 'iframe_src',
		}

	});
});
