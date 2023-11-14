// Import the necessary function for preloading images
import { preloadImages, getGrid } from './utils2.js';

// Define a variable that will store the Lenis smooth scrolling object
let lenis;

// Element with class .columns
const grid = document.querySelector('.columns');
// All the columns class .column
const columns = [...grid.querySelectorAll('.column')];
// Map each column to its array of items and keep a reference of the image, its wrapper and the column
const items = columns.map((column, pos) => {
	return [...column.querySelectorAll('.column__item')].map(item => ({
		element: item,
		column: pos,
		wrapper: item.querySelector('.column__item-imgwrap'),
		image: item.querySelector('.column__item-img')
	}));
});
// All itemms
const mergedItems = items.flat();


const initSmoothScrolling = () => {

	lenis = new Lenis({
		lerp: 0.2, 
		smoothWheel: true 
	});

	
	lenis.on('scroll', () => ScrollTrigger.update());

	
	const scrollFn = (time) => {
		lenis.raf(time); 
		requestAnimationFrame(scrollFn); 
	};
	// Start the animation frame loop
	requestAnimationFrame(scrollFn);
};

const scroll = () => {
	const gridObj = getGrid(mergedItems.map(item => item.element));
	
	const rowMapping = {
		even: {
			skewX: 10,
			xPercent: 2, 
			transformOrigin: '0% 50%'
		},
		odd: {
			skewX: -10,
			xPercent: -2,
			transformOrigin: '100% 50%'
		}
	};
	
	['even', 'odd'].forEach(type => {
		gridObj.rows(type).flat().forEach(row => {
			gsap
			.timeline({
				defaults: {ease: 'none'},
				scrollTrigger: {
					trigger: row,
					start: 'top bottom',
					end: 'clamp(bottom top)',
					scrub: true
				}
			})
			.fromTo(row.querySelector('.column__item-imgwrap'), {
				transformOrigin: rowMapping[type].transformOrigin,
				opacity: 0.1,
				xPercent: rowMapping[type].xPercent,
				skewX: rowMapping[type].skewX
			}, {
				opacity: 1,
				xPercent: 0,
				skewX: 0
			}, 0)
			.fromTo(row.querySelector('.column__item-img'), {
				scaleY: 1.2
			}, {
				scaleY: 1
			}, 0)
		});
	});
}

// Preload images.
preloadImages('.column__item-img').then(() => {
	initSmoothScrolling();
	scroll();
	document.body.classList.remove('loading');
});

document.addEventListener('DOMContentLoaded', function() {
    var cards = document.getElementsByClassName('column__item-imgwrap');
    for (var i = 0; i < cards.length; i++) {
        cards[i].addEventListener('mouseover', function() {
            this.getElementsByClassName('card-content')[0].style.display = 'block';
        });
        cards[i].addEventListener('mouseout', function() {
            this.getElementsByClassName('card-content')[0].style.display = 'none';
        });
    }
});