// Bank some good vibe options
const vibes = [
    "...and this look awesome!",
    "...have a wonderful day!",
    "...and you've got this!",
    "...and this is amazing!"
];

// choose a random good vibe
var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

// display a good vibe
document.querySelector(".vibe").append(vibe);
