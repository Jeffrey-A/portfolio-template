const experience = [
    {
        company: 'RubensteinTech',
        companyLink: 'https://www.rubensteintech.com/',
        positions: [
            {
                title: 'Software Engineer',
                location: 'Remote',
                dates: 'Jun 2020 - Present',
                bullets: [
                    `Help less experienced developers resolve technical problems when
                    they are stuck in a given task.`,
                    `Perform code reviews to maintain code quality, spot bugs before
                    they are introduced, and help less experienced developers get
                    more familiar with the code base.`,
                    `Implement foundational styles such as typography, iconography,
                    color palettes, layout and others, following design guidelines.`,
                    `Implement responsive React.js components following mockups.
                    Then, I test and document them using Storybook.`,
                    `Implement responsive React.js templates using the foundational
                    styles and individual components.`,
                    `Implement printer friendly styles to ensure that pages look good
                    when printed.`,
                    `Perform accessibility audits using Pa11y and resolve the errors
                    found.`,
                    `Perform content migration, which involves creating Node.js
                    scripts to extra the data from the legacy database and import it
                    into the RubensteinTech&rsquo;s database.`,
                    `Utilize HTML, CSS, JavaScript, React.js, Sass, Storybook,
                    Node.js, ElasticSearch, Git, and more tools.`
                ]
            },
            {
                title: 'Software Engineer Intern',
                location: 'New York, NY',
                dates: 'Jan 2020 - May 2020',
                bullets: [
                    `Fixed several web content accessibility issues following
                    the WCAG 2.0 guidelines. For example, made dropdowns,
                    search-boxes/autocomplete menus, and a date-picker more
                    accessible following the ComboBox, ListBox, and Dialog
                    Design patterns.`,
                    `Fixed styling issues on PDF files generated from HTML
                    after upgrading from wkhtmltopdf to Puppeteer.`,
                    `Implemented multiple test suites using Cypress.io.`,
                    `Utilized HTML, CSS, SASS, JavaScript, jQuery,
                    Cypress.io, Perl, Mason.`,
                ]
            },
            {
                title: 'Software Engineer Intern',
                location: 'New York, NY',
                dates: 'Sep 2019 - Dec 2019',
                bullets: [
                    `Taught myself test automation using Cypress.io,
                    leveraged knowledge in Git, CSS, and JavaScript, and use
                    the Chrome Developer Tools for debugging purposes.`,
                    `Helped to improve test execution time by 10 minutes, by
                    finding a secure way to recycle access tokens so that
                    login API calls can be reduced within test cases.`,
                    `Implemented end-to-end tests, ensuring that server-side
                    requests and the UI behave as expected.`,
                    `Documented bugs creating GitLab issues and Trello cards.`,
                    `Utilized JavaScript, Cypress.io, CSS, Git, GitLab,
                    Trello, and the Chrome Developer Tools.`
                ],
            }
        ]
    },
    {
        company: 'Schoology',
        companyLink: 'https://www.powerschool.com/solutions/unified-classroom/schoology-learning/',
        positions: [
            {
                title: 'Software Engineer Intern',
                location: 'New York, NY',
                dates: 'Jun 2019 - Aug 2019',
                bullets: [
                    `Leveraged knowledge in Git, Front-end web development
                    (HTML, CSS, JavaScript, React.js), improved my
                    communication skills through daily standups, taught
                    myself browser extension development and unit testing
                    libraries such as Jest and Enzyme, and debugged using
                    the Chrome Developer Tools.`,
                    `Developed a browser extension that allows Schoology’s
                    employees to masquerade as external clients. Created it
                    using HTML, CSS, JavaScript, Chrome API, and Schoology
                    APIs.`,
                    `Implemented an autocomplete feature to an existing menu
                    and improved its UI using HTML, CSS, React.js and
                    TypeScript.`,
                    `Wrote unit tests using Jest and Enzyme and used Bamboo
                    to deploy my changes to different environments.`,
                    ` Utilized JavaScript, React.js, TypeScript, HTML, CSS,
                    Jest, Enzyme, Git, Jira, Bamboo, and Chrome API.`,
                ]
            }
        ]
    },
    {
        company: 'CUNY Bronx Community College',
        companyLink: 'http://www.bcc.cuny.edu/',
        positions: [
            {
                title: 'Computer Science Tutor',
                location: 'Bronx, NY',
                dates: 'Aug 2018 - Jun 2019',
                bullets: [
                    `Helped computer science students with programming I, II,
                    and data structures and algorithms using Python.`,
                    `Helped them to understand fundamental programming
                    concepts, like variables, loops, functions, classes, and
                    more advanced data structures and algorithms concepts.`,
                    ` Assisted them in the debugging and implementation of
                    Python’s programs.`
                ]
            },
            {

                title: 'College Athlete/Baseball Player',
                location: 'Bronx, NY',
                dates: 'Feb 2017 - May 2018',
                bullets: [
                    `Played two consecutive seasons in the Bronx Community
                        College's Baseball Team. We built an amazing chemistry,
                        we trained and played hard, and we made it to the
                        championship game.`,
                    `Honors received: NJCAA Region XV Sportsmanship Honoree 05/2018, CUNY-Athletic Conference-Scholar-Athlete award
                        05/2018, and CUNY-Athletic Conference-Scholar-Athlete award
                        05/2017`
                ]
            }
        ]
    },
    {
        company: 'QSAC (Quality Services for the Autism Community)',
        companyLink: 'https://www.qsac.com/',
        positions: [
            {
                title: 'Therapy Assistant',
                location: 'Bronx, NY',
                dates: 'Nov 2017 - Feb 2018',
                bullets: [
                    `Assisted a youth group of 5 children in their reading
                    comprehension.`,
                    `Taught life skills such as personal hygiene,
                    socialization skills, recreation, and some academics.`,
                    `Maintained an organized and well-established working
                    environment.`
                ]
            }
        ]
    }
]


function ExperienceItem(props) {
    const { company, companyLink, positions } = props;

    return (
        <div className="experience d-flex">
            <div className="logo-container">
                <a target="_blank" href={companyLink}>
                    <i className="fa-solid fa-building"></i>
                </a>
            </div>
            <div className="experience-content">
                <h3 className="company mb-3">
                    <a target="_blank"
                        href={companyLink}>{company}</a>
                </h3>
                {positions.map(position => {
                    const { title, location, dates, bullets } = position;
                    return (
                        <div className="mb-3">
                            <h4 className="position mb-2">{title}</h4>
                            <p className="date-location mb-1">
                                <span className="location">{location}</span>{dates}
                            </p>
                            <ul className="description-list">
                                {bullets.map(bullet => <li>{bullet}</li>)}
                            </ul>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const data = experience.map(experienceEntry => {
    return {
        heading: experienceEntry.company,
        content: <ExperienceItem {...experienceEntry} />
    }
});

export default data;