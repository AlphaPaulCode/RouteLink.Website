const visionBtn = document.getElementById('vision-btn');
const missionBtn = document.getElementById('mission-btn');
const purposeBtn = document.getElementById('purpose-btn');

const visionContent = document.getElementById('vision-content');
const missionContent = document.getElementById('mission-content');
const purposeContent = document.getElementById('purpose-content');

const buttons = [visionBtn, missionBtn, purposeBtn];
const contents = [visionContent, missionContent, purposeContent];

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {

    contents.forEach(content => content.classList.remove('active'));
    buttons.forEach(btn => btn.classList.remove('active'));

  
    contents[index].classList.add('active');
    button.classList.add('active');
  });
});

visionContent.classList.add('active');
visionBtn.classList.add('active');
