"use strict";
document.getElementById('resume-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const nameElement = document.getElementById('name');
    const emailElement = document.getElementById('email');
    const educationElement = document.getElementById('education');
    const workExperienceElement = document.getElementById('workExperience');
    const skillsElement = document.getElementById('skills');
    const formData = {
        name: nameElement.value,
        email: emailElement.value,
        education: educationElement.value,
        workExperience: workExperienceElement.value,
        skills: skillsElement.value,
    };
    generateResume(formData);
});
function generateResume(data) {
    const resumeDiv = document.getElementById('resume');
    resumeDiv.innerHTML = `
        <h2 contenteditable="true">${data.name}</h2>
        <p contenteditable="true">Email: ${data.email}</p>
        <h3 contenteditable="true">Education</h3>
        <p contenteditable="true">${data.education}</p>
        <h3 contenteditable="true">Work Experience</h3>
        <p contenteditable="true">${data.workExperience}</p>
        <h3 contenteditable="true">Skills</h3>
        <p contenteditable="true">${data.skills}</p>
    `;
    // Add event listeners to handle changes
    resumeDiv.querySelectorAll('[contenteditable]').forEach(element => {
        element.addEventListener('input', () => {
            console.log('Content changed:', element.innerText);
            // Optionally, save changes to local storage or send to server
        });
    });
}
