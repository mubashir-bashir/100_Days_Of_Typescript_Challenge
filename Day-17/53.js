// Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.  
// Define the nested skills object
var programmerSkills = {
    languages: ['JavaScript', 'TypeScript', 'Python'],
    tools: ['Visual Studio Code', 'Git', 'Docker'],
    frameworks: ['React', 'Angular', 'Express.js']
};
var languages = programmerSkills.languages, tools = programmerSkills.tools, frameworks = programmerSkills.frameworks;
console.log("As a programmer, I am proficient in:\n    Language: ".concat(languages[1], " - ").concat(languages[1], ", providing type safety and scalability to my projects.\n    Tool: ").concat(tools[0], " - ").concat(tools[0], ", enhancing my coding efficiency with its robust features.\n    Framework: ").concat(frameworks[0], " - ").concat(frameworks[0], ", enabling me to build dynamic and responsive web applications with ease."));
