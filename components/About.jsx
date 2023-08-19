import _ from 'lodash';
import React from 'react';
import { Heading, Text, Tooltip, Stack } from '@chakra-ui/react';

import { aboutData, email } from '@/data';

export default function About(props) {
    const { skills, skillsLabel, imageSrc, sectionHeading } = aboutData;

    return (
        <div id="about" className="section">
            <Heading mb={4}>{sectionHeading}</Heading>
            <div className="d-lg-flex align-items-center p-3 my-4 skills-section">
                <p className="me-3 mb-3 mb-lg-0 primary-skill-label">{skillsLabel}</p>
                <Stack align="flex-start" justify="flex-start" direction={['column', 'row']} spacing='24px'>
                    {_.map(skills, skillItem => {
                        const { category, sections } = skillItem;
                        return (
                            <Tooltip hasArrow label={<Skills skillSections={sections} />}>
                                <button>
                                    <span className="me-2">{category}</span>
                                    <i className="fa-solid fa-circle-info"></i>
                                </button>
                            </Tooltip>
                        )
                    })}
                </Stack>
            </div>
            <div className="d-lg-flex justify-content-between">
                <div className="about-photo-container mb-3 mb-0">
                    <img src={imageSrc} alt="About image" />
                </div>
                <AboutText />
            </div>
        </div>
    )
}

function AboutText(props) {
    return (
        <div className="about-text">
            <Text fontSize='lg' mb={3}>
                I’ve been in the web development industry
                for more than three years. You can see a few of the projects that I've
                contributed while working at RubensteinTech, <a target="_blank"
                    href="https://www.rubensteintech.com/work/index.html">here</a>.
            </Text>
            <Text mb={3}>
                Throughout my web development journey, I've technically led 3 projects so far at RubensteinTech. Helping less experienced developers resolve technical problems when they are stuck in a given task, performing code reviews to maintain code quality and spot bugs before they are introduced. And most importantly, putting in the necessary work to make sure that we deliver the project on time.
            </Text>
            <Text mb={3}>
                While I have full stack JavaScript development experience, my forte is frontend development. I have experience resolving web accessibility, browser compatibility, and front-end performing issues. In addition, I'm good in responsive web design and have developed a strong eye for design throughout my experience and education. Furthermore,  I also have experience in end-to-end testing using Cypress.io and unit testing using Jest.
            </Text>
            <Text mb={3}>
                To learn more about me, feel free to contact me, <a target="_blank"
                    href={`mailto:${email}`}>here</a>.
            </Text>
        </div>
    )
}


function Skills({ skillSections }) {
    return (
        <div className='p-3'>
            {_.map(skillSections, (skillSection, index) => {
                const { label, skills } = skillSection;
                return (
                    <React.Fragment>
                        <p className={index > 0 ? 'mt-3' : null}>{label}</p>
                        <div className='skills-grid'>
                            {_.map(skills, skill => <span className='btn btn-secondary btn-sm skill'>{skill}</span>)}
                        </div>
                    </React.Fragment>
                )
            })}
        </div>
    )
}