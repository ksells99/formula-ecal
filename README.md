## Formula E-Cal

I recently discovered the [Notion API](https://www.notion.so) and wanted to try it out - so I created Formula E-Cal, a fairly simple Node app that displays the race calendar for the FIA Formula E World Championship for the upcoming season.

![Showcase1](/showcase-1.png?raw=true "Showcase1")

All of the races have been added to a Notion calendar and the app then fetches these from the API and outputs them onto the page. This means that should the calendar change at any point (which any fan of Formula E will agree happens quite frequently), no code changes are required and I simply just update the calendar on Notion.

![Showcase2](/showcase-2.png?raw=true "Showcase2")

The app is hosted on Heroku and can be accessed here: https://formula-e-cal.herokuapp.com/
