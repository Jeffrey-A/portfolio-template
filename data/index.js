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
        url: '/#articles'
    },
    {
        text: 'Contact',
        url: '/#contact'
    },
];

export const heroData = {
    introText: 'Hi, my name is',
    name: 'Jeffrey Almanzar.',
    headline: `I'm a software engineer that loves bringing design to life. While working at RubensteinTech, I've contributed to more than 8 live projects using React, Node and other technologies.`,
    contactLink: {
        text: 'Contact me',
        url: 'mailto:almanzarortizjeffrey@gmail.com'
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
