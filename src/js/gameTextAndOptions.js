    // storyText
    const gameStoryText = {
        startText: "You wake up in an unknown place which seems to be like a castle. You see a wooden door, an open window, and a torch, what do you do?",
        doorOpen: `You walk torwards the door and slightly push it open, you see that the door takes you somewhere 
        down the stairs. As you walk down you begin to see a bright light what do you do?`,
        grabTorch: "You walk torwards the torch, and grab it. You now have a source of light!",
        torchGrabbed: "You have the torch...",
        walkTorwardsWindow: "Its dark and snowy outside, it looks like a storm is coming soon.",
        walkUpstairs: "Your back in the same room where you woke up in",
        walkTorwardsLight: `As you slowly make your way torwards the bright light you hear a voice, you think to yourself "Finally a person,
        maybe they can explain what im doing in this place". But when you go into the room where the light is at there is nothing, and the light disappears.
        There seems to be a door taking you to a kitchen, another door that takes you to the next staircase down, and lastly a window where you can view the town from a distance, what do you do?`,
        walkIntoKitchen: "You are now in the kitchen it seems... Empty",
        walkToWindowAndViewTown: "The lights of this town seem beautiful in the winter, I wonder what town that is...",
        walkDownstairs: `You begin to cautiously proceed to the lower floor, this entire place is unknown to you, 
        but you begin to feel like you have been here before. After getting to the lower floor there is many bedrooms, maybe these are the staff rooms.
        What do you do?`,
        goBackUp: "Your back upstairs!",
        goBackDown: "Your back downstairs!",
        // Three Rooms Game Text From Here
        enterRoomOne: `It seems this is the staff room, there is a lot of old staff equipment such as cleaning supplies, 
        old clothes and uniforms and a few bunk beds.`,
        enterRoomTwo: "This door leads us to some kind of basement...",
        enterRoomThree: "This is a personal quarter of some sort, it seems that this might have belonged to someone important, the place is huge...",
        exploreRoomThree: `After looking around the room you find a wooden desk, all its cabinets seemed to be locked so you look for a brick and smash it open. 
        After going through the cabinets you find a old dusty journal you open it and read: "December 5th, 1623, Gaston Wells. The castle was attacked and sacked by the neighboring White Horns,
        they appeared out of nowhere with a force that was about three times stronger than our own. I luckily wasnt at the castle when it occurred but one of the few survivors that was able to escape and hide explained the horrific news.
        If you are reading this then I am probably no longer at the castle, go to the nearby town and look for answers."`, // actual important text relevant to story
        goBack: "Your are back outside of the three rooms...",
        lookAroundStaffQuarters: "There isnt much in the room at all, but there seems to be a lit torch on the wall",
        cantProceedTorwardsBasement: "I need a source of light, its too dark...",
        // New part of story
        proceedTorwardsBasement: `As you walk into the basement, once again you begin to hear sounds of people. Suddenly the wooden stairs that lead you downwards begin to crumble, you fall down and pass out....
        You wake up once again, this time in another room it seems that you are still in the basement but in a different part of it, its dark and you no longer have your torch!`,
        walkAroundUntilYouFindSomethingUseful: `You walk around and you see the light once again, it begins to shine more and more as you walk torwards it. 
        After you get close enough to the point where you could grab it, it begins to move. It seems like its waiting for me...`,
        followLight: `With no other options you begin to follow the light which appears to guide you, you walk and walk until it finally reaches its destination.
        You are now in front of a exit to the castles exterior. The light vanishes, you open the door and there is a snow storm, 
        its freezing and you have no source of heat but you need to search for answers.`,
        walkIntoTheWoods: "You walk into the woods and stumble upon a pack of wolves, you dont have many options. You fight the pack or you turn back what do you do?",
        fightPackOfWolves: "Wolfs charge and bite you, you are now injured.",
        throwRockAtWolves: "You have struck the leader of the pack, it is now retreating!",
        escapeFromWolves: "You Have succesfully escaped from the wolves!",
        makeYourWayTorwardsTownIfInjured: `You walk torwards the town lights while injured, you feel like you are going to pass out but you push through anyways.
        On arrival you finally see people, not as many as you would normally see in a town but still people! What appears to be the town leader offers to tend to your wounds`,
        makeYourWayTorwardsTown: `You walk torwards the town lights, on arrival you notice that this town doesnt have many people. But thats fine since maybe someone here might be able to give you the answers you are looking for.
        What appears to be the towns leader approaches you, and asks you a lot of things. You are bombarded with questions, until the leader offers to talk inside.`,
        denyInjuryTreatment: `You deny treatment and die minutes later, GAME OVER!. Play Again?`
       // acceptInjuryTreatment: // work in progress
    }
    // options
    const options = {
        startOptions: ["Open Door", "Grab Torch", "Go to Window and Look Outside"],
        doorOpenOptions: ["Go Back Upstairs", "Walk Torwards the Light"],
        grabTorchOptions: ["Open Door", "Go to Window and Look Outside"], 
        walkTorwardsWindowOptions: ["Open Door", "Grab Torch"],
        walkUpstairsOptions: ["Open Door", "Grab Torch", "Go to Window and Look Outside"],
        walkTorwardsLightOptions: ["Go To Kitchen", "Go Downstairs", "View Town"],
        walkIntoKitchenOptions: ["Go Downstairs", "View Town"],
        walkToWindowAndViewTownOptions: ["Go To Kitchen", "Go Downstairs"],
        walkDownstairsOptions: ["Enter Room One", "Enter Room Two", "Enter Room Three", "Go Back Up"],
        walkDownOptions: ["Go Down", "View Town"],
        enterRoomOneOptions: ["Look Around", "Go Back"],
        enterRoomTwoOptions: ["Proceed Torwards Basement", "Go Back"],
        enterRoomThreeOptions: ["Explore Room", "Go Back"],
        exploreStaffQuartersOptions: ["Grab it", "Go Back"],
        cantProceedTorwardsBasementOptions: ["Go Back"],
        proceedTorwardsBasementOptions: ["Walk Around Until You Find Something Useful"],
        walkAroundUntilYouFindSomethingUsefulOptions: ["Follow Light"],
        followLightOptions: ["Walk into The Woods", "Make Your Way Torwards Town"],
        walkIntoWoodsOptions: ["Make Your Way Torwards Town", "Fight the Pack"],
        fightPackOfWolvesOptions: ["Throw Rock at The Pack Leader", "Escape!"],
        throwRockAndEscapeFromWolvesOptions: ["Make Your Way Torwards Town"],
        makeYourWayTorwardsTownIfInjuredOptions: ["Accept", "Deny"], // possible ending if you deny
        makeYourWayTorwardsTownOptions: ["Accept"],
        denyInjuryTreatmentOptions: ["yes", "no"]
    }

export {gameStoryText, options} // exporting these 2 objects