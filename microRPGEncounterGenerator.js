const setting = ["cafe","home","park","enchanted forest","abandoned warehouse","wizard academy","suburban street","mysterious cave","shopping mall","floating sky island"];
const obstacleOrEnemy = ["Nacho","Unicorn","Magpie","Goblin Accountant","Sentient Toaster","Time‑Traveling Kangaroo","Shadow Beast","Angry Barista","Miniature Giant Spider","Cursed Garden Gnome"];
const enemyPersonality = ["Friendly","Hostile","Insane","Overly Dramatic","Passive‑Aggressive","Confused","Flirtatious","Egomaniacal","Sleep‑Deprived","Uncomfortably Cheerful"];
const reward = ["Free Yoghurt","Used Frisbee","A New Sneaker","Bag of Ancient Coins","Mystical Key","Voucher for One Hug","Golden Sausage Roll","Enchanted USB Stick","Lifetime Supply of Toothpicks","A Dragon’s IOU Note"];
const plotTwist = ["is cursed","also talks","wants you to donate to their GoFundMe","was your friend all along","is actually two raccoons in a trench coat","explodes into glitter","reveals a shocking secret","turns invisible at inconvenient times","starts dancing uncontrollably","opens a portal to somewhere worse"];

const story = "You arrive at SETTING just as the sun begins to set. Without warning an OBSTACLE appears blocking your path and staring at you with a PERSONALITY intensity that makes your stomach twist. You try to stay calm but the OBSTACLE steps closer and you realise the situation TWIST . With no other choice you prepare yourself for whatever comes next hoping that if you survive this encounter you might earn a REWARD that makes the whole ordeal worth it.";

const randomizer = word => {
    return word[Math.floor(Math.random() * word.length)];
}

function storyGenerator() {

    const storyArray = story.split(" ");
    const match = word.match((/^[A-Z_]+)([!?,.])?$/);

    

}

console.log(storyGenerator(story));