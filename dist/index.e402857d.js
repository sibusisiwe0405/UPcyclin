!function(){let t;var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},l={},r=e.parcelRequire2524;null==r&&((r=function(t){if(t in i)return i[t].exports;if(t in l){var e=l[t];delete l[t];var r={id:t,exports:{}};return i[t]=r,e.call(r.exports,r,r.exports),r.exports}var s=Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){l[t]=e},e.parcelRequire2524=r);// Import necessary functions and classes
var s=r("1OZqT");class n{// Initialize DOM and style related properties
// Various elements within this item
DOM={// Main DOM element
el:null,// .title-wrap element
titleWrap:null,// .title--up
titleUp:null,// .title--down
titleDown:null,// .content elements
content:null,// svg element
svg:null,// This is the mask element, it can be either a circle or a path SVG element.
// We will be animating the 'radius' attribute for circle or the 'd' attribute for path.
mask:null,// image element
image:null};// flipstate saves the current state of title elements
flipstate=null;/**
     * Sets up the necessary elements and data for an Item instance.
     * @param {HTMLElement} DOM_el - The DOM element that represents the item.
     */constructor(t){// Assign DOM elements
this.DOM.el=t,this.DOM.titleWrap=this.DOM.el.querySelector(".title-wrap"),this.DOM.titleUp=this.DOM.titleWrap.querySelector(".title--up"),this.DOM.titleDown=this.DOM.titleWrap.querySelector(".title--down"),this.DOM.content=[...this.DOM.el.querySelectorAll(".content")],this.DOM.svg=this.DOM.el.querySelector(".content__img"),this.DOM.mask=this.DOM.svg.querySelector(".mask"),this.DOM.image=this.DOM.svg.querySelector("image"),// Save current state
this.flipstate=Flip.getState([this.DOM.titleUp,this.DOM.titleDown]),// Change layout
this.DOM.content[1].prepend(this.DOM.titleUp,this.DOM.titleDown);// Check if the mask element is a circle or a path
let e="circle"===this.DOM.mask.tagName.toLowerCase(),i=Flip.from(this.flipstate,{ease:"none",simple:!0}).fromTo(this.DOM.mask,{attr:e?{r:this.DOM.mask.getAttribute("r")}:{d:this.DOM.mask.getAttribute("d")}},{ease:"none",attr:e?{r:this.DOM.mask.dataset.valueFinal}:{d:this.DOM.mask.dataset.valueFinal}},0)// Also scale up the image element
.fromTo(this.DOM.image,{transformOrigin:"50% 50%",filter:"brightness(100%)"},{ease:"none",scale:e?1.2:1,filter:"brightness(150%)"},0);ScrollTrigger.create({trigger:this.DOM.titleWrap,ease:"none",start:"clamp(top bottom-=10%)",end:"+=40%",scrub:!0,animation:i})}}// Function to initialize Lenis for smooth scrolling
let o=()=>{// Update ScrollTrigger each time the user scrolls
// Instantiate the Lenis object with specified properties
(t=new Lenis({lerp:.1,smoothWheel:!0// Enables smooth scrolling for mouse wheel events
})).on("scroll",()=>ScrollTrigger.update());// Define a function to run at each animation frame
let e=i=>{t.raf(i),requestAnimationFrame(e)};// Start the animation frame loop
requestAnimationFrame(e)};// Start preloading fonts
(0,s.preloadFonts)("qsy7khk").then(()=>{// Once fonts are loaded, remove the 'loading' class from the body, ending the loading state
document.body.classList.remove("loading"),// Initialize smooth scrolling
o(),// Select all elements with the class 'content-wrap', and for each, create a new instance of the Item class
[...document.querySelectorAll(".content-wrap")].forEach(t=>{new n(t)})})}();