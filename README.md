## Lab 1 med Express - a Node.js web application

Ett enklare API med GET, POST, PUT och DELETE. APIet innehåller 4 personer. Varje person har ett id, namn, ålder och favoritmaträtt.

## Installation

Se till att NodeJS är installerat på datorn.

1. Ladda ner projektet
2. Skriv "npm install" i terminalen
3. Skriv "npm init -y" i terminalen
4. Skriv "npm install express" i terminalen

Skriv sen "node index.js" i terminalen för att starta.

Du kan testa endpoints med request.rest genom att använda VS Codes REST Client tillägg.

## Beskrivning av projektet

I den här laborationen ska du individuellt skapa ett enklare REST-API i NodeJS med express. Då API:et skall har funktionalitet för CRUD skall det finnas 4 st endpoints inkluderat GET, DELETE, PUT och POST för en resurs. Varje endpoint skall utföra vad dess anropsmetod ämnar att utföra, dvs. POST för att lägga till, PUT för att uppdatera, GET för att hämta osv. GET anropet skall hämta alla objekt. Vad API:et hanterar för typ av resurs väljer ni själva, det viktiga är att det finns minst 4 st egenskaper för ett objekt varav en egenskap är id. Projektet skall inte ha någon databas utan istället ha all data sparad lokalt i serverfilen (exempelvis en array med produkter). För att testa ert API rekommenderas du att använda VS Code tilläget REST Client.

## Krav som är uppfyllda samt repo-länk

Projektet innehåller minst 4 st. endpoints (GET, POST, PUT & DELETE för en resurs) - UPPFYLLT
Samtliga endpoints skall kunna nås via en REST Client fil (.rest) - UPPFYLLT
Datan som API:et hanterar sparas lokalt i serverfilen - UPPFYLLT
Git & GitHub har använts - UPPFYLLT
Projektmappen innehåller en README.md fil - (läs ovan för mer info) - UPPFYLLT
Uppgiften lämnas in i tid! - UPPFYLLT

Repo: https://github.com/antonohman/lab1-restapi
