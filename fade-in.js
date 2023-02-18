const faders = document.querySelectorAll('.fade-in-about-me'); // "About me" pealkiri

const appears = document.querySelectorAll('.fade-in-about-me-text'); // "About me" alumine tekst

const appearOptions = {
    threshold: 1, 
    rootMargin: "0px 0px -30px 0px" // Mida suurem on negatiivne arv, seda rohkem peab inimene alla liikuma, et näha animatsiooni
};

// "About me" pealkiri
const appearOnScroll = new IntersectionObserver
(function(
    entries,
    appearOnScroll
) {
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


// "About me" alumine tekst
faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

appears.forEach(appear => {
    appearOnScroll.observe(appear);
})