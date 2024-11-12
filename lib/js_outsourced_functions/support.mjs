export function giveThings(age)
{
    const arr = [
        "GRAND THEFT AUTO IV",
        "RICKROLLING",
        "AQUA TEEN HUNGER FORCE COLON MOVIE FILM FOR THEATHRES",
        "THE NINTENDO WII",
        "TWITTER",
        "THE XBOX 360, XKCD",
        "CHUCK NORRIS FACTS",
        "OPPORTUNITY'S MARS EXPLORATION",
        "FACEBOOK",
        "GMAIL, PIRATES OF THE CARIBBEAN",
        "IN DA CLUB",
        "FIREFLY",
        "THE WAR IN AFGHANISTAN",
        "THE iPOD",
        "SHREK, WIKIPEDIA",
        "THOSE X-MEN MOVIES",
        "THE SIMS",
        "AUTOTUNED HIT SONGS",
        "THE STAR WARS PREQUELS",
        "THE MATRIX",
        "POKÉMON RED & BLUE",
        "NETFLIX, HARRY POTTER, GOOGLE",
        "DEEP BLUE'S VICTORY",
        "TUPAC'S DEATH",
        "THE LAST CALVIN AND HOBBES STRIP",
        "TOY STORY"
    ];

    const indexOffset = 16;

    var output = arr[age - indexOffset];

    if (output == undefined)
    {
        console.log("[DON'T WORRY, THEY'VE GOT THIS COVERED]");
        process.exit(0);
    }
    else
    {
        return output;
    }
}