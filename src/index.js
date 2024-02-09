// Brief

// Start Here
// Welcome and Introduction



// Display a welcoming message for the user.
alert(`Welcome to the Music Festival Concert Slot Reservation! Get ready to choose your favorite music genre.`)

// Prompt the user to enter their name.
const userName = prompt(`Please enter your name!`)
const userNameUp = userName[0].toUpperCase() + userName.slice(1).toLowerCase
// Display a greeting message with the user's name.
alert (`Hello, ${userNameUp} ! Let's get started.`)

// Music Genre Selection
// Ask the user to choose a music genre.

// Initialize a variable to store the selected genre.
let userSelection = parseInt(prompt(`Please select a music genre by entering a number
1. Rock  
2. Pop 
3. Electronic`))

// Determine the selected genre based on the user's choice.
switch (userSelection){
    case 1:
        selection= "Rock"
        alert(`You have chosen ${selection}!`)
        artistName = prompt(`Please choose the artist by entering number
        1. Led Zeppelin
        2. Queen
        3. The Rolling Stones`)
        switch(artistName){
            case "1":
                artist = "Led Zeppelin"
                alert(`You have shosen ${artist}!`)
                timeSlot = timeSlot = parseInt(prompt(`Please choose your time by entering number
                1. 07.02.2024, 7pm
                2. 08.02.2024, 7pm
                3. 09.02.2024, 7pm`))
                switch(timeSlot){
                    case 1:
                        time = "07.02.2024, 7pm"
                        alert(`${time}, your reservation has been confirmed!`)
                        break
                    case 2:
                        time = "08.02.2024, 7pm"
                        alert(`${time}, your reservation has been confirmed!`)
                        break
                    case 3:
                        time = "09.02.2024, 7pm"
                        alert(`${time}, your reservation has been confirmed!`)
                        break
                    default:
                        alert(`Invalid, please enter number.`) 
                }
                break
            case 1:
                artist = "Queen"
                alert(`You have shosen ${artist}!`)
                timeSlot = parseInt(prompt(`Please choose your time by entering number
                1. 10.02.2024, 7pm
                2. 11.02.2024, 7pm
                3. 12.02.2024, 7pm`))
                switch(timeSlot){
                    case 1:
                        time = "10.02.2024, 7pm"
                        alert(`${time}, your reservation has been confirmed!`)
                        break
                    case 2:
                        time = "11.02.2024, 7pm"
                        alert(`${time}, your reservation has been confirmed!`)
                        break
                    case 3:
                        time = "12.02.2024, 7pm"
                        alert(`${time}, your reservation has been confirmed!`)
                        break
                    default:
                        alert(`Invalid, please enter number.`) 
                }
                break
            case 3:
                artist = "The Rolling Stones"
                alert(`You have shosen ${artist}!`)
                timeSlot = parseInt(prompt(`Please choose your time by entering number
                1. 13.02.2024, 7pm
                2. 14.02.2024, 7pm
                3. 14.02.2024, 7pm`))
                switch(timeSlot){
                    case 1:
                        time = "13.02.2024, 7pm"
                        alert(`${time}, your reservation has been confirmed!`)
                        break
                    case 2:
                        time = "14.02.2024, 7pm"
                        alert(`${time}, your reservation has been confirmed!`)
                        break
                    case 3:
                        time = "15.02.2024, 7pm"
                        alert(`${time}, your reservation has been confirmed!`)
                        break
                    default:
                        alert(`Invalid, please enter number.`) 
                }
                break
        }
        break
    case 2:
        selection= "Pop"
        alert(`You have chosen ${selection}!`)
        artistName = parseInt(prompt(`Please choose the artist by entering number
        1. Michael Jackson
        2. Madonna
        3. Taylor Swift`))
        switch(artistName){
            case 1:
                artist = "Michael Jackson"
                alert(`You have shosen ${artist}!`)
                timeSlot = parseInt(prompt(`Please choose your time by entering number
                1. 07.03.2024, 7pm
                2. 08.03.2024, 7pm
                3. 09.03.2024, 7pm`))
                switch(timeSlot){
                    case 1:
                        time = "07.03.2024, 7pm"
                        alert(`${time}, your reservation has been confirmed!`)
                        break
                    case 2:
                        time = "08.03.2024, 7pm"
                        alert(`${time}, your reservation has been confirmed!`)
                        break
                    case 3:
                        time = "09.03.2024, 7pm"
                        alert(`${time}, your reservation has been confirmed!`)
                        break
                    default:
                        alert(`Invalid, please enter number.`) 
                }
                break
            case 2:
                artist = "Madonna"
                alert(`You have shosen ${artist}!`)
                timeSlot = parseInt(prompt(`Please choose your time by entering number
                1. 10.03.2024, 7pm
                2. 11.03.2024, 7pm
                3. 12.03.2024, 7pm`))
                switch(timeSlot){
                    case 1:
                        time = "10.03.2024, 7pm"
                        alert(`${time}, your reservation has been confirmed!`)
                        break
                    case 2:
                        time = "11.03.2024, 7pm"
                        alert(`${time}, your reservation has been confirmed!`)
                        break
                    case 3:
                        time = "12.03.2024, 7pm"
                        alert(`${time}, your reservation has been confirmed!`)
                        break
                    default:
                        alert(`Invalid, please enter number.`) 
                }

                break
            case 3:
                artist = "Taylor Swift"
                alert(`You have shosen ${artist}!`)
                timeSlot = parseInt(prompt(`Please choose your time by entering number
                1. 13.03.2024, 7pm
                2. 14.03.2024, 7pm
                3. 15.03.2024, 7pm`))
                switch(timeSlot){
                    case 1:
                        time = "13.03.2024, 7pm"
                        alert(`${time}, your reservation has been confirmed!`)
                        break
                    case 2:
                        time = "14.03.2024, 7pm"
                        alert(`${time}, your reservation has been confirmed!`)
                        break
                    case 3:
                        time = "15.03.2024, 7pm"
                        alert(`${time}, your reservation has been confirmed!`)
                        break
                    default:
                        alert(`Invalid, please enter number.`) 
                }
                break
        }
        break
    case 3:
        selection= "Electronic"
        alert(`You have chosen ${selection}!`)
        artistName = parseInt(prompt(`Please choose the artist by entering number
        1. Daft Punk
        2. Calvin Harris
        3. Aphex Twin`))
        switch(artistName){
            case 1:
                artist = "Daft Punk"
                alert(`You have shosen ${artist}!`)
                timeSlot = parseInt(prompt(`Please choose your time by entering number
                1. 07.04.2024, 7pm
                2. 08.04.2024, 7pm
                3. 09.04.2024, 7pm`))
                switch(timeSlot){
                    case 1:
                        time = "07.04.2024, 7pm"
                        alert(`${time}, your reservation has been confirmed!`)
                        break
                    case 2:
                        time = "08.04.2024, 7pm"
                        alert(`${time}, your reservation has been confirmed!`)
                        break
                    case 3:
                        time = "09.04.2024, 7pm"
                        alert(`${time}, your reservation has been confirmed!`)
                        break
                    default:
                        alert(`Invalid, please enter number.`) 
                }
                break
            case 2:
                artist = "Calvin Harris"
                alert(`You have shosen ${artist}!`)
                timeSlot = parseInt(prompt(`Please choose your time by entering number
                1. 10.04.2024, 7pm
                2. 11.04.2024, 7pm
                3. 12.04.2024, 7pm`))
                switch(timeSlot){
                    case 1:
                        time = "10.04.2024, 7pm"
                        alert(`${time}, your reservation has been confirmed!`)
                        break
                    case 2:
                        time = "11.04.2024, 7pm"
                        alert(`${time}, your reservation has been confirmed!`)
                        break
                    case 3:
                        time = "12.04.2024, 7pm"
                        alert(`${time}, your reservation has been confirmed!`)
                        break
                        default:
                            alert(`Invalid, please enter number.`) 
                    }
                    break
            case 3:
                artist = "Aphex Twin"
                alert(`You have shosen ${artist}!`)
                timeSlot = parseInt(prompt(`Please choose your time by entering number
                1. 13.04.2024, 7pm
                2. 14.03.2024, 7pm
                3. 15.03.2024, 7pm`))
                switch(timeSlot){
                    case 1:
                        time = "13.04.2024, 7pm"
                        alert(`${time}, your reservation has been confirmed!`)
                        break
                    case 2:
                        time = "14.04.2024, 7pm"
                        alert(`${time}, your reservation has been confirmed!`)
                        break
                    case 3:
                        time = "15.04.2024, 7pm"
                        alert(`${time}, your reservation has been confirmed!`)
                        break
                        default:
                            alert(`Invalid, please enter number.`) 
                        }
                        break
                    }
        break
    default:
        alert(`Invalid, please enter number.`)    
exit(1)
}

alert(`Your reservation has been confirmed!
${time} with ${artist}
See you soon!`)




// Display the chosen genre.

// Concert Slot Reservation
// Ask the user to select a concert slot based on the chosen genre.
// Determine the available concert slots and corresponding artist names.

// bonus
// Determine the selected time slot based on the user's concert slot choice.

// Display a message confirming the user's reservation based on the selected artist, time slot, and genre.
