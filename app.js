const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector(".home");
const menu = document.querySelector(".menu");
const headline = document.querySelector(".headline");
const aboutme = document.querySelector(".about-me");
const blog = document.querySelector(".blog");
const curriculums = document.querySelector(".curriculums");
const resume = document.querySelector(".resume");
const author = document.querySelector(".author");

const tl = new TimelineMax();

tl.fromTo(hero,1, {height: '0%'}, {height: '80%', ease: Power2.easeInOut })
.fromTo(hero, 1.2, {width: '100%'}, {width: '80%', ease: Power2.easeInOut })
.fromTo(slider, 1.2, {x: "-100%"}, {x: "-100%", ease: Power2.easeInOut}, "-=1.2")
.fromTo(logo, 0.5, {opacity:0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
.fromTo(menu, 0.5, {opacity:0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
.fromTo(headline, 0.5, {opacity:0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
.fromTo(blog, 0.5, {opacity:0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
.fromTo(curriculums, 0.5, {opacity:0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
.fromTo(resume, 0.5, {opacity:0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
.fromTo(aboutme, 0.5, {opacity:0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
.fromTo(author, 0.5, {opacity:0, x: 30}, {opacity: 1, x: 0}, "-=0.5")

function scrollAppear(){
    var blogCaption = document.querySelector('.blog-post-caption');
    var captionPos = blogCaption.getBoundingClientRect().top;
    var screenPosition = window.innerHeight/1.2;
    var blogPost = document.querySelector('.blog-post');
    var blogPostPos = blogPost.getBoundingClientRect().top;
    var blogTitle = document.querySelector('.blog-title');
    var blogTitlePos = blogTitle.getBoundingClientRect().top;

    if(captionPos < screenPosition){
        blogCaption.classList.add('blog-post-caption-appear');
    }
    if(blogPostPos < screenPosition){
        blogPost.classList.add('blog-post-appear');
    }
    if(blogTitlePos < screenPosition){
        blogTitle.classList.add('blog-title-appear');
    }
}

window.addEventListener('scroll', scrollAppear);


const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li")
window.addEventListener("scroll",() => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });
  
    navLi.forEach((li) => {
      li.classList.remove("active");
      if (li.classList.contains(current)) {
        li.classList.add("active");
      }
    });
  });
  
  $(document).on('mousemove', function(e){
    $('.light').css({
       left:  e.pageX - 300,
       top:   e.pageY - 300
    });
});

var el = $('.js-tilt-container');

el.on('mousemove', function(e){
	const {left, top} = $(this).offset();
	const cursPosX = e.pageX - left;
	const cursPosY = e.pageY - top;
	const cursFromCenterX = $(this).width() / 2 - cursPosX;
	const cursFromCenterY = $(this).height() / 2 - cursPosY;
	

	$(this).css('transform','perspective(500px) rotateX('+ (cursFromCenterY / 40) +'deg) rotateY('+ -(cursFromCenterX / 40) +'deg) translateZ(10px)');
  
  const invertedX = Math.sign(cursFromCenterX) > 0 ? -Math.abs( cursFromCenterX ) : Math.abs( cursFromCenterX );
  
  //Parallax transform on image
  $(this).find('.js-perspective-neg').css('transform','translateY('+ ( cursFromCenterY / 10) +'px) translateX('+ -(invertedX  / 10) +'px) scale(1.15)');

	$(this).removeClass('leave');
});

el.on('mouseleave', function(){
	$(this).addClass('leave');
});