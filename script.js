// Navigation toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle?.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Skills Chart
const skillsData = {
    labels: ['Python', 'Machine Learning', 'Deep Learning', 'Computer Vision', 'Data Analysis', 'TensorFlow/PyTorch'],
    datasets: [{
        label: 'Skill Level',
        data: [90, 85, 80, 85, 80, 85],
        backgroundColor: 'rgba(37, 99, 235, 0.2)',
        borderColor: 'rgba(37, 99, 235, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(37, 99, 235, 1)',
        pointRadius: 4
    }]
};

const ctx = document.getElementById('skillsChart')?.getContext('2d');
if (ctx) {
    new Chart(ctx, {
        type: 'radar',
        data: skillsData,
        options: {
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

// Skill bars animation
const skillBars = document.querySelectorAll('.skill-bars');
const programmingSkills = [
    { name: 'Python', level: 90 },
    { name: 'SQL', level: 85 },
    { name: 'R', level: 75 }
];

const mlSkills = [
    { name: 'Deep Learning', level: 85 },
    { name: 'Computer Vision', level: 85 },
    { name: 'NLP', level: 80 }
];

const toolsSkills = [
    { name: 'TensorFlow', level: 85 },
    { name: 'PyTorch', level: 80 },
    { name: 'Scikit-learn', level: 90 }
];

function createSkillBar(skill) {
    return `
        <div class="skill-item">
            <div class="skill-info">
                <span>${skill.name}</span>
                <span>${skill.level}%</span>
            </div>
            <div class="skill-bar">
                <div class="skill-fill" style="width: ${skill.level}%"></div>
            </div>
        </div>
    `;
}

skillBars.forEach((container, index) => {
    const skills = index === 0 ? programmingSkills : 
                  index === 1 ? mlSkills : toolsSkills;
    container.innerHTML = skills.map(createSkillBar).join('');
});

// Publications data
const publications = [
    {
        title: "Deep Learning Approaches in Mineral Classification",
        journal: "Journal of Computer Vision",
        year: 2023,
        link: "#"
    
