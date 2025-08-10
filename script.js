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

function drawArabicLogo() {
  const canvasAr = document.getElementById("myCanvasLogoAr");
  const ctxAr = canvasAr.getContext("2d");

  const displayHeight = canvasAr.clientHeight;
  let fontSize = displayHeight * 0.6;

  ctxAr.font = `${fontSize}px 'SomarSans-SemiBold`;
  const text = "ايكوسفير";
  const textWidth = ctxAr.measureText(text).width;

  const padding = 15;
  const requiredWidth = textWidth + padding * 2;

  // Set internal resolution
  canvasAr.width = requiredWidth;
  canvasAr.height = displayHeight;

  ctxAr.clearRect(0, 0, canvasAr.width, canvasAr.height);

  ctxAr.font = `${fontSize}px SomarSans-SemiBold`;
  ctxAr.fillStyle = "#008080";
  ctxAr.textAlign = "right";
  ctxAr.direction = "rtl";

  ctxAr.fillText(text, canvasAr.width - padding, displayHeight - 10);
}

window.addEventListener("load", drawArabicLogo);
window.addEventListener("resize", drawArabicLogo);

function drawCanvasLogo() {
  const canvasEn = document.getElementById("myCanvasLogo");
  if (!canvasEn) return;

  const ctxEn = canvasEn.getContext("2d");

  // Match actual canvas resolution with display size
  const displayWidth = canvasEn.clientWidth || 200;
  const displayHeight = 45;
  canvasEn.width = displayWidth;
  canvasEn.height = displayHeight;

  // Clear previous drawings
  ctxEn.clearRect(0, 0, canvasEn.width, canvasEn.height);

  // Calculate font size relative to canvas height
  const fontSize = displayHeight * 0.6;
  ctxEn.font = `${fontSize}px SomarSans-SemiBold`;
  ctxEn.fillStyle = "#008080";
  ctxEn.lineWidth = 1.5;

  // Draw text centered vertically
  ctxEn.fillText("ecosphere", 15 , displayHeight - 10);
}

// Draw once on load
window.addEventListener("load", drawCanvasLogo);
// Redraw on resize for responsiveness
window.addEventListener("resize", drawCanvasLogo);


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
