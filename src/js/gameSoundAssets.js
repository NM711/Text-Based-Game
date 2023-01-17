const soundTracksAndMusic = {
inTheCastle: "./public/assets/inTheCastleVersion2.wav",
outsideTheCastle: "./public/assets/outsideTheCastle.wav",
walkInTheWoods: "./public/assets/walkInTheWoods.wav",
gameOver: "./public/assets/gameOverSound.mp3",
briefHistory: "./public/assets/briefHistorySoundtrack.mp3",
backInCastle: "./public/assets/backInCastle.wav",
gameFinale: "./public/assets/gameFinale.wav"
}


const soundEffects = {
inputSoundEffect: "./public/assets/inputSoundEffect.wav"
}

// game sound
function gameSoundEffects(sound){
 let soundEffect = new Audio(sound);
    soundEffect.play()
}

let currentSoundtrack = null; // null represents that at the moment nothing is being played

function gameSoundtrack(sound, playOrPauseAndRestart){
    // the new Audio will be equal to whatever is inputted into the paramater 
    let soundtrack = new Audio(sound);

    function replayFunc() { // replay soundtrack function
        setTimeout(() => {
            soundtrack.play();
        }, 0);
    }
    /*In the following on each conditional there is 2 conditionals that have 2 conditionals, the first checks if the soundtrack is being played,
    before replaying it. The second checks if the soundtrack is being played before stopping and lastly restarting it.*/
    if (playOrPauseAndRestart === "play"){
        // the following conditional will be read first, and verify if the soundtrack is being played before playing a new soundtrack
        // since the value inside the currentSoundtrack in this conditional is still null, it will return false and the code will not run
        if (currentSoundtrack !== null) { // checks if the current soundtrack is true or in other words if its no longer null
            // if it is it will remove the replay function
            // the above will return false
            currentSoundtrack.removeEventListener('ended', replayFunc); // removes the event listener and the function that it runs
            currentSoundtrack.pause();
            /* so in summary what this does is check if currentSoundtrack is null or not, if its not then the currentSoundtrack 
            will have its event listener removed and will be paused preventing it from being played*/
        }
        console.log(currentSoundtrack)
        soundtrack.play() // whatever is in the paramater is what will play
        soundtrack.addEventListener('ended', replayFunc); // sound track adds the ended event listener which runs the replayFunc function when the soundtrack ends
        currentSoundtrack = soundtrack; // current soundtrack which is null will be equal to the audio
    }
    // the following conditional will be read first, and verify if the soundtrack is being played before stopping it
    else if (playOrPauseAndRestart === "pauseAndRestart"){
        if (currentSoundtrack !== null) { // checks if the current soundtrack is true or in other words if its still playing or if its not null
            // the above will return true and run the code below
            /* it is true since the first conditional is ran right when the game starts assigning the value of currentSountrack to that 
            of soundtrack inputted into the Audio paramater*/
            currentSoundtrack.removeEventListener('ended', replayFunc); // removes the event listener and the function that it runs
            currentSoundtrack.pause(); // pauses whatever is being played
            console.log('currentSoundtrack:', currentSoundtrack)
        }
         // when the paramater is equal to pauseAndRestart the current soundtrack will be assinged null as in nothing is being played
         currentSoundtrack = null; // gives it a value of null
         console.warn('game soundtrack stopped');
    }
}
// this will only run once which is why its in a seperate function
function gameOverSound(){
    let gameOverSound = new Audio(soundTracksAndMusic.gameOver);
    gameOverSound.play()
}


export {soundTracksAndMusic, soundEffects, gameSoundEffects, gameSoundtrack, gameOverSound}