// ==========toogle=========
let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = ()=>{
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
// ============scrolling==========
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = ()=>{
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>=offset && top<offset+height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });
    // ================nave bar ko stacky krna k lia================
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    // ========click krna pr  wapes oper chli jay ge ==========
    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active')
};

ScrollReveal({
    //  reset: true,
     distance:'80px',
     duration:2000,
     delay:200
     });
ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img ', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content ', { origin: 'right'});


// Array of texts to be typed (excluding "expert")
const texts = [
    "A Frontend Designer",
    "Web scraper",
    "Python developer"
    // Add more texts as needed
  ];
  
  // Get the heading element
  const headingElement = document.querySelector('.animation');
  
  // Function to create typing effect for each text in the array
  function typeTexts(textArray, element, delay = 1500) {
    const expertText = "";
    let textIndex = 0;
  
    function type() {
        const text = textArray[textIndex];
        let charIndex = 0;
        let displayedText = expertText; // Keep "expert" unchanged
        element.textContent = ''; // Clear previous text
  
        function typeNextChar() {
            if (charIndex < text.length) {
                displayedText += text.charAt(charIndex);
                element.textContent = displayedText;
                charIndex++;
                setTimeout(typeNextChar, delay / text.length);
            } else {
                setTimeout(removeNextChar, delay);
            }
        }
  
        function removeNextChar() {
            let textLength = element.textContent.length;
            if (textLength > expertText.length) {
                element.textContent = element.textContent.slice(0, -1);
                setTimeout(removeNextChar, delay / text.length);
            } else {
                textIndex = (textIndex + 1) % textArray.length;
                setTimeout(type, delay);
            }
        }
  
        // Start typing animation
        typeNextChar();
    }
  
    // Start the typing animation
    type();
  }
  
  // Start the typing animation (infinitely)
  typeTexts(texts, headingElement); // Change text every 2 seconds (default delay)
  