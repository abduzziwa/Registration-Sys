const prompt = require("prompt-sync")({ sigint: true });

console.log(new Date());

function isValidTimeFormat(time) {
  const regex = /^([01]\d|2[0-3]):([0-5]\d)$/;
  return regex.test(time);
}

let naam;
while (true) {
  naam = prompt("Wat is je naam? ");
  if (naam.length > 2) {
    break;
  }
  console.log("Vul een naam in die langer is dan 2 karakters.");
}

function registerTime() {
  let starttijd, eindtijd;

  while (true) {
    starttijd = prompt("Hoe laat ben je begonnen? (HH:MM) ");
    if (isValidTimeFormat(starttijd)) {
      break;
    }
    console.log("Ongeldige tijdnotatie. Voer de tijd in als HH:MM.");
  }

  while (true) {
    eindtijd = prompt("Hoe laat ben je klaar? (HH:MM) ");
    if (isValidTimeFormat(eindtijd) && eindtijd >= starttijd) {
      break;
    }
    console.log(
      "Ongeldige tijdnotatie of eindtijd moet na starttijd liggen. Voer de tijd in als HH:MM."
    );
  }

  return { starttijd, eindtijd };
}

let times;
do {
  times = registerTime();
} while (times.eindtijd < times.starttijd);

Datum = new Date().toDateString();
total = parseFloat(times.eindtijd) - parseFloat(times.starttijd);
console.log(total);

const Registerd = {
  Naam: naam,
  Datum: Datum,
  Starttijd: times.starttijd,
  Eindtijd: times.eindtijd,
};

console.log(Registerd);
