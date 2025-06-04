const projects = [
  {
    title: "CollegeTips Chatbot",
    description: "It is chatbot to help elder people understand latest tech development",
    image: "chat.png",
    link: "https://github.com/Java-code-D/ChatBot.io"
  },
  {
    title: "College Tips Gallery",
    description: "Gallery that showcase various formats it is made up of html css and javascript ",
    image: "college.png",
    link: "https://github.com/Java-code-D/CollegeTips_gallery.io"
  },
  {
    title: "Pet Friendly City Campaign Website",
    description: "A prototype project for pet friendly awareness website ",
    image: "pet.png",
    link: "https://github.com/Java-code-D/PetFriendlyCity.io"
  }
];

const container = document.getElementById('projects');

projects.forEach(project => {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}" target="_blank">View Project</a>
  `;
  container.appendChild(card);
});
