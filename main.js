import workExperience from "./class/workExperience.js";



async function loadExperience(){
    const response = await fetch("./json/work_experience.json")
    const data =  await response.json();

    const experience = data.map(item => new workExperience(item));

    const container = document.getElementById("workExperienceContainer");

    experience.forEach((exp, index) => {
        container.innerHTML += exp.render(index);
    });

    console.log(workExperienceContainer);
};




loadExperience();

