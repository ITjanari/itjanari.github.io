const appearOptions = {
    threshold: 0.5
};

// intersection observer
const appearOnScroll = new IntersectionObserver (function(entries, appearOnScroll) {
    entries.forEach(entry => {
       if (!entry.isIntersecting) {
        return;
       } else {
         entry.target.classList.add('appear');
         appearOnScroll.unobserve(entry.target);
       }
    })
},
appearOptions)

// about me info/text
const aboutMe = document.querySelector('.aboutMeTextHome');

appearOnScroll.observe(aboutMe)

// CMOS ASTRO & my name
const cmosAstro = document.querySelector(".text");
const myName = document.querySelector(".text-two");

appearOnScroll.observe(cmosAstro);
appearOnScroll.observe(myName);