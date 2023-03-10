// torch asset is not made by me.
import {gameStoryText} from "./gameTextAndOptions.js" // importing the gameStoryText and the options objects from the gameTextAndOptions.js file
import * as gameTextAssets from "./gameTextAssets"
import * as gameSoundAssets from "./gameSoundAssets"
import * as gameFunctions from "./conditionalFunctions" // importing all of the game functions from ./conditionalFunctions

function typeWriterEffect(text) { // there will be 3 functions with the paramaters of gameText, gameTextVisuals, and gameTitle
    // all the spans are wrapped into a pre element which allows the visual text to be formatted as it is
    let splitText = text.textContent.split(''); // splitt the text and add each split text into an array
    text.textContent = "";
    for (let i = 0; i < splitText.length; i++){ // i will be equal to the length of game visuals
        text.innerHTML += `<span>${splitText[i]}</span>` // for each i element one span element with that arrays index will be created
    }
  
    let n = 0;
    let timer = setInterval(interval, 5) //set interval which calls the interval function and 1 milisecond

    function interval(){
        const span = text.querySelectorAll('span')[n] // n will be added every 1 milisecond and will be equal to the index of the span array
  
        if (span !== undefined) { // first veryifying if its not undefined before running this way errors in console can be avoided
          span.classList.add('effect') // each span element will have the class added every 1 milisecond individually
          n++

        if (n === text.textContent.length){ // if n reaches the end of the characters array, the very last index of it
            clearInterval(timer) // clear the interval
            timer = null // let the timer equal null
        }
      }
    }
}

function loadGameTitle(){
  // There is 2 different titles one for medium and large screens which is all inline
  // And one for mobile devices that has the words broken into pieces instead of all inline that way it fits better on the screen
  const gameTitle = document.getElementById('gameTitle')
  if (window.screen.width >= 768){
    gameTitle.textContent = gameTextAssets.gameTextTitle
  }
  else if (window.screen.width >= 320){
    gameTitle.textContent = gameTextAssets.gameTextTitleMobile
  }
  window.addEventListener('load', () =>{
    typeWriterEffect(gameTitle)
  })
}

