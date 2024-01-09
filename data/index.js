/*

TODO:
- update skills data
- figure out .next folder
*/

export const githubLink = 'https://github.com/Jeffrey-A';
export const linkedinLink = 'https://www.linkedin.com/in/jeffrey-almanzar/';
export const email = 'almanzarortizjeffrey@gmail.com';
export const name = 'Jeffrey Almanzar';
export const heroHeadline = `I’m a senior computer science student with a solid programming foundation looking for my first software development internship.`;

export const navLinks = [
    {
        text: 'About',
        url: '/#about'
    },
    {
        text: 'Projects',
        url: '/#projects'
    },
    {
        text: 'Articles',
        url: '/articles'
    },
    {
        text: 'Contact',
        url: '/#contact'
    },
];

export const heroData = {
    introText: 'Hi, my name is',
    name: `${name}.`,
    headline: heroHeadline,
    image: 'images/hero-image.png',
    contactLink: {
        text: 'Contact me',
        url: `mailto:${email}`
    },
    resumeLink: {
        text: 'Resume',
        url: 'JeffreyA_Resume.pdf'
    },
}


// update about text in components/About.jsx
export const aboutData = {
    sectionHeading: 'About',
    imageSrc: 'images/about-image.jpeg',
    skillsLabel: 'Primary Skills:',
    skills: [
        {
            category: 'Frontend Development',
            sections: [
                {
                    label: 'Proficient in:',
                    skills: [
                        'HTML',
                        'CSS',
                        'JavaScript',
                        'Sass',
                        'Bootstrap 5',
                        'React JS'
                    ]
                },
                {
                    label: 'Prior experience:',
                    skills: [
                        'TypeScript',
                        'Redux',
                        'Storybook',
                        'jQuery',
                    ]
                },
            ]
        },
        {
            category: 'Backend Development',
            sections: [
                {
                    label: 'Proficient in:',
                    skills: [
                        'Node JS',
                    ]
                },
                {
                    label: 'Prior experience:',
                    skills: [
                        'Next JS',
                        'Express JS',
                        'PostgreSQL',
                        'MySQL',
                        'Firebase',
                        'Python',
                        'Java',
                    ]
                },
            ]
        },
        {
            category: 'Testing Tools',
            sections: [
                {
                    label: 'Prior experience:',
                    skills: [
                        'Cypress.io',
                        'Jest.io',
                        'Enzyme',
                    ]
                },
            ]
        },
        {
            category: 'Design Tools',
            sections: [
                {
                    label: 'Familiar with:',
                    skills: [
                        'Adobe XD',
                        'Figma',
                    ]
                },
            ]
        },
    ]
}
