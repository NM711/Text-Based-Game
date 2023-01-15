import {gameStoryText, options} from "./gameTextAndOptions.js" // importing the gameStoryText and the options objects from the gameTextAndOptions.js file
const listOptions = document.querySelectorAll('li');
const gameText = document.getElementById('gameText');
const animatedGifContainer = document.getElementById('animatedGifContainer');
const gameVisuals = document.getElementById('gameVisuals');
let torch = 0;
let injury = 0;
let diary = 0;


function startGame(){
     // resetting values to replay game
     torch = 0;
     injury = 0; 
     diary = 0;
     console.log('Game Starting.....')
     gameTitle.textContent = ""
     gameText.textContent = gameStoryText.startText
     updateOptions(listOptions, 'startOptions'); // the list options are now going to be replaced with the new property values of optionOne
     gameVisuals.textContent = ""
}

function grabTorchFunction(key){
    gameVisuals.textContent = ""
    if (torch <= 0){
        gameText.textContent = gameStoryText.grabTorch
        animatedGifContainer.setAttribute('src', './public/assets/Torch_Gif.gif')
        torch++
        }

    else if (torch > 0){
        gameText.textContent = gameStoryText.torchGrabbed
        }

        console.log(torch)
        updateOptions(listOptions, key);
}

function exploreRoomAndReadDiary(){
    gameText.textContent = gameStoryText.exploreRoomThree
    updateOptions(listOptions, "cantProceedTorwardsBasementOptions")
    console.log('diary read')
    diary++
}

function ifReadDiaryEvent(){
    if (diary <= 0){
        gameText.textContent = gameStoryText.dontKnow
        updateOptions(listOptions, "dontKnowOptions")
        console.log('not read')
    }

    else if (diary === 1){
        gameText.textContent = gameStoryText.dontKnowIfReadDiary
        updateOptions(listOptions, "dontKnowIfReadDiaryOptions")
        console.log('read')
    }
}

// the following function takes 3 paramaters the gameStoryText, listOptionKey, and the textVisuals
function gameOutput(gameStoryText, key, gameTextVisuals){
    gameText.textContent = gameStoryText
    updateOptions(listOptions, key)
    animatedGifContainer.removeAttribute('src')
    gameVisuals.textContent = gameTextVisuals
}

function fightPackOfWolves(gameStoryText, key){
    gameText.textContent = gameStoryText
    updateOptions(listOptions, key)
    injury++
}

function makeYourWayTorwardsTown(){
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
// allows for either of 2 text events to be trigger if you are injure or if you arent injured
function acceptOffer(){
    gameVisuals.textContent = ""
    if (injury !== 1){
        gameText.textContent = gameStoryText.acceptOffer
    }
    else if (injury === 1){
        gameText.textContent = gameStoryText.acceptOfferIfInjured
        injury = 0;
    }
    updateOptions(listOptions, "acceptOfferOptions")
}   

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

export {grabTorchFunction, startGame, gameOutput, fightPackOfWolves, makeYourWayTorwardsTown, acceptOffer, exploreRoomAndReadDiary, ifReadDiaryEvent}