// Toggle the visibility of the navigation menu on mobile
function myFunction() {
    const x = document.getElementById("myLinks");
    x.style.display = (x.style.display === "block") ? "none" : "block";  // Toggle between block and none
}

// Project Card Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle('show', entry.isIntersecting);
    });
});

// Hide video on mobile and show still image after page jump
document.querySelector('#jumpHome').addEventListener('click', () => {
    setTimeout(() => {
        const isMobile = window.innerWidth < 600;
        const video = document.querySelector('.hero video');
        const heroImage = document.querySelector('.hero .hero-image');

        if (isMobile) {
            video.style.display = 'none';
            heroImage.style.display = 'block';
        } else {
            video.style.display = 'block';
            heroImage.style.display = 'none';
        }
    }, 100); // Delay to ensure scroll behavior is finished
});

// Set autoplay for video depending on screen size
if (window.innerWidth >= 600) {
    document.querySelector('.hero video').setAttribute('autoplay', 'true');
} else {
    document.querySelector('.hero video').removeAttribute('autoplay');
}

// Observe hidden elements for animation
document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));

const projects = [
    {
        title: "Portfolio Site",
        description: "The Portfolio Site is my first project on the Full Stack Track Course at iO Academy, designed to showcase my skills, projects, and personal brand. Built using fundamental HTML and CSS, this site serves as a digital representation of my journey as a developer. I have since built another portfolio site (this one you're currently on) using JavaScript.",
        imgSrc: "portfolioScreenshot.png",
        github: "https://github.com/emferrari31/portfolio",
        liveDemo: "https://emferrari31.github.io/portfolio/",
        tags: ["html", "css"]
    },
    {
        title: "PHP Blackjack Game",
        description: "This project started as a command-line Blackjack game developed as part of my studies. After successfully implementing the core game logic, I adapted it for the web, adding a simple, user-friendly interface. The game allows users to press a 'Deal' button to refresh the page, reloading the game and resetting the gameplay. Built using PHP for the backend logic, and HTML and CSS for the frontend, this project showcases a blend of functional programming and web development skills.",
        imgSrc: "blackjackscreenshot.png",
        github: "https://github.com/emferrari31/php-blackJack",
        liveDemo: "https://2024-emmaf.dev.io-academy.uk/phpBlackJackGame/",
        tags: ["#php", "#html", "#css"]
    },
    {
        title: "Collection Application",
        description: "The Collection Application is a personal project inspired by my passion for photography. Built using PHP, HTML, CSS, and a SQL database, this web application allows users to showcase and manage their photo collections effortlessly.",
        imgSrc: "collectionAppScreenshot.png",
        github: "https://github.com/emferrari31/collection-app",
        liveDemo: "https://2024-emmaf.dev.io-academy.uk/collection-app/index.php",
        tags: ["php", "sql", "html", "css"]
    },
    {
        title: "Film Quote Quiz",
        description: "The Film Quote Quiz Game is an engaging group project developed by a team of six, designed to test users' knowledge of iconic movie quotes. Using JavaScript, HTML, and CSS, we created an interactive web application that combines fun and learning for film enthusiasts.",
        imgSrc: "Updated%20Film%20Game.png",
        github: "https://github.com/emferrari31/2024-jul-fst-film-quote-quiz",
        liveDemo: "https://io-academy.github.io/2024-jul-fst-film-quote-quiz/",
        tags: ["javascript", "html", "css"]
    },
    {
        title: "Furniture Store API",
        description: "The Furniture Store API is a collaborative project developed by a team of three, where we were responsible for building the backend to support a pre-existing front end for a furniture store website. Our focus was on creating a robust API that facilitates seamless data interaction between the frontend and backend.",
        imgSrc: "furnitureStoreApi.png",
        github: "https://github.com/iO-Academy/24-jul-hippos-furniture-store-API",
        liveDemo: "https://2024-henryt.dev.io-academy.uk/build/",
        tags: ["oop", "sql", "php"]
    },
    {
        title: "Planet Age Calculator",
        description: "The Planet Age Calculator is a web application designed to help users determine their age on different planets in our solar system. Developed as part of the iO Academy course, this solo exercise showcases my skills in TypeScript, HTML, and CSS.",
        imgSrc: "planet.png",
        github: "https://github.com/emferrari31/planet-age-calculator",
        liveDemo: "https://emferrari31.github.io/planet-age-calculator/",
        tags: [ "javascript", "html", "css"]
    },
    {
        title: "CRUD To-do App",
        description: "A solo exercise on the iO Academy course, this project is a to-do application that allows users to create, read, update, and delete tasks. It employs React for the front end, following the MVC architecture for a clean separation of concerns, and Slim as the backend framework.",
        imgSrc: "todoappscreenshot.png",
        github: "https://github.com/emferrari31/todoApp",
        liveDemo: "https://todoapp.2024-emmaf.dev.io-academy.uk/",
        tags: ["mvc", "react", "tailwind", "slim", "sql"]
    },
    {
        title: "E-Commerce Site",
        description: "Inspired by several fantastic-looking company websites, I embarked on a personal project to build an e-commerce platform while honing my React skills. Initially, my goal was to replicate the functionality and design of a site I admired. However, as the project evolved, I decided to give it its own unique identity, creating a brand and business concept to accompany the website. The platform was developed using React, JavaScript, and CSS, with a focus on delivering a seamless user experience and responsive design.",
        imgSrc: "e-commerceSite.png",
        github: "https://github.com/emferrari31/ecommerce-store",
        liveDemo: "https://ecom.2024-emmaf.dev.io-academy.uk/",
        tags: ["react", "html", "css", "javascript"]
    },
    {
        title: "Weather App",
        description: "This project is a full-stack weather application built with React and Vite, leveraging the OpenWeather API to provide real-time weather updates. The app features a clean, responsive design, dynamic weather icons, and smooth transitions for an engaging user experience. It was a great opportunity to refine my API handling, state management, and front-end styling skills.",
        imgSrc: "weather_app.png",
        github: "https://github.com/emferrari31/fs_weather_app",
        liveDemo: "https://fs-weather-app-hmsy.vercel.app/",
        tags: ["react", "html", "css", "API"]
    }
];

// Append project cards to the portfolio section
const projectContainer = document.querySelector('.portfolioSection');
projects.reverse().forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('card');
    projectCard.innerHTML = `
    <div class="card-front">
      <img style="max-width: 80%; border-radius: 5px;" src="${project.imgSrc}" alt="Screenshot of ${project.title}">
      <h3>${project.title}</h3>
      <div class="tags">
        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
    </div>
    <div class="card-back">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.github}" target="_blank"><button class="gitBtn">GitHub</button></a>
      <a href="${project.liveDemo}" target="_blank"><button class="liveBtn">Live Demo</button></a>
    </div>
    `;
    projectContainer.appendChild(projectCard);
});

// Typing effect for the "What I've been working on lately..." text
new Typed(".typedText", {
    strings: ["What I've been working on lately..."],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
});

// Function to toggle the content visibility (for each post)
function toggleContent(contentId) {
    const content = document.getElementById(contentId);
    const btn = content.previousElementSibling;  // The button just before the content div

    if (content.style.display === 'none') {
        content.style.display = 'block';
        btn.textContent = 'Read Less';  // Change button text when expanded
    } else {
        content.style.display = 'none';
        btn.textContent = 'Read More';  // Change button text when collapsed
    }
}
