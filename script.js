const themes = {
  green: {
    light: "#d8f3dc",   
    normal: "#2d6a4f",  
    dark: "#1b4332",    
    image: "https://placehold.co/200x200/2d6a4f/white?text=Green",
    message: "Green theme applied!"
  },
  blue: {
    light: "#dbeafe",
    normal: "#1d4ed8",
    dark: "#1e3a8a",
    image: "https://placehold.co/200x200/1d4ed8/white?text=Blue",
    message: "Blue theme applied!"
  },
  red: {
    light: "#fee2e2",
    normal: "#dc2626",
    dark: "#7f1d1d",
    image: "https://placehold.co/200x200/dc2626/white?text=Red",
    message: "Red theme applied!"
  }
};

let choice;

while (true) {
  choice = prompt("Choose a theme: green, blue, or red");

  if (choice !== null) {
    choice = choice.toLowerCase();
  }

  if (choice === "green" || choice === "blue" || choice === "red") {
    break;
  }

  alert("Invalid input. Please type green, blue, or red");
}

const theme = themes[choice];

document.body.style.backgroundColor = theme.light;
document.getElementById("card").style.border = "4px solid " + theme.dark;
document.getElementById("title").style.color = theme.dark;
document.getElementById("message").style.color = theme.normal;

document.getElementById("message").textContent = theme.message;

document.getElementById("theme-image").src = theme.image;