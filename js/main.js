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


circles = document.querySelectorAll('.progress-ring__circle');
levels = document.querySelectorAll('.reserves__progress-level');


circles.forEach(circle => {
	const radius = circle.r.baseVal.value;
	const circumference = 2 * Math.PI * radius;
	circle.style.strokeDasharray = `${circumference} ${circumference}`;
	circle.style.strokeDashoffset = circumference;
	setProgress(circumference, circle);
	// alert(level.innerHTML);
	// writeLevel(offset);
})






levels.forEach(level => {
	const rise = level.getAttribute('data-progress');
	if (rise >= 66) {
		level.innerHTML = "Достатній";
	} else if (rise <= 65 && rise >= 33) {
		level.innerHTML = "Середній";
	}
	else {
		level.innerHTML = "Низький";
	}
})

function setProgress(circumference, circle) {
	const offset = circumference - circle.getAttribute('data-progress') / 100 * circumference;
	circle.style.strokeDashoffset = offset;

}




// createCommonAttribute();
// function createCommonAttribute() {
// 	var circleAttribute = document.querySelector('.progress-ring__circle').getAttribute('data-progress');
// 	var textNoAttribute = document.querySelector('.reserves__progress-level');

// 	var textPrint = textNoAttribute.innerHTML = circleAttribute;
// alert(textPrint);
// var greenY;

// for (let i = 0; i < numberGreen; i++) {

// 	greenY = Math.ceil(Math.random() * greenDots.clientHeight);
// 	greenX = Math.ceil(Math.random() * greenDots.clientWidth);

// 	var greenDot = document.createElement('div');
// 	greenDots.appendChild(greenDot);
// 	greenDot.className = 'dot-green';

// 	greenDot.style.bottom = greenY + "px";
// 	greenDot.style.left = greenX + "px";

// 	addPrompt(greenDot);

// }
// }
// const circle = document.querySelector('.progress-ring__circle');
// const radius = circle.r.baseVal.value;
// const circumference = 2 * Math.PI * radius;

// const input = document.querySelector('.progress');
// function determineEndValue(input) {
// 	setProgress(input.value);
// }

// circle.style.strokeDasharray = `${circumference} ${circumference}`;
// circle.style.strokeDashoffset = circumference;



// function setProgress(percent) {
// 	const offset = circumference - percent / 100 * circumference;
// 	circle.style.strokeDashoffset = offset;
// }
// setProgress(determineEndValue(input));

// alert();


// var speed = 30;
// var progressStartValue = 0;
// let circularProgress = document.querySelector('.circular-progress');
// let progressValue = document.querySelector('.progress-value');
// let progressEndValue = 0;
// let progressNumber = 0;
// determineEndValue();




// function determineEndValue() {
// 	progressEndValue = document.querySelector('.progress-value').getAttribute("value");
// 	progressNumber = Number(progressEndValue);
// 	setInterval(progressNumber);
// 	writeLevel();
// }

function writeLevel() {

	if (offset >= 66) {
		level.innerHTML = "Достатній";
	} else if (offset <= 65 && offset >= 33) {
		level.innerHTML = "Середній";
	}
	else {
		level.innerHTML = "Низький";
		// alert(progressNumber);
	}
}
// let progress = setInterval(() => {
// 	progressStartValue++;
// 	progressValue.textContent = progressStartValue;
// 	circularProgress.style.background = 'conic-gradient(#D70025 ' + (progressStartValue * 3.6) + 'deg, #ffffff 0deg)';

// 	if (progressStartValue == progressEndValue) {
// 		clearInterval(progress);
// 	}

// }, speed);
// findProgresses();
// function findProgresses() {
// let progresses = document.querySelectorAll('.progress-value')
// progresses.forEach(function (findProgresses) {
// 	for (let i = 0; i < progresses.length; i++) {
// 		// alert(progressesNumber);
// 		determineEndValue();
// 		// alert(progressNumber)
// 		writeLevel();
// 	}
// 	alert(progress.isArray)
// });








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

+function () {
	// document.querySelector('.accordeon__section')

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


// + function name() {


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
	// }
// $.magnificPopup.open({
// 	items: {
// 		src: 'https://www.youtube.com/watch?v=0O2aH4XLbto'
// 	},
// 	type: 'iframe'
// });
