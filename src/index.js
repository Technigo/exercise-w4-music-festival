// Brief

// Start Here
// Welcome and Introduction

// Display a welcoming message for the user.

// Prompt the user to enter their name.

// Display a greeting message with the user's name.

// Music Genre Selection
// Ask the user to choose a music genre.

// Initialize a variable to store the selected genre.

// Determine the selected genre based on the user's choice.

// Display the chosen genre.

// Concert Slot Reservation
// Ask the user to select a concert slot based on the chosen genre.
// Determine the available concert slots and corresponding artist names.

// bonus
// Determine the selected time slot based on the user's concert slot choice.

// Display a message confirming the user's reservation based on the selected artist, time slot, and genre.

alert(
    "Welcome to the Musical Festival Concert Slot Reservation. Lets get ready to choose your favorite music"
)

const userName = prompt("Please provide your name")

alert(`Hi ${userName}! Let's get rocking!`)

const musicSelection = parseInt(prompt(`
    Select your favourite music genre:
    1 - Rock
    2 - Hip-Hop
    3 - Pop
    Please enter the number of your choice. 
    `)
);

let selectedGenre = ""

if (musicSelection === 1) {
    selectedGenre = "Rock"
} else if (musicSelection === 2) {
    selectedGenre = "Hip-Hop"
} else if (musicSelection === 3) {
    selectedGenre = "Pop"
} else {
    alert("Invalid choice, please start all over again and select an option. See you!")
    exit(1)
}

alert(`You chose ${selectedGenre}`)

let concertSlot = ""
let artistNames = []

switch (selectedGenre) {
    case "Rock":
        concertSlot = parseInt(
            prompt(
                `Select a slot for Rock:
            1 - QOTSA
            2 - Artic Monkeys
            3 - Pearl Jam
            Please enter the number of your choice. 
            `
            )
        )
        artistNames = ["QOTSA", "Artic Monkeys", "Pearl Jam"]
        break

    case "Hip-Hop":
        concertSlot = parseInt(
            prompt(
                `Select a slot for Hip-Hop:
           1 - Tyler, the Creator
           2 - Megan Thee Stallion
           3 - A Tribe Called Quest
           Please enter the number of your choice.
           `
            )
        )
        artistNames = ["Tyler, the Creator", "Megan Thee Stallion", "A Tribe Called Quest"]
        break

    case "Pop":
        concertSlot = parseInt(
            prompt(
                `Select a slot for Pop:
          1 - Rihanna
          2 - Madonna
          3 - Harry Styles
          Please enter the number of your choice.
          `
            )
        )
        artistNames = ["Rihanna", "Madonna", "Harry Styles"]
        break
    default:
        alert("Invalid choice, please start all over again and select an option. See you!")
        exit(1)
}

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
        alert("Invalid choice, please start all over again and select an option. See you!")
        exit(1)
}

if (concertSlot === 1) {
    alert(
        `Great choice! You've reserved a spot to see ${artistNames[0]} at ${timeSlot} for the ${selectedGenre} concert!!`
    )
} else if (concertSlot === 2) {
    alert(
        `Great choice! You've reserved a spot to see ${artistNames[1]} at ${timeSlot} for the ${selectedGenre} concert!!`
    )
} else if (concertSlot === 3) {
    alert(
        `Great choice! You've reserved a spot to see ${artistNames[2]} at ${timeSlot} for the ${selectedGenre} concert!!`
    )
}

