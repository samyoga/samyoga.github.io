
document.addEventListener("DOMContentLoaded", () => {
    const toggleButtons = document.querySelectorAll(".toggle-details");
  
    toggleButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const projectCard = event.target.closest(".project-card");
        projectCard.classList.toggle("active");
  
        const details = projectCard.querySelector(".details");
        if (projectCard.classList.contains("active")) {
          details.style.maxHeight = details.scrollHeight + "px";
          button.textContent = "Hide Details";
        } else {
          details.style.maxHeight = "0";
          button.textContent = "Details";
        }
      });
    });
  });
  
