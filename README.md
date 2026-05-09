# Laboration 4 - Angular II

## Beskrivning
Detta projekt är en webbapplikation byggd med Angular. Applikationen hämtar data från en extern JSON-fil och presenterar ramschemat för Webbutvecklings-programmet vid Mittuniversitetet i tabellformat.
Projektet har utvecklats för att lära sig HTTP-anrop med Angular och HttpClient, skapa services samt sortera och filtrera data med databindning.

## Funktioner
- Hämtar kursdata från extern webbtjänst via HttpClient
- Presenterar kurser i en tabell med kurskod, kursnamn och progression
- Sortering på kurskod, kursnamn och progression (stigande/fallande)
- Filtrering/sökning på kurskod och kursnamn i realtid
- Service för datahämtning (CourseService)
- Interface/modell för kursdata (Course)
- Responsiv design med CSS och media queries

## Installation
```bash
git clone https://github.com/aliatwood/Typescript-laboration4.git
cd Typescript-laboration4
npm install
ng serve
```

## Publicerad webbplats
Webbplatsen publiceras automatiskt via **GitHub Pages**.  
[Länk till den publicerade webbplatsen](https://aliatwood.github.io/Typescript-laboration4/)
