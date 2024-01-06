var typed=new Typed(".text",{
    strings:["BCA Student"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
function showSkills() {
    document.getElementById('skillsContent').style.display = 'block';
    document.getElementById('experienceContent').style.display = 'none';
    document.getElementById('educationContent').style.display = 'none'; 
}

function showExperience() {
    document.getElementById('skillsContent').style.display = 'none';
    document.getElementById('experienceContent').style.display = 'block';
    document.getElementById('educationContent').style.display = 'none'; 
}

function showEducation() {
    document.getElementById('skillsContent').style.display = 'none';
    document.getElementById('experienceContent').style.display = 'none';
    document.getElementById('educationContent').style.display = 'block'; 
}