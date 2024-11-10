document.addEventListener("DOMContentLoaded", function () {
  // Select elements for mobile menu toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navbarAtas = document.querySelector(".navbar-atas");

  // Toggle the 'active' class to show or hide the navbar in mobile view
  mobileMenuBtn.addEventListener("click", function () {
    navbarAtas.classList.toggle("active");
  });

  // Team selector functionality
  const teamSelector = document.getElementById("teamSelector");
  const teams = [
    "Arsenal",
    "Aston Villa",
    "Chelsea",
    "Liverpool",
    "Manchester City",
    "Manchester United",
    "Newcastle",
    "Tottenham",
    "West Ham",
    "Brighton",
  ];

  // Add click event to display a randomly selected team
  teamSelector.addEventListener("click", function () {
    const randomTeam = teams[Math.floor(Math.random() * teams.length)];
    alert(`Your randomly selected team is: ${randomTeam}!`);
  });
});