function prompFunc(){
    const prompt = document.getElementById('prompt');
    const listOptions = document.querySelectorAll('li');
    const gameText = document.getElementById('gameText');
    const animatedGifContainer = document.getElementById('animatedGifContainer');
    const gameVisuals = document.getElementById('gameVisuals');
    let torch = 0;
    let injury = 0; 
    prompt.addEventListener('keydown', (ev) =>{
        if (ev.key == "Enter"){
            switch (prompt.value.toLowerCase()){
                // <!-----------------------------------Start Game------------------------------------------------------>
                case "yes": {
                   gameFunctions.startGame()
                   gameSoundAssets.gameSoundtrack(gameSoundAssets.soundTracksAndMusic.inTheCastle, "play")
                }
                break

                case "no": {
                    console.log('no selected')   
                }
                break

                // <!------------------------------------Input Option 1----------------------------------------------------->
                case "1": { // open door
                  if (listOptions[0].textContent == "1. Open Door"){ // open first door
                   gameFunctions.gameOutput(gameStoryText.doorOpen, "doorOpenOptions", gameTextAssets.castleDoor)
                  }
                  else if (listOptions[0].textContent === "1. Go Back Upstairs"){ // go back to the first rooom
                    gameFunctions.gameOutput(gameStoryText.walkUpstairs, "walkUpstairsOptions", "")
                  }
                  else if (listOptions[0].textContent === "1. Go To Kitchen"){ // walk into kitchen
                    gameFunctions.gameOutput(gameStoryText.walkIntoKitchen, "walkIntoKitchenOptions", "")
                  }
                  else if (listOptions[0].textContent === "1. Go Downstairs"){ // go downstairs to the second room
                    gameFunctions.gameOutput(gameStoryText.walkDownstairs, "walkDownstairsOptions", gameTextAssets.lowerFloorThreeDoors)
                  }
                  else if (listOptions[0].textContent === "1. Go Down"){ // going downstairs to second room again
                    gameFunctions.gameOutput(gameStoryText.goBackDown, "walkDownstairsOptions", gameTextAssets.lowerFloorThreeDoors)
                  }
                  else if (listOptions[0].textContent === "1. Enter Room One"){  // enter first room out of the three
                    gameFunctions.gameOutput(gameStoryText.enterRoomOne, "enterRoomOneOptions", "")
                  }
                  else if (listOptions[0].textContent === "1. Look Around"){ // look around first room
                    gameFunctions.gameOutput(gameStoryText.lookAroundStaffQuarters, "exploreStaffQuartersOptions", "")
                  }
                  else if (listOptions[0].textContent === "1. Go Back"){ // go back outside the three rooms
                    gameFunctions.gameOutput(gameStoryText.goBack, "walkDownstairsOptions", gameTextAssets.lowerFloorThreeDoors)
                  }
                  else if (listOptions[0].textContent === "1. Explore Room"){ // explore third room
                    gameFunctions.exploreRoomAndReadDiary() //here
                  }
                  else if (listOptions[0].textContent === "1. Grab it"){ // grab torch two
                    gameFunctions.grabTorchFunction("exploreStaffQuartersOptions")
                  }
                  else if (listOptions[0].textContent === "1. Proceed Torwards Basement"){ // proceed torwards the basement
                    gameFunctions.gameOutput(gameStoryText.proceedTorwardsBasement, "proceedTorwardsBasementOptions", "")
                    gameSoundAssets.gameSoundtrack(gameSoundAssets.soundTracksAndMusic.inTheCastle, "pauseAndRestart")
                  }
                  else if (listOptions[0].textContent === "1. Accept"){
                    gameFunctions.acceptOffer()
                  }


                  // --------------------------------Outside Castle---------------------------------------->
                  else if (listOptions[0].textContent === "1. Walk Around Until You Find Something Useful"){
                    gameFunctions.gameOutput(gameStoryText.walkAroundUntilYouFindSomethingUseful, "walkAroundUntilYouFindSomethingUsefulOptions", "")
                  }
                  else if (listOptions[0].textContent === "1. Follow Light"){
                    gameFunctions.gameOutput(gameStoryText.followLight, "followLightOptions", gameTextAssets.woodsAndTown)
                    gameSoundAssets.gameSoundtrack(gameSoundAssets.soundTracksAndMusic.outsideTheCastle, "play")
                  }
                  else if (listOptions[0].textContent === "1. Walk into The Woods"){
                    gameFunctions.gameOutput(gameStoryText.walkIntoTheWoods, "walkIntoWoodsOptions", gameTextAssets.wolfPackLeader)
                    gameSoundAssets.gameSoundtrack(gameSoundAssets.soundTracksAndMusic.outsideTheCastle, "pauseAndRestart")
                    gameSoundAssets.gameSoundtrack(gameSoundAssets.soundTracksAndMusic.walkInTheWoods, "play")
                  }
                  else if (listOptions[0].textContent === "1. Throw Rock at The Pack Leader"){
                    gameFunctions.gameOutput(gameStoryText.throwRockAtWolves, "throwRockAndEscapeFromWolvesOptions", "")
                  }
                  else if (listOptions[0].textContent === "1. Make Your Way Torwards Town"){
                    gameFunctions.makeYourWayTorwardsTown(gameStoryText.makeYourWayTorwardsTown, "makeYourWayTorwardsTownOptions", "")
                    gameSoundAssets.gameSoundtrack(gameSoundAssets.soundTracksAndMusic.outsideTheCastle, "play")
                  }
                  else if (listOptions[0].textContent === "1. yes"){
                    gameFunctions.startGame()
                    gameSoundAssets.gameSoundtrack(gameSoundAssets.soundTracksAndMusic.inTheCastle, "play")
                  }
                  else if (listOptions[0].textContent === "1. I Dont Know"){
                    gameFunctions.diaryEvents("dontKnowOptions", "dontKnowIfReadDiaryOptions", gameStoryText.dontKnow, gameStoryText.dontKnowIfReadDiary)
                  }
                  else if (listOptions[0].textContent === "1. Tell Me More"){
                    gameFunctions.diaryEvents("castlesBriefHistoryOptions", "castlesBriefHistoryIfReadDiaryOptions", gameStoryText.castlesBriefHistory, gameStoryText.castlesBriefHistory)
                    gameSoundAssets.gameSoundtrack(gameSoundAssets.soundTracksAndMusic.inTheCastle, "pauseAndRestart")
                    gameSoundAssets.gameSoundtrack(gameSoundAssets.soundTracksAndMusic.briefHistory, "play")
                  }

                  else if (listOptions[0].textContent === "1. Wait What?"){
                    gameFunctions.gameOutput(gameStoryText.waitWhat, "waitWhatOptions", "")
                  }
                  else if (listOptions[0].textContent === "1. I Need Answers"){
                    gameFunctions.gameOutput(gameStoryText.needAnswers, "needAnswersOptions", "")
                  }
                  else if (listOptions[0].textContent === "1. Ask Around"){
                    gameSoundAssets.gameSoundtrack(gameSoundAssets.soundTracksAndMusic.briefHistory, "pauseAndRestart")
                    gameSoundAssets.gameSoundtrack(gameSoundAssets.soundTracksAndMusic.outsideTheCastle, "play")
                    gameFunctions.gameOutput(gameStoryText.askAround, "askAroundOptions", "")
                  }
                  // --------------------------------Outside Castle End---------------------------------------->

                  // --------------------------------Back Inside The Castle------------------------------------>
                  else if (listOptions[0].textContent === "1. Go Back To Castle"){
                    gameFunctions.gameOutput(gameStoryText.backAtTheCastle, "backAtTheCastleOptions", gameTextAssets.goLeftOrRight)
                    gameSoundAssets.gameSoundtrack(gameSoundAssets.soundTracksAndMusic.outsideTheCastle, "pauseAndRestart")
                    gameSoundAssets.gameSoundtrack(gameSoundAssets.soundTracksAndMusic.backInCastle, "play")
                  }
                  else if (listOptions[0].textContent === "1. Go Left"){
                    gameFunctions.gameOutput(gameStoryText.goLeft, "goLeftOptions", "")
                  }
                  else if (listOptions[0].textContent === "1. Look Through The Rooms"){
                    gameFunctions.gameOutput(gameStoryText.lookThroughRooms, "lookThroughRoomsOptions", "")
                  }
                  else if (listOptions[0].textContent === "1. Enter Room"){
                    gameSoundAssets.gameSoundtrack(gameSoundAssets.soundTracksAndMusic.backInCastle, "pauseAndRestart")
                    gameSoundAssets.gameSoundtrack(gameSoundAssets.soundTracksAndMusic.gameFinale, "play")
                    gameFunctions.gameOutput(gameStoryText.enterRoom, "enterRoomOptions", "")
                  }
                  else if (listOptions[0].textContent === "1. End Game"){
                    gameFunctions.gameOutput(gameStoryText.endGame, "denyInjuryTreatmentOptions", "")
                    gameSoundAssets.gameSoundtrack(gameSoundAssets.soundTracksAndMusic.gameFinale, "pauseAndRestart")
                    gameSoundAssets.gameOverSound()
                  }
                }
                break

                // <!---------------------------------------Input Option 2-------------------------------------------------->
                case "2": {
                if (listOptions[1].textContent === "2. Grab Torch"){
                gameFunctions.grabTorchFunction("grabTorchOptions")
                }
                else if (listOptions[1].textContent === "2. Walk Torwards the Light"){
                gameFunctions.gameOutput(gameStoryText.walkTorwardsLight, "walkTorwardsLightOptions", gameTextAssets.brightLight)
                }
                else if (listOptions[1].textContent === "2. Go to Window and Look Outside"){
                gameFunctions.gameOutput(gameStoryText.goToWindowAndLookOutside, "walkTorwardsWindowOptions", gameTextAssets.windowOne)
                }
                else if (listOptions[1].textContent === "2. View Town"){
                gameFunctions.gameOutput(gameStoryText.walkToWindowAndViewTown, "walkToWindowAndViewTownOptions", gameTextAssets.viewTownFromWindow)
                }
                else if (listOptions[1].textContent === "2. Go Downstairs"){
                gameFunctions.gameOutput(gameStoryText.walkDownstairs, "walkDownstairsOptions", gameTextAssets.lowerFloorThreeDoors)
                }
                else if (listOptions[1].textContent === "2. Enter Room Two"){
                    gameFunctions.gameOutput(gameStoryText.enterRoomTwo, "enterRoomTwoOptions", gameTextAssets.castleBasement)
                }
                else if (listOptions[1].textContent === "2. Go Back"){
                    gameFunctions.gameOutput(gameStoryText.goBack, "walkDownstairsOptions", gameTextAssets.lowerFloorThreeDoors)
                }


                 // --------------------------------Outside Castle---------------------------------------->
                else if (listOptions[1].textContent === "2. Fight the Pack"){
                  // fight the pack of wolves
                   gameFunctions.fightPackOfWolves(gameStoryText.fightPackOfWolves, "fightPackOfWolvesOptions")
                }
                else if (listOptions[1].textContent === "2. Escape!"){
                  // escape from the pack of wolves
                    gameFunctions.gameOutput(gameStoryText.escapeFromWolves, "throwRockAndEscapeFromWolvesOptions", "")
                    gameSoundAssets.gameSoundtrack(gameSoundAssets.soundTracksAndMusic.outsideTheCastle, "play")
                }
                else if (listOptions[1].textContent === "2. Make Your Way Torwards Town"){
                  //function that determines if the player is injured or not which triggers a different event
                   gameFunctions.makeYourWayTorwardsTown()
                }
                else if (listOptions[1].textContent === "2. Deny"){
                    gameFunctions.gameOutput(gameStoryText.denyInjuryTreatment, "denyInjuryTreatmentOptions", gameTextAssets.gameOver)
                    gameSoundAssets.gameSoundtrack(gameSoundAssets.soundTracksAndMusic.outsideTheCastle, "pauseAndRestart")
                    gameSoundAssets.gameOverSound()
                }
                else if (listOptions[1].textContent === "2. no"){
                    console.log('no selected')
                }
                else if (listOptions[1].textContent === "2. Have You Heard of The Man in The Diary?"){
                  gameFunctions.gameOutput(gameStoryText.manInDiary, "dontKnowOptions", "")
                }
                else if (listOptions[1].textContent === "2. Walk Around Town"){
                  gameSoundAssets.gameSoundtrack(gameSoundAssets.soundTracksAndMusic.briefHistory, "pauseAndRestart")
                  gameSoundAssets.gameSoundtrack(gameSoundAssets.soundTracksAndMusic.outsideTheCastle, "play")
                  gameFunctions.gameOutput(gameStoryText.walkAroundTown, "walkAroundTownOptions", gameTextAssets.snowman)
                }
                 // --------------------------------Outside Castle End---------------------------------------->

                 // --------------------------------Back Inside The Castle------------------------------------>
                else if (listOptions[1].textContent === "2. Go Right"){
                  gameFunctions.gameOutput(gameStoryText.goRight, "goRightOptions", "")
                }
             }

                break

                 // <!------------------------------------Input Option 3----------------------------------------------------->
                case "3": {
                if (listOptions[2].textContent === "3. Go to Window and Look Outside"){
                    gameFunctions.gameOutput(gameStoryText.walkTorwardsWindow, "walkTorwardsWindowOptions", gameTextAssets.windowOne)
                }
                else if (listOptions[2].textContent === "3. View Town"){
                   gameFunctions.gameOutput(gameStoryText.walkToWindowAndViewTown, "walkToWindowAndViewTownOptions", gameTextAssets.viewTownFromWindow)
                }
                else if (listOptions[2].textContent === "3. Enter Room Three"){
                    gameFunctions.gameOutput(gameStoryText.enterRoomThree, "enterRoomThreeOptions", "")
                }
                else if (listOptions[2].textContent === "3. Wait What?"){
                  gameFunctions.gameOutput(gameStoryText.waitWhat, "waitWhatOptions", "")
                }
            }
                break
                // <!------------------------------------Input Option 4----------------------------------------------------->
                case "4": {
                    if (listOptions[3].textContent === "4. Go Back Up"){
                        gameFunctions.gameOutput(gameStoryText.goBackUp, "walkDownOptions", "")
                    }
                }
                break
                // <!-----------------------------SWITCH END------------------------------------------------>
            }

            // add typewritefunction here for effect
            typeWriterEffect(gameText)
            typeWriterEffect(gameVisuals)
            gameSoundAssets.gameSoundEffects(gameSoundAssets.soundEffects.inputSoundEffect)
            console.log(listOptions[0].textContent, listOptions[1].textContent, listOptions[2].textContent, listOptions[3].textContent)
            prompt.value = "" // on enter the prompts value is cleared that way u can input a new value faster
        }
    })
}

function prompStyling(){
    const prompt = document.getElementById('prompt');

    prompt.addEventListener('focus', () =>{ // if focused
        prompt.removeAttribute('placeholder')
    })

    prompt.addEventListener('blur', () =>{ // if unfocused
       prompt.setAttribute('placeholder', 'Input Option')
    })
}

loadGameTitle()
prompFunc()
prompStyling()