const prompt = require("prompt-sync")({ sigint: true });

const name = prompt("Wat is je naam? ");

while ( name || name <= 2 ) {
    console.log("Vull de naam in eerst")
    break
}
const datum = prompt("Wat is de datum vandaag? ");
if ( !datum ) {
    console.log("Vull de datum in")
}
const starttijd = prompt("Hoelaat ben je begonnen? ");
if ( !starttijd ) {
    console.log("Vull de starttijd in")
}
const eindtijd = prompt("Hoe laat ben je klaar? ");
if ( !eindtijd ) {
    console.log("Vull de datum in")
}


