const prompt = require("prompt-sync")({ sigint: true });

console.log(new Date());

function isValidTimeFormat(time) {
  const regex = /^([01]\d|2[0-3]):?([0-5]\d)$/;
  return regex.test(time);
}

let name;
while (true) {
  name = prompt("Wat is je naam? ");
  if (name && name.length > 2) {
    break;
  }
  console.log("Vul een naam in die langer is dan 2 karakters.");
}

function registerTime() {
  let starttijd;
  while (true) {
    starttijd = prompt("Hoe laat ben je begonnen ? (HH:MM)");
    if (isValidTimeFormat(starttijd)) {
      break;
    }
    console.log("Ongeldige tijdnotattie. Voer de de tijd in als HH:MM");
  }

  let eindtijd;
  while (true) {
    eindtijd = prompt("Hoe laat ben je begonnen ? (HH:MM)");
    if (isValidTimeFormat(eindtijd)) {
      break;
    }
    console.log("Ongeldige tijdnotattie. Voer de de tijd in als HH:MM");
  }

  while (eindtijd < starttijd) {
    registerTime();
    break;
  }
}

registerTime();

console.log("Naam:", name);
console.log("Datum:", new Date());
console.log("Starttijd:", starttijd);
console.log("Eindtijd:", eindtijd);
