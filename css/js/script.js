// 1. ACTIVE NAV ON SCROLL
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
        const sectionTop = sec.offsetTop;
        const sectionHeight = sec.clientHeight;
        if(pageYOffset >= sectionTop - 200){
            current = sec.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href').includes(current)){
            link.classList.add('active');
        }
    });
});

// 2. TYPEWRITER EFFECT SA ABOUT
const typeText = document.querySelector('.typewriter p');
if(typeText){
    const text = typeText.innerText;
    typeText.innerText = '';
    let i = 0;
    function typeWriter(){
        if(i < text.length){
            typeText.innerText += text.charAt(i);
            i++;
            setTimeout(typeWriter, 40);
        }
    }
    // Start pag nakita yung about section
    const observer = new IntersectionObserver(entries => {
        if(entries[0].isIntersecting) typeWriter();
    });
    observer.observe(document.querySelector('#about'));
}

// 3. PROJECT LINKS - DIRECT SA GITHUB
const projects = [
    "https://github.com/erencanam42-boop/calculator-java", // palitan mo
    "https://github.com/erencanam42-boop/caman_rene-portfolio",
    "https://github.com/erencanam42-boop/network-setup"
];
const projectBtns = document.querySelectorAll('.btn-small');
projectBtns.forEach((btn, index) => {
    btn.href = projects[index];
    btn.target = "_blank";
});
// CONTACT FORM - APPROVED
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // para di mag refresh yung page

    const username = document.getElementById('username').value;
    const gmail = document.getElementById('gmail').value;
    const message = document.getElementById('message').value;
    const result = document.getElementById('result');

    // Check kung may laman
    if(username !== "" && gmail !== "" && message !== ""){
        result.innerHTML = `✅ <span style="color:#ff0033;">APPROVED!</span> Thanks ${username}, I got your message.`;
        result.style.color = "#00ff00";
        this.reset(); // para ma-clear yung form
    } else {
        result.innerHTML = "❌ Please fill in all fields.";
        result.style.color = "red";
    }
});
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('✅ Message Sent! Salamat sa pag contact !');
    this.reset();
});
// CARD SLIDER - CLICK TO CYCLE - FIXED VERSION
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('projectSlider');
    
    if(slider) {
        function updateCards() {
            const cards = slider.querySelectorAll('.project-card');
            cards.forEach((card, index) => {
                card.style.transform = `translateX(${index * 20}px) rotate(${index * 4}deg) scale(${1 - index * 0.05})`;
                card.style.zIndex = cards.length - index;
                card.style.opacity = 1 - (index * 0.15);
            });
        }
        
        updateCards(); // Run once sa start
        
        slider.addEventListener('click', () => {
            const firstCard = slider.querySelector('.project-card');
            slider.appendChild(firstCard); // Lipat sa dulo
            updateCards(); // Update ulit positions
        });
    }
});
// SKILL CARD SLIDER - CLICK TO CYCLE
const skillSlider = document.getElementById('skillSlider');
    
if(skillSlider) {
    function updateSkillCards() {
        const cards = skillSlider.querySelectorAll('.project-card');
        cards.forEach((card, index) => {
            card.style.transform = `translateX(${index * 20}px) rotate(${index * 4}deg) scale(${1 - index * 0.05})`;
            card.style.zIndex = cards.length - index;
            card.style.opacity = 1 - (index * 0.15);
        });
    }
    
    updateSkillCards(); // Run once sa start
    
    skillSlider.addEventListener('click', () => {
        const firstCard = skillSlider.querySelector('.project-card');
        skillSlider.appendChild(firstCard); // Lipat sa dulo
        updateSkillCards(); // Update ulit positions
    });
}
function makeSlider(id){
    const slider = document.getElementById(id);
    function update(){
        slider.querySelectorAll('.project-card').forEach((card, i)=>{
            card.style.transform = `translateX(${i * 20}px) rotate(${i * 4}deg) scale(${1 - i * 0.05})`;
            card.style.zIndex = 4 - i; card.style.opacity = 1 - (i * 0.15);
        });
    }
    update();
    slider.addEventListener('click', ()=>{ slider.appendChild(slider.querySelector('.project-card')); update(); });
}
makeSlider('projectSlider');
document.addEventListener('DOMContentLoaded', function() {
    
    function makeSlider(id){
        const slider = document.getElementById(id);
        if(!slider) return; // Para di mag error kung wala

        function update(){
            const cards = slider.querySelectorAll('.project-card');
            cards.forEach((card, i)=>{
                card.style.transition = '0.5s';
                card.style.position = 'absolute';
                card.style.left = '50%';
                card.style.top = '0';
                card.style.transform = `translateX(${i * 30 - 50}%) rotate(${i * 5}deg) scale(${1 - i * 0.08})`;
                card.style.zIndex = 10 - i; 
                card.style.opacity = 1 - (i * 0.2);
            });
        }
        update(); // Run once pag load

        // PAG CLICK SA SLIDER, ILILIPAT YUNG UNANG CARD SA HULI
        slider.addEventListener('click', ()=>{
            slider.appendChild(slider.querySelector('.project-card')); 
            update(); 
        });
    }

    // TAWAGIN NATIN YUNG FUNCTION
    makeSlider('skillSlider'); 
    makeSlider('projectSlider'); // Kung meron ka nito

});
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    if(sec.getBoundingClientRect().top < 500){
      sec.classList.add('show');
    }
  })
})
