document.addEventListener('DOMContentLoaded', () => {
    
    const educationList = document.querySelector('.education-list');
    const education = [
        { institution: 'Karpagam college of engineering', degree: 'B.E, Computer science and technology', period: '2021 - 2025', description: 'Studied various subjects including data structures, algorithms, web development.' },
        
    ];

    education.forEach(edu => {
        const educationItem = document.createElement('div');
        educationItem.classList.add('education-item');
        educationItem.innerHTML = `
            <h2>${edu.institution}</h2>
            <p><strong>Degree:</strong> ${edu.degree}</p>
            <p><strong>Period:</strong> ${edu.period}</p>
            <p>${edu.description}</p>
        `;
        educationList.appendChild(educationItem);
    });

    const experienceList = document.querySelector('.experience-list');
    const experiences = [
        { company: 'VERZEO', role: 'Machine learning with python', period: 'October 2022 - November 2022', description: 'Basic proficiency in Python for machine learning, with foundational knowledge of NumPy, Pandas, and Scikit-learn.' },
        { company: 'PENTA SOFTWARE', role: 'Java programming', period: 'August 2023 - september 2023', description: 'Proficient in Java programming with knowledge of object-oriented principles, multithreading, and enterprise application development.' },
    ];

    experiences.forEach(exp => {
        const experienceItem = document.createElement('div');
        experienceItem.classList.add('experience-item');
        experienceItem.innerHTML = `
            <h2>${exp.company}</h2>
            <p><strong>Role:</strong> ${exp.role}</p>
            <p><strong>Period:</strong> ${exp.period}</p>
            <p>${exp.description}</p>
        `;
        experienceList.appendChild(experienceItem);
    });

    const certificationsList = document.querySelector('.certifications-list');
    const certifications = [
        { title: 'Certified Frontend and Backend developer', provider: 'Coursera', period: 'December 2023', description: 'HTML/CSS, JavaScript,Frontend Frameworks, Backend Development, APIs, Database. Outcomes cover: frontend, backend, APIs, databases, authentication, deployment.' },
        { title: 'Programming in C Certified', provider: 'Infosys Springboard', period: 'March 2022', description: 'Intro to C syntax, Data Types, Control Structures, Functions, Arrays & Strings, Pointers, File I/O. Mastering C syntax, data types, control flow, functions, arrays, pointers, structures, file operations.' },
        { title: 'Programming in Java Certified', provider: 'SkillRack', period: 'October 2022', description: 'java basics, OOPs, data structures, exceptions, I/O, collections, networking and JDBC. Mastery in java fundamentals, proficiency in OOPs, adept with collections, networking and JDBC.' },
    ];

    certifications.forEach(cert => {
        const certificationItem = document.createElement('div');
        certificationItem.classList.add('certification-item');
        certificationItem.innerHTML = `
            <h2>${cert.title}</h2>
            <p><strong>Provider:</strong> ${cert.provider}</p>
            <p><strong>Period:</strong> ${cert.period}</p>
            <p>${cert.description}</p>
        `;
        certificationsList.appendChild(certificationItem);
    });

    const projectList = document.querySelector('.project-list');
    const projects = [
        { title: 'Real-Time Language Translation App', description: 'Created a Java-based real-time language translation app with multilingual support, leveraging APIs for seamless communication and robust user interaction.', link: 'https://github.com/aishwariyak7/language-translation' },
        { title: 'E-commerce Platform', description: 'Front-end developer using HTML, CSS, and tools like Adobe XD for design mockups.Enhanced user experience, resulting in increased customer engagement and higher conversion rates.', link: 'https://github.com/aishwariyak7/E-commerce-website' },
        { title: 'Arithmetic Calculator', description: 'Designed and implemented the project using HTML, CSS, and JavaScript.Created a user-friendly, responsive calculator, enhancing my skills in front-end development and improving user interaction experience.', link: 'https://github.com/aishwariyak7/calculator' },
        { title: 'Todo list', description: 'Developer responsible for frontend implementation using HTML, CSS, and JavaScript. Technologies & tools: HTML, CSS, JavaScript.Enhanced productivity with an intuitive and user-friendly todo list, showcasing proficiency in frontend web development.', link: 'https://github.com/aishwariyak7/todo' },
        { title: 'Loginpage', description: 'Developed a secure Java-based login page with encryption and validation protocols for robust authentication. Implemented responsive design principles to enhance usability and user experience.', link: 'https://github.com/aishwariyak7/loginpage' },
    ];

    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project');
        projectItem.innerHTML = `
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        projectList.appendChild(projectItem);
    });

    // Technical Skills
    const technicalSkillsList = document.querySelector('.technical-skills ul');
    const technicalSkills = ['HTML', 'CSS', 'JavaScript', 'Java', 'C', 'SQL'];

    technicalSkills.forEach(skill => {
        const skillItem = document.createElement('li');
        skillItem.textContent = skill;
        technicalSkillsList.appendChild(skillItem);
    });

    const softSkillsList = document.querySelector('.soft-skills ul');
    const softSkills = ['Time Management', 'Teamwork', 'Problem-solving', 'Adaptability'];

    softSkills.forEach(skill => {
        const skillItem = document.createElement('li');
        skillItem.textContent = skill;
        softSkillsList.appendChild(skillItem);
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Form submitted successfully');
        contactForm.reset();
    });
});
