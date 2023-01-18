    // storyText
    const gameStoryText = {
        startText: "You wake up in an unknown place that seems to be like a castle. You see a wooden door, an open window, and a torch, what do you do?",
        doorOpen: `You walk torwards the door and slightly push it open, you see that the door takes you somewhere 
        down the stairs. As you walk down you begin to see a bright light what do you do?`,
        grabTorch: "You walk toward the torch and grab it. You now have a source of light!",
        torchGrabbed: "You have the torch...",
        walkTorwardsWindow: "It's dark and snowy outside, it looks like a storm is coming soon.",
        walkUpstairs: "You are back in the same room where you woke up in",
        walkTorwardsLight: `As you slowly make your way toward the bright light you hear a voice, and you think to yourself "Finally a person,
        maybe they can explain what I'm doing in this place." But when you go into the room where the light is there is nothing, and the light disappears.
        There seems to be a door taking you to a kitchen, another door that takes you to the next staircase down, and lastly a window where you can view the town from a distance, what do you do?`,
        walkIntoKitchen: "You are now in the kitchen it seems... Empty",
        walkToWindowAndViewTown: "The lights of this town seem beautiful in the winter, I wonder what town that is...",
        walkDownstairs: `You begin to cautiously proceed to the lower floor, this entire place is unknown to you, 
        but you begin to feel like you have been here before. After getting to the lower floor there is many bedrooms, maybe these are the staff rooms.
        What do you do?`,
        goBackUp: "You are back upstairs!",
        goBackDown: "You are back downstairs!",
        // Three Rooms Game Text From Here
        enterRoomOne: `It seems this is the staff room, there is a lot of old staff equipment such as cleaning supplies, 
        old clothes and uniforms and a few bunk beds.`,
        enterRoomTwo: "This door leads us to some kind of basement...",
        enterRoomThree: "This is a personal quarter of some sort, it seems that this might have belonged to someone important, The place is huge!...",
        exploreRoomThree: `After looking around the room you find a wooden desk. All its cabinets seemed to be locked so you look for a brick and smash it open. 
        After going through the cabinets you find a old dusty journal. You open it and read "December 5th, 1623, Gaston Wells. The Castle was attacked and sacked by the neighboring Whitehorns, 
        they appeared out of nowhere with a force that was said to be about three times stronger than our own. I luckily wasn't at The Castle when it occurred, 
        but one of the few survivors that was able to escape and hide explained the horrific news.
        If you are reading this then I am probably no longer at The Castle, go to the nearby town and look for answers."`, // actual important text relevant to story
        goBack: "You are back outside of the three rooms...",
        lookAroundStaffQuarters: "There isn't much in the room at all, but there seems to be a lit torch on the wall",
        cantProceedTorwardsBasement: "I need a source of light, it's too dark...",
        // New part of story
        proceedTorwardsBasement: `As you walk into the basement, once again you begin to hear sounds of people. Suddenly, the wooden stairs that lead you downwards begin to crumble, you fall down and pass out.
        You wake up once again, this time in another room. It seems that you are still in the basement, but in a different part of it. It's dark and you no longer have your torch!`,
        walkAroundUntilYouFindSomethingUseful: `You walk around and you see the light once again, it begins to shine more and more as you walk torwards it. 
        After you get close enough to the point where you could grab it, it begins to move. It seems like its waiting for me...`,
        followLight: `With no other options you begin to follow the light which appears to guide you, you walk and walk until it finally reaches its destination.
        You are now in front of an exit to The Castle's exterior. The light vanishes, you open the door and there is a snowstorm, 
        it's freezing and you have no source of heat but you need to search for answers.`,
        walkIntoTheWoods: "You walk into the woods and stumble upon a pack of wolves, you don't have many options. You fight the pack or you can turn back what do you do?",
        fightPackOfWolves: "Wolfs charge and bite you. You are now injured!",
        throwRockAtWolves: "You have struck the leader of the pack, it is now retreating!",
        escapeFromWolves: "You have successfully escaped from the wolves!",
        makeYourWayTorwardsTownIfInjured: `You walk toward the town lights while injured, you feel like you are going to pass out but you push through anyways.
        On arrival, you finally see people, not as many as you would normally see in a town but still people! What appears to be the town leader offers to tend to your wounds`,
        makeYourWayTorwardsTown: `You walk toward the town lights, and on arrival, you notice that this town doesn't have many people. But that's fine since maybe someone here might be able to give you the answers you are looking for.
        What appears to be the town's leader approaches you, and asks you a lot of things. You are bombarded with questions until the leader offers to talk inside.`,
        acceptOfferIfInjured: `The town leader tends to your wounds as you rest. The next day you wake up and it seems that most of your injuries are patched up,
        the town leader enters the room you are in and says "My name is Emet Elrod the leader of the Town of White Horn Castle, what is yours?"`,
        acceptOffer: `You sit down at a table and begin to speak with the town leader, he presents himself as a man named Emet Elrod and as the leader of the Town of White Horn Castle.
        He then asks you for your name...`,
        denyInjuryTreatment: `You deny treatment and die minutes later, GAME OVER! Play Again?`,
        dontKnowIfReadDiary: `Your response "I'm not sure, a few hours ago I woke up in the castle that is nearby in the middle of the night with no memory of myself or what I was doing there.
        As I was walking around, a mysterious light would appear, also I stumbled upon a locked drawer that contained a diary of a man named Gaston Wells, where he described an attack on The Castle. 
        In the diary, he wrote that whoever sees it should go towards the town nearby in search of answers..." When Emet heard the name of the man in the diary, he made an odd expression on his face,
        he then responded: "I see the invasion of what is now known as Whitehorn Castle, was close to a century ago. No one has been in the castle other than thieves and those who wish to see the castle, 
        so for you to find such a valuable historical piece intact is a great discovery!"`,
        dontKnow: `Your response "I'm not sure, a few hours ago I woke up in the castle that is nearby in the middle of the night with no memory of myself or what I was doing there.
        The castle was empty, not a single person was inside but there was a light that would follow me around as I explored the unknown place." Emet had a very doubtful look on his face, I could tell he didn't believe much of what I said.
        Emet then asked me if I "wanted to know the brief history of the castle and town?"`,
        castlesBriefHistory: `
        Emet explained that "White Horn Castle which was once ruled by the White Horn Kingdom was once known as Wuillbirds Castle, 
        which was ruled under the Wuillbird Kingdom. These two kingdoms were always at war with one another, almost a century ago the Whitehorns that neighbored them
        were able to plan a successful invasion of the castle. After winning they acquired this town and the castle nearby, which is why both inherited the name, Whitehorn.
        But after a few decades passed, something mysterious happened. The King of the Whitehorns had disappeared one day without anyone knowing how or why. Then shortly after
        a new king was chosen to rule, many of the main castles that belonged to the Whitehorn's had just vanished out of nowhere which essentially brought the kingdom entirely to an end, since there was no longer anyone to rule the towns and cities. 
        And also because the Whitehorn's were constantly at war with many other Kingdoms, which led many of their remaining castles to either be captured or abandoned to make efforts to fortify another. However, in the end, it just didn't work out.
        This town is one of the many that is no longer ruled by anyone, we rule ourselves and have been at peace for many decades and have even had positive interactions with the neighboring towns and kingdoms. This is also why the town is only the 'Town of Whitehorn' in name..."`,
        waitWhat: `Emet once again explained that "The Whitehorn's mysteriously vanished.
        There have been rumors from those who have lived in town for decades that sometime after the Wuillbird Kingdom fell, a strange man that simply went by the name Gaston had cursed the Whitehorn's, but no one knows if this is true and many believe it to just be a fake rumor."`,
        manInDiary: `You ask Emet about the man in the diary but, he assures you "that I don't know him, and that no one in town probably knows him either, but that rumors had circled about how a man that might've gone by that name had set a curse on the Whitehorn's many years ago"`,
        needAnswers: `You tell Emet that either way, you needed answers. He said that "You should probably ask the people living in town, but I don't think it's true, I also doubt that anyone knows much about a rumor that went around decades ago."
        Before leaving Emmet's house, he said that "If you need anything let me know!"`,
        askAround: `After asking around town for hours about any information about the rumor or the man named Gaston, an old lady which seemed to be in here 70s or 80s approaches you.
        She claims to know about the rumor! She tells you that "many years ago a man had entered town trying to conduct some sort of curse or ritual, I didnt know what it was exactly but this is how the rumor began. 
        The man began to shout in town, saying that he would set a curse on the Whitehorns, but this did not end well for him because the guards heard of this and took it as disrespect against their king and Kingdom.
        He ended up receiving a harsh punishment for this and was sent to the castles dungeon. After that no one heard from him." the lady then said that "If you want to know more than you might need to go back to the castle and into the dungeon."
        She then said that no one goes to The Castle because many believe it to be haunted.`,
        walkAroundTown: `As you walk around town, you notice this village has a very peaceful atmosphere even in the middle of the winter. 
        You see the lights, people coming back into town with firewood, and wait... Snowmen?`,
        backAtTheCastle: `You are back inside the castle, you make your way toward the basement and instead of taking the route that takes you to the castle's exterior you take another hallway.
        You can now go in one of the following two directions, left or right what do you do?`,
        goLeft: `You go left, and after walking for some time, you find many rooms which seem to have been part of the dungeon. You now need to look through them to find clues...`,
        goRight: `You go right, and after walking for a while you find a dead end, there is nothing here!`,
        lookThroughRooms: `After searching through each room, you find something interesting. One of the rooms has a few candles lit inside it, but no one is inside.`,
        enterRoom: `You enter the room and the light appears once more. It begins to quickly come close to you, and before you can react something happens. 
        You can now remember everything, your name is Gaston Wells the man who wrote the diary and the one who cursed the Whitehorns.
        Filled with anger and hatred against the ones who took your home, you decided to spend years learning how to set a curse powerful enough to make them disappear.
        Which you managed to accomplish at the end of your life. For the curse to even take effect you needed to sacrifice your life force.
        You don't feel fullfilled for accomplishing your goal or even sad, after all, you were never real in the first place. You are just a ghost who suddenly awoke from a deep slumber
        who also began to act like you were alive...`,
        endGame: `Thanks For Playing! Would You Like To Play Again?`
        // work in progress
    }
    // options
    const options = {
       
        startOptions: ["1. Open Door", "2. Grab Torch", "3. Go to Window and Look Outside"], 
        doorOpenOptions: ["1. Go Back Upstairs", "2. Walk Torwards the Light"],
        grabTorchOptions: ["1. Open Door", "2. Go to Window and Look Outside"], 
        walkTorwardsWindowOptions: ["1. Open Door", "2. Grab Torch"],
        walkUpstairsOptions: ["1. Open Door", "2. Grab Torch", "3. Go to Window and Look Outside"],
        walkTorwardsLightOptions: ["1. Go To Kitchen", "2. Go Downstairs", "3. View Town"],
        walkIntoKitchenOptions: ["1. Go Downstairs", "2. View Town"],
        walkToWindowAndViewTownOptions: ["1. Go To Kitchen", "2. Go Downstairs"],
        walkDownstairsOptions: ["1. Enter Room One", "2. Enter Room Two", "3. Enter Room Three", "4. Go Back Up"],
        walkDownOptions: ["1. Go Down", "2. View Town"],
        enterRoomOneOptions: ["1. Look Around", "2. Go Back"],
        enterRoomTwoOptions: ["1. Proceed Torwards Basement", "2. Go Back"],
        enterRoomThreeOptions: ["1. Explore Room", "2. Go Back"],
        exploreStaffQuartersOptions: ["1. Grab it", "2. Go Back"],
        cantProceedTorwardsBasementOptions: ["1. Go Back"],
        proceedTorwardsBasementOptions: ["1. Walk Around Until You Find Something Useful"],
        walkAroundUntilYouFindSomethingUsefulOptions: ["1. Follow Light"],
        followLightOptions: ["1. Walk into The Woods", "2. Make Your Way Torwards Town"],
        walkIntoWoodsOptions: ["1. Make Your Way Torwards Town", "2. Fight the Pack"],
        fightPackOfWolvesOptions: ["1. Throw Rock at The Pack Leader", "2. Escape!"],
        throwRockAndEscapeFromWolvesOptions: ["1. Make Your Way Torwards Town"],
        makeYourWayTorwardsTownIfInjuredOptions: ["1. Accept", "2. Deny"], // possible ending if you deny
        makeYourWayTorwardsTownOptions: ["1. Accept"],
        denyInjuryTreatmentOptions: ["1. yes", "2. no"],
        acceptOfferOptions: ["1. I Dont Know"],
        dontKnowIfReadDiaryOptions: ["1. Tell Me More", "2. Have You Heard of The Man in The Diary?"],
        dontKnowOptions: ["1. Tell Me More"],
        castlesBriefHistoryOptions: ["1. Wait What?"],
        castlesBriefHistoryIfReadDiaryOptions: ["1. Tell Me More", "2. Have You Heard of The Man in The Diary?", "3. Wait What?"],
        waitWhatOptions: ["1. I Need Answers"],
        needAnswersOptions: ["1. Ask Around", "2. Walk Around Town"],
        walkAroundTownOptions: ["1. Ask Around"],
        askAroundOptions: ["1. Go Back To Castle"],
        backAtTheCastleOptions: ["1. Go Left", "2. Go Right"],
        goRightOptions: ["1. Go Left"],
        goLeftOptions: ["1. Look Through The Rooms"],
        lookThroughRoomsOptions: ["1. Enter Room"],
        enterRoomOptions: ["1. End Game"]
    }

export {gameStoryText, options} // exporting these 2 objects