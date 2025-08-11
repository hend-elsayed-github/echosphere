//
let toggleBtn=document.getElementById('toggle-btn')
let closeBtn=document.getElementById('close-btn')
let mediaNavbar=document.getElementById('media-navbar')
let linksSide=document.querySelectorAll('#media-navbar a')
console.log(linksSide);


toggleBtn.addEventListener('click',() =>{
  mediaNavbar.classList.add('show')
})
closeBtn.addEventListener('click',() => {
  mediaNavbar.classList.remove('show')
})
linksSide.forEach((a) => {
  a.addEventListener('click',() => {
    mediaNavbar.classList.remove('show')
  })
})

const iconContact = document.querySelectorAll("#icon-contact a");

  window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight * .15) {
        iconContact.forEach((a) => {
            a.classList.add("change")
        })
      
    } else {
      iconContact.forEach((a) => {
            a.classList.remove("change")
        })
    }
  });


// Animation on scroll
const elements = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

elements.forEach((el) => observer.observe(el));
