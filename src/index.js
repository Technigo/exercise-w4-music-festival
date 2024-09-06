// Brief
const webName = "Music Festival Concert Slot Reservation"
// Start Here
// Welcome and Introduction
// This project involves creating a simple program that allows users to reserve concert slots for their preferred music genres during a music festival. Users will provide their name, choose a music genre, and then select an artist and time slot for their desired concert.

// Display a welcoming message for the user.
alert(`Welcome to ${webName}! Get ready to choose your favorite music genre.`)

// Prompt the user to enter their name.
const name = prompt("May I get your name please?")

// Display a greeting message with the user's name.

alert(`Hello ${name.toUpperCase()}. Let's get started.`)

// Music Genre Selection
// Ask the user to choose a music genre.
const musicGenreSelection = parseInt(
    prompt(`
        Please select a music genre by entering a number. 
        1 - Rock 
        2 - Pop 
        3 - Electronic
    `)
)

/* ********************************************
The parseInt method parses a value as a string and returns the first integer.
 https://www.w3schools.com/jsref/jsref_parseint.asp
******************************************** */

// Initialize a variable to store the selected genre.
let selectedGenre = ""

// Determine the selected genre based on the user's choice.
if (musicGenreSelection === 1) { 
   selectedGenre = "Rock"
} else if (musicGenreSelection === 2) {
   selectedGenre = "Pop"
} else if (musicGenreSelection === 3) {
   selectedGenre = "Electronic"
} else {
    alert("Invalid choice. Please start all over again and select a valid number. See you!")
    exit (1)
} 

/* *************************************
The exit(*message*) function prints a message and terminates the current script.
*message* Required. A message or status number to print before terminating the script. A status number will not be written to the output, just used as the exit status.
https://www.w3schools.com/php/func_misc_exit.asp
*************************************** */

// Display the chosen genre.
alert(`Great! You've chosen ${selectedGenre}!`)

// Concert Slot Reservation
let concertSlot = ""
let artistNames = ""
// Ask the user to select a concert slot based on the chosen genre.
// Determine the available concert slots and corresponding artist names.
switch (selectedGenre) {
  case "Rock":
    concertSlot = parseInt(
      prompt(`
      Select a slot for Rock:
      1 - Queen
      2 - Nirvana
      3 - Led Zeppelin
      Please enter the number of your choice.
     `)
    )
    artistNames = ["Queen","Nirvana","Led Zeppelin"]
    break

  case "Pop":
    concertSlot = parseInt(
      prompt(`
      Select a slot for Pop:
      1 - Kelly Clarkson
      2 - Outkast
      3 - Carly Rae Jepsen
      Please enter the number of your choice.
     `)
    )
    artistNames = ["Kelly Clarkson","Outkast","Carly Rae Jepsen"]
    break 
  
  case "Electronic":
    concertSlot = parseInt(
      prompt(`
      Select a slot for Electronic:
      1 - Alan Walker
      2 - David Guetta
      3 - Swedish House Mafia
      Please enter the number of your choice.
      `)
    )
    artistNames = ["Alan Walker","David Guetta","Swedish House Mafia"]
    break
    
  default:
    alert("Invalid choice. Please start all over again and select a valid number. See you!")
    exit (1)
}

/* **********************************************
Switch Statement: is used to perform different actions based on different conditions.
https://www.w3schools.com/js/js_switch.asp
************************************************* */

// bonus
// Determine the selected time slot based on the user's concert slot choice.
let timeSlot = ""

switch (concertSlot) {
  case 1:
    timeSlot = "19:00"
    break
  
  case 2:
    timeSlot = "21:00"
    break
  
  case 3:
    timeSlot = "23:00"
    break
  
  default:
    alert("Invalid choice. Please start all over again and select a valid number. See you!")
    exit (1)
}

// Display a message confirming the user's reservation based on the selected artist, time slot, and genre.
if (concertSlot === 1) {
  alert(`Great choice! You've reserved a spot to see ${artistNames[0]} at ${timeSlot} for the ${selectedGenre} concert!`)
} else if (concertSlot === 2) {
  alert(`Great choice! You've reserved a spot to see ${artistNames[1]} at ${timeSlot} for the ${selectedGenre} concert!`)
} else if (concertSlot === 3) {
  alert(`Great choice! You've reserved a spot to see ${artistNames[2]} at ${timeSlot} for the ${selectedGenre} concert!`)
}

