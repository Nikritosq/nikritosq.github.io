//fill logo

document.addEventListener('DOMContentLoaded', () => {
    function animateSgv (id, delay, delayIncrement){
        const logo = document.getElementById('logo');
        const logoPaths = document.querySelectorAll(`#${id} path`);
        delay = delay;
        for(let i = 0; i < logoPaths.length; i++){
            //console.log(logoPaths[i].getTotalLength());
            logoPaths[i].style.strokeDasharray  = logoPaths[i].getTotalLength();
            logoPaths[i].style.strokeDashoffset = logoPaths[i].getTotalLength();
            logoPaths[i].style.animation = `line-anim 2s ease forwards ${delay}s`;
            delay+=delayIncrement;
        }
        logo.style.animation = `fill 1.2s ease forwards ${delay+2}s`;
    }
    animateSgv('logo', 0, 0.3)
}, false);

//search bar and project block

const projectLis = document.getElementById('projectLis');
const searchBar = document.getElementById('sb');
let myProjects = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const matchedProjects = myProjects.filter((project) => {
        return (
            project.name.toLowerCase().includes(searchString) ||
            project.language.primary.toLowerCase().includes(searchString)
        );
    });
    showProjects(matchedProjects);
});

const loadProjects = async () => {
    try {
        const res = await fetch('projects.json');
        myProjects = await res.json();
        showProjects(myProjects);
    } catch (err) {
        console.error(err);
    }
};

const showProjects = (projects) => {
    const htmlString = projects
        .map((project) => {
            return `
            <div class="project">
                <div class="desc_p">
                    <a href='${project.href}' target='_blank'>${project.name}</a>
                    <p>Language: ${project.language.primary}</p>
                    <p class='text_desc'> ${project.text}</p>
                </div>
                <img src="${project.image_url}" class="img_poject"></img>
            </div>
        `;
        })
        .join('');
    projectLis.innerHTML = htmlString;
};

loadProjects();

//prevet defaul for submit button

document.getElementById('scrl_p_i').addEventListener('click', function(q) {
    q.preventDefault();
    if (document.querySelector('.menu').classList.contains('menu-active')){
        document.querySelector('.menu').classList.remove('menu-active');
        document.querySelector('.nav-links').classList.remove('nav-active');
    }
});

document.getElementById('scrl_p_m').addEventListener('click', function(q) {
    q.preventDefault();
    if (document.querySelector('.menu').classList.contains('menu-active')){
        document.querySelector('.menu').classList.remove('menu-active');
        document.querySelector('.nav-links').classList.remove('nav-active');
    }
});

document.getElementById('scrl_s_m').addEventListener('click', function(q) {
    q.preventDefault();
    if (document.querySelector('.menu').classList.contains('menu-active')){
        document.querySelector('.menu').classList.remove('menu-active');
        document.querySelector('.nav-links').classList.remove('nav-active');
    }
});

document.getElementById('scrl_r').addEventListener('click', function(q) {
    q.preventDefault();
    if (document.querySelector('.menu').classList.contains('menu-active')){
        document.querySelector('.menu').classList.remove('menu-active');
        document.querySelector('.nav-links').classList.remove('nav-active');
    }
});

//menu-adapt

document.querySelector('.menu').addEventListener('click', function(e) {
    e.preventDefault();
    if (this.classList.contains('menu-active')){
        this.classList.remove('menu-active');
        document.querySelector('.nav-links').classList.remove('nav-active');
    }
    else {
        this.classList.add('menu-active');
        document.querySelector('.nav-links').classList.add('nav-active');
    }
});

//scroll functions

document.getElementById('scrl_top').addEventListener('click', SmoothScrollToTop)
document.getElementById('scrl_p_m').addEventListener('click', SmoothScrollToP);
document.getElementById('scrl_p_i').addEventListener('click', SmoothScrollToP);
document.getElementById('scrl_r').addEventListener('click', SmoothScrollToR);
document.getElementById('scrl_s_i').addEventListener('click', SmoothScrollToR);
document.getElementById('scrl_s_m').addEventListener('click', SmoothScrollToR);

function SmoothScrollToTop() {
    window.scrollTo({top: 0, behavior: "smooth"});
};

function SmoothScrollToP() {
    const projects_div = document.getElementById('project_in_list');
    projects_div.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
};

function SmoothScrollToR() {
    const resumes_div = document.getElementById('resumes');
    resumes_div.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
};

function SmoothScrollToS() {
    const socials_div = document.getElementById('socials');
    socials_div.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
};