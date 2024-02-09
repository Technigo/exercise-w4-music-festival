// Brief

// Start Here
// Welcome and Introduction

// Display a welcoming message for the user.
alert("🎶 Welcome to the Music Festival Concert Slot Reservation! Get ready to choose your favorite music genre.🤘");

// Prompt the user to enter their name.
// Display a greeting message with the user's name.
let userName = prompt ("Please enter your name:", "ex.Alfons Åberg");
alert (`👋 Hello ${userName}!`);

// Music Genre Selection
// Ask the user to choose a music genre.
let = genreChoice = prompt (
  `Please select your favourite music genre:
  "1"- Rock 🎸
  "2"- Pop 🎤
  "3"- Electronic 🎧
  `
);

// Initialize a variable to store the selected genre.
let selectedGenre;
switch (genreChoice) {
  case "1":
    selectedGenre = "Rock";
    break;
  case "2":
    selectedGenre = "Pop";
    break;
  case "3":
    selectedGenre = "Electronic";
    break;
  default:
    alert("Invalid choice. ⚠️ Please select a valid number.");
    exit(1);
}

// Determine the selected genre based on the user's choice.
// Display the chosen genre.
alert (`You´ve chosen ${selectedGenre}!`)

// Concert Slot Reservation
// Ask the user to select a concert slot based on the chosen genre.
let slotChoice;
switch (selectedGenre) {
  case "Rock":
    slotChoice = prompt(`📅 Please select a concert slot for ${selectedGenre}:
    1 - Metallica (9:00 PM)
    2 - AC/DC (10:00 PM)
    3 - Radiohead (11:00 PM)
    `);
    break;
  case "Pop":
    slotChoice = prompt(`📅 Please select a concert slot for ${selectedGenre}:
    1 - Beyoncé (9:00 PM)
    2 - The Weekend (10:00 PM)
    3 - Justin Bieber (11:00 PM)
   `);
    break;
  case "Electronic":
    slotChoice = prompt(`📅 Please select a concert slot for ${selectedGenre}:
    1 - Massive Attack (9:00 PM)
    2 - Skrillex (10:00 PM)
    3 - Acid Sister (11:00 PM)
    `);
    break;
}

// Determine the available concert slots and corresponding artist names.
let selectedSlot;
let artistName;

// bonus
// Determine the selected time slot based on the user's concert slot choice.
switch (slotChoice) {
  case "1":
    selectedSlot = "9:00 PM";
    break;
  case "2":
    selectedSlot = "10:00 PM";
    break;
  case "3":
    selectedSlot = "11:00 PM";
    break;
  default:
    alert("Invalid slot choice.");
    exit(1);
}

// Determine the artist name based on the selected genre and slot
switch (selectedGenre) {
  case "Rock":
    switch (slotChoice) {
      case "1":
        artistName = "Metallica";
        break;
      case "2":
        artistName = "AC/DC";
        break;
      case "3":
        artistName = "Radiohead";
        break;
    }
    break;
  case "Pop":
    switch (slotChoice) {
      case "1":
        artistName = "Beyoncé";
        break;
      case "2":
        artistName = "The Weekend";
        break;
      case "3":
        artistName = "Justin Bieber";
        break;
    }
    break;
  case "Electronic":
    switch (slotChoice) {
      case "1":
        artistName = "Massive Attack";
        break;
      case "2":
        artistName = "Skrillex";
        break;
      case "3":
        artistName = "Acid Sister";
        break;
    }
    break;
}

// Display a message confirming the user's reservation based on the selected artist, time slot, and genre.
if (confirm("Would you like to proceed with your reservation? 🎫")) {
alert(`✅Great choice! You've reserved a spot to see ${artistName} at ${selectedSlot} for the ${selectedGenre} concert. Enjoy!🎉`);
} else {
  alert("Ok, come back if you change your mind!🙃");
}
