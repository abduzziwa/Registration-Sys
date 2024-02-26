const prompt = require("prompt-sync")({ sigint: true });
const fs = require("fs");

console.log(new Date());

function isValidTimeFormat(time) {
  const regex = /^([01]\d|2[0-3]):([0-5]\d)$/;
  return regex.test(time);
}

function isFileEmpty(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return stats.size === 0;
  } catch (err) {
    return true; // If the file doesn't exist or there's an error, consider it empty
  }
}

function convertToCSV(objArray) {
  const header = Object.keys(objArray[0]).join(",");
  const rows = objArray.map((obj) => Object.values(obj).join(","));
  return header + "\n" + rows.join("\n");
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
// Tijd = now.getTime();
total = parseFloat(times.eindtijd) - parseFloat(times.starttijd);
console.log(total);

const Registerd = [
  {
    Naam: naam,
    RegistratieDatum: Datum,
    // RegistratieTijd: Tijd,
    Starttijd: times.starttijd,
    Eindtijd: times.eindtijd,
  },
];

console.log(Registerd);

const csvData = convertToCSV(Registerd);

const fileName = "RegisteratieTijd.csv";

if (isFileEmpty(fileName)) {
  // If file is empty, write headers along with data
  fs.writeFileSync(fileName, csvData);
} else {
  // If file is not empty, append data without headers
  fs.appendFileSync(fileName, "\n" + csvData.slice(csvData.indexOf("\n") + 1));
}

console.log("Data saved to RegisteratieTijd.csv successfully.");
