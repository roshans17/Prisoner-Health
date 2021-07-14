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