// Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.  

// Define the nested skills object
const programmerSkills = {
    languages: ['JavaScript', 'TypeScript', 'Python'],
    tools: ['Visual Studio Code', 'Git', 'Docker'],
    frameworks: ['React', 'Angular', 'Express.js']
};


const {languages,tools,frameworks} =programmerSkills;

console.log(`As a programmer, I am proficient in:
    Language: ${languages[1]} - ${languages[1]}, providing type safety and scalability to my projects.
    Tool: ${tools[0]} - ${tools[0]}, enhancing my coding efficiency with its robust features.
    Framework: ${frameworks[0]} - ${frameworks[0]}, enabling me to build dynamic and responsive web applications with ease.`);
