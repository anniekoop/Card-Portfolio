const work = document.getElementById('work');
const about = document.getElementById('about');
const contact = document.getElementById('contact');

const workLink = document.getElementById('work-link');
const aboutLink = document.getElementById('about-link');
const contactLink = document.getElementById('contact-link');

workLink.addEventListener('click', function() {
    work.style.display = 'block';
    about.style.display = 'none';
    contact.style.display = 'none';
})

aboutLink.addEventListener('click', function() {
    work.style.display = 'none';
    about.style.display = 'block';
    contact.style.display = 'none';
})

contactLink.addEventListener('click', function() {
    work.style.display = 'none';
    about.style.display = 'none';
    contact.style.display = 'block';
})