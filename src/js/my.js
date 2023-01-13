// created by Nathan.
// torch asset is not made by me.

import {gameStoryText, options} from "./gameTextAndOptions.js" // importing the gameStoryText and the options objects from the gameTextAndOptions.js file
import * as gameTextAssets from "./gameTextAssets.js" // importing the all the gameTextArt that is being exported 

function typeWriterEffect(){
    let splitText = gameText.textContent.split('') // split each piece of text
    gameText.textContent = ""
    for (let i = 0; i < splitText.length; i++) {
        gameText.innerHTML += `<span>${splitText[i]}</span>`
    }

    let n = 0;
    let timer = setInterval(interval, 5)

    function interval(){
        const span = gameText.querySelectorAll('span')[n]
        span.classList.add('effect')
        n++

        if (n === gameText.textContent.length){
            clearInterval(timer)
            timer = null
        }
    }
}
// the function above and below are exactly the same but one is for the games main text and the other is for the games visual text
function typeWriterEffectTwo() {
    // all the spans are wrapped into a pre element which allows the visual text to be formatted as it is
    let splitTextTwo = gameVisuals.textContent.split(''); // spli the text and add each split text into an array
    gameVisuals.textContent = "";
    for (let i = 0; i < splitTextTwo.length; i++){ // i will be equal to the length of game visuals
        gameVisuals.innerHTML += `<span>${splitTextTwo[i]}</span>` // for each i element one span element with that arrays index will be created
    }

    let n = 0;
    let timer = setInterval(interval, 5) //set interval which calls the interval function and 1 milisecond

    function interval(){
        const span = gameVisuals.querySelectorAll('span')[n] // n will be added every 1 milisecond and will be equal to the index of the span array
        span.classList.add('active') // each span element will have the class added every 1 milisecond individually
        n++

        if (n === gameVisuals.textContent.length){ // if n reaches the end of the characters array, the very last index of it
            clearInterval(timer) // clear the interval
            timer = null // let the timer equal null
        }
    }
    
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
                case "yes": {
                    // resetting values to replay game
                    torch = 0;
                    injury = 0; 
                    console.log('Game Starting.....')
                    gameText.textContent = gameStoryText.startText
                    updateOptions(listOptions, 'startOptions'); // the list options are now going to be replaced with the new property values of optionOne
                    gameVisuals.textContent = ""
                }
                break

                case "no": {
                    console.log('no selected')   
                }
                break
                
                case "open door": {
                   gameText.textContent = gameStoryText.doorOpen
                   updateOptions(listOptions, 'doorOpenOptions');
                   animatedGifContainer.removeAttribute('src')
                   gameVisuals.textContent = gameTextAssets.castleDoor
                }
                break
                // <!----------------------------------------------------------------------------------------->
                case "grab torch": {
                    if (torch <= 0){
                    gameText.textContent = gameStoryText.grabTorch
                    torch++
                    }
                   else if (torch > 0){
                    gameText.textContent = gameStoryText.torchGrabbed
                    }
                    animatedGifContainer.setAttribute('src', './public/assets/Torch_Gif.gif')
                    console.log(torch)
                    updateOptions(listOptions, 'grabTorchOptions');
                 }
                break
                 // <!----------------------------------------------------------------------------------------->
                case "go to window and look outside": {
                    gameText.textContent = gameStoryText.walkTorwardsWindow
                    updateOptions(listOptions, 'walkTorwardsWindowOptions')
                    animatedGifContainer.removeAttribute('src')
                    gameVisuals.textContent = gameTextAssets.windowOne
                }
                break
                case "go back upstairs": {
                    gameText.textContent = gameStoryText.walkUpstairs
                    updateOptions(listOptions, 'walkUpstairsOptions')
                    animatedGifContainer.removeAttribute('src')
                    gameVisuals.textContent = ""
                    // make it so when something is true for example if i already grabbed the torch it outputs that i already did that event or somehting
                }
                break
                case "walk torwards the light": {
                gameText.textContent = gameStoryText.walkTorwardsLight
                updateOptions(listOptions, 'walkTorwardsLightOptions')
                gameVisuals.textContent = ""
                }
                break
                // <!-----------------------------------NEW FLOOR/ROOM FROM HERE------------------------------------------------------>
                case "go to kitchen": {
                    gameText.textContent = gameStoryText.walkIntoKitchen
                    updateOptions(listOptions, 'walkIntoKitchenOptions')
                }
                break
                case "view town": {
                    gameText.textContent = gameStoryText.walkToWindowAndViewTown
                    updateOptions(listOptions, 'walkToWindowAndViewTownOptions')
                    gameVisuals.textContent = gameTextAssets.viewTownFromWindow
                }
                break
                // THIS IS STILL PART OF THE SECTION BELOW BUT WE LEAVE IT HERE FOR NOW
                case "go downstairs": {
                    gameText.textContent = gameStoryText.walkDownstairs
                    updateOptions(listOptions, 'walkDownstairsOptions') // when hasnt gone downstairs
                    gameVisuals.textContent = gameTextAssets.lowerFloorThreeDoors
                }
                break
                // <!-------------------------------------NEW FLOOR/ROOM FROM HERE AND ALSO OPTIONS TO GO BACK TO THE PREVIOUS FLOOR---------------------------------------------------->
                case "go back up": {
                    gameText.textContent = gameStoryText.goBackUp
                    updateOptions(listOptions, "walkDownOptions") // when already went downstairs
                    gameVisuals.textContent = ""
                }
                break
                case "go down": {
                    gameText.textContent = gameStoryText.goBackDown
                    updateOptions(listOptions, "walkDownstairsOptions")
                    gameVisuals.textContent = gameTextAssets.lowerFloorThreeDoors
                }
                break
                // room selection ----------------------->
                case "enter room one": {
                    gameText.textContent = gameStoryText.enterRoomOne
                    updateOptions(listOptions, "enterRoomOneOptions")
                    gameVisuals.textContent = ""
                }
                break
                case "enter room two": {
                    gameText.textContent = gameStoryText.enterRoomTwo
                    updateOptions(listOptions, "enterRoomTwoOptions")
                }
                break
                case "enter room three": {
                    gameText.textContent = gameStoryText.enterRoomThree
                    updateOptions(listOptions, "enterRoomThreeOptions")
                }
                break
                case "explore room": {
                    gameText.textContent = gameStoryText.exploreRoomThree
                    updateOptions(listOptions, "cantProceedTorwardsBasementOptions")
                }
                break
                // room selection ----------------------->
                case "go back": {
                    gameText.textContent = gameStoryText.goBack
                    updateOptions(listOptions, "walkDownstairsOptions")
                    animatedGifContainer.removeAttribute('src')//-------
                    gameVisuals.textContent = gameTextAssets.lowerFloorThreeDoors
                }
                break
                // room one in story
                case "look around": {
                    gameText.textContent = gameStoryText.lookAroundStaffQuarters
                    updateOptions(listOptions, "exploreStaffQuartersOptions")
                }
                break
                case "grab it": {
                    animatedGifContainer.setAttribute('src', './public/assets/Torch_Gif.gif')//-------
                    if (torch <= 0){
                        gameText.textContent = gameStoryText.grabTorch
                        console.log('you grab the torch')
                        torch++
                    }

                    else if (torch > 0){
                        gameText.textContent = gameStoryText.torchGrabbed
                        console.log('you already have a torch')
                    }
                }
                break
                // <!----------------------------------------------------------------------------->
                case "proceed torwards basement": {
                    gameVisuals.textContent = ""
                    if (torch <= 0){
                        gameText.textContent = gameStoryText.cantProceedTorwardsBasement
                        updateOptions(listOptions, "cantProceedTorwardsBasementOptions")
                        console.log('cannot proceed')
                        }
                       else if (torch > 0){
                        gameText.textContent = gameStoryText.proceedTorwardsBasement
                        updateOptions(listOptions, "proceedTorwardsBasementOptions")
                        console.log('can proceed')
                        torch = 0;
                   }
                }
                break
                case "walk around until you find something useful": {
                    gameText.textContent = gameStoryText.walkAroundUntilYouFindSomethingUseful
                    updateOptions(listOptions, "walkAroundUntilYouFindSomethingUsefulOptions")
                }
                break
                case "follow light": {
                    gameText.textContent = gameStoryText.followLight
                    updateOptions(listOptions, "followLightOptions")
                }
                break
                case "walk into the woods": {
                    gameText.textContent = gameStoryText.walkIntoTheWoods
                    updateOptions(listOptions, "walkIntoWoodsOptions")
                    gameVisuals.textContent = gameTextAssets.wolfPackLeader
                }
                break
                case "fight the pack": {
                    gameText.textContent = gameStoryText.fightPackOfWolves
                    updateOptions(listOptions, "fightPackOfWolvesOptions")
                    injury++
                    console.log(`injuries ${injury}`)
                }
                break
                case "escape!": {
                    gameText.textContent = gameStoryText.escapeFromWolves
                    updateOptions(listOptions, "throwRockAndEscapeFromWolvesOptions")
                }
                break
                case "throw rock at the pack leader": {
                    gameText.textContent = gameStoryText.throwRockAtWolves
                    updateOptions(listOptions, "throwRockAndEscapeFromWolvesOptions")
                    gameVisuals.textContent = ""
                }
                break
                case "make your way torwards town": {
                    gameVisuals.textContent = ""
                    if (injury !== 1){
                        gameText.textContent = gameStoryText.makeYourWayTorwardsTown
                        updateOptions(listOptions, "makeYourWayTorwardsTownOptions")
                    }

                    else if (injury === 1){
                        gameText.textContent = gameStoryText.makeYourWayTorwardsTownIfInjured
                        updateOptions(listOptions, "makeYourWayTorwardsTownIfInjuredOptions")
                    }
                }
                break
                case "deny": {
                    gameText.textContent = gameStoryText.denyInjuryTreatment
                    updateOptions(listOptions, "denyInjuryTreatmentOptions")
                    gameVisuals.textContent = gameTextAssets.gameOver
                }
                break
                case "accept": {
                    /*OPTION NEEDED WRITE
                    GAME TEXT SOON TO CONTINUE WITH STORY*/
                }
                break
            }
            // add typewritefunction here for effect
            typeWriterEffect()
            typeWriterEffectTwo()
            prompt.value = "" // on enter the prompts value is cleared that way u can input a new value faster
        }
    })
    
    // optionsKey is the properties that are inside the object
    function updateOptions(listOptions, optionsKey) { // input 2 arguments into the paramaters when calling function
        let i = 0; // i = 0
        const newOptions = options[optionsKey]; // new options is a new array that is equal to the options object and the specific options property index which is selected
        // Iterate over the listOptions (NodeList)
        listOptions.forEach((option) => {
            // Update the textContent of each <li> element with new options
            option.textContent = newOptions[i++]; // i adds 1 per new option so it gives us the complete list until there isnt any more options
        });
        // basically you would need to add the list options paramater and the exact options key you want to access or in this case property


        /* example  updateOptions(listOptions, "denyInjuryTreatmentOptions"),
         we would get the values of this property and apply them to the list by accessing it directly through the prompt */
    }
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

prompFunc()
prompStyling()