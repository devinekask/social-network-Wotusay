# 01 ThatsApp - MobX


* Je start met de oplossing van het vorig labo, we gebruiken dezelfde store waar we nu MobX aan toevoegen.
* Voeg MobX toe aan de package.json

## Store

* Bekijk wat er van de store `observables`, `actions` of `computed values` kunnen zijn. Stel deze in via een `decorate` functie.
* Zet de `enforceActions` op observed.
* Doe hetzelfde voor de `Message` class, onze app moet immers weten dat de `unread` property is aangepast.
* Exporteer telkens de Class.

## index.js
* maak de store beschikbaar op jouw window, zoals in vorig labo
* voorzie een MobX autorun, waarin je de 2 renderfuncties aanspreekt. Telkens wanneer er -iets- in de store is aangepast, zullen deze 2 functies runnen.
  * Het is niet meer nodig om deze op andere plaatsen aan te roepen, haal deze gerust weg.
  * Je zal her-en-der nog een aantal dingetjes moeten aanpassen. Heb je altijd de volledige store nodig?
* We kunnen nu niet meer rechtstreeks de messages array van de store aanspreken om er start-data in te plaatsen. We hebben er immers via de `enforceActions` voor gezorgd dat dit altijd via een `action` moet verlopen.
  * Voeg een extra action toe, `seed` genaamd, waar je een array met `Message` objecten kan aan meegeven. In de store kan je deze dan toevoegen aan de messages array. tip: de **spread operator** kan je handig combineren met de push() method van een array.
* Normaal zou de applicatie al terug moeten werken.

## Dig deeper
* Je kan aan de store via de console, voeg eens een message toe langs die weg. Zie je de interface updaten?
* één van de functies in de store is een `computed value` (om het niet te verklappen, noemen we ze verder functie-x) Haal deze eens uit het `decorate` object (zodat die functie geen computed value meer is.) De applicatie blijkt nog perfect te werken... Wat is dat hier zeg?
  * Er is meer aan de hand, we zullen eens bijhouden hoeveel keer die functie uitgevoerd is. Maak een property `counter` aan in de constructor van de store en zet deze op 0
  * In functie-x verhoog je die counter met 1
  * Refresh de app, en check de waarde van de `counter`. (via de console)
  * Roep -terug via de console- functie-x aan.
  * Vraag opnieuw de waarde van de `counter` op. Onthou dit getal.
  * Maak van functie-x terug een `computed value`
  * Opnieuw nu: Refresh de app, en check de waarde van de `counter`. (via de console)
  * Roep -terug via de console- functie-x aan.
  * Vraag opnieuw de waarde van de `counter` op... Whuuuuut¿



# social-network-Wotusay
