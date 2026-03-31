const pastTenseVerbs = ["banished", "charged", "climbed", "forged", "laughed", "muttered", "shattered", "summoned", "wandered", "whispered"];
const verbs = ["cast", "charge", "glide", "ignite", "laugh", "mend", "roar", "summon", "wander", "whisper"];
const nouns = ["artifact", "beast", "candle", "dragon", "ember", "forest", "lantern", "mountain", "traveller", "whisper"];
const adjectives = ["ancient", "bold", "dusty", "enchanted", "fierce", "gentle", "mysterious", "ordinary", "shimmering", "timid"];
const sillyWords = ["blorpo", "flibber", "glonk", "mipmop", "noodlebrain", "plinket", "scrungle", "snozz", "wobbletusk", "zibble"];
const ingWords = ["blazing", "charging", "dancing", "glowing", "laughing", "shimmering", "singing", "soaring", "trembling", "wandering"];
const colours = ["amber", "azure", "crimson", "emerald", "gold", "indigo", "obsidian", "silver", "violet", "midnight"];

function randomWord(word) {
    return word[Math.floor(Math.random() * word.length)];
};

let story = ("The ADJECTIVE NOUN PAST_TENSE_VERB along the COLOUR path, clutching a ADJECTIVE NOUN that was still ING_WORD softly in the fading light. Somewhere behind them, a ADJECTIVE NOUN PAST_TENSE_VERB loudly, shouting a SILLY_WORD that echoed through the trees. The traveller PAST_TENSE_VERB again, unsure whether to VERB forward or hide beneath the COLOUR shadows. As they continued VERB_ING, a ADJECTIVE breeze drifted past, carrying the scent of a distant NOUN ING_WORD in the wind. The ground beneath their feet PAST_TENSE_VERB suddenly, revealing a hidden COLOUR portal swirling with ADJECTIVE energy. A tiny creature — all NOUN and SILLY_WORD — VERB_ING in frantic circles, trying to warn them. The traveller raised their ADJECTIVE NOUN, which immediately began ING_WORD with a strange COLOUR glow. They PAST_TENSE_VERB toward the portal, whispering a final SILLY_WORD for courage. The world around them started ING_WORD, twisting into shapes no NOUN had ever seen. With one last ADJECTIVE breath, they VERB into the light, leaving behind the COLOUR forest, the SILLY_WORD cries, and the ADJECTIVE NOUN that had guided them this far. Whatever awaited on the other side PAST_TENSE_VERB with possibility...");


function replaceWords(story) {
    const newStory = [];
    story.forEach(word => {
        let replaceWord = "";
        switch (word) {
            case "ADJECTIVE": replaceWord = randomWord(adjectives); break;
            case "NOUN": replaceWord = randomWord(nouns); break;
            case "PAST_TENSE_VERB": replaceWord = randomWord(pastTenseVerbs); break;
            case "COLOUR": replaceWord = randomWord(colours); break;
            case "ING_WORD": replaceWord = randomWord(ingWords); break;
            case "VERB": replaceWord = randomWord(verbs); break;
            case "SILLY_WORD": replaceWord = randomWord(sillyWords); break;
            case "VERB_ING": replaceWord = randomWord(ingWords); break;
            default: replaceWord = word;
            }
            newStory.push(replaceWord);
        });
    return newStory;
}

const splitStory = storyArray => storyArray.split(" ");
const joinStory = splitStoryArray => splitStoryArray.join(" ");

console.log(joinStory(replaceWords(splitStory(story))));