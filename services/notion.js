const dotenv = require("dotenv").config();
const { Client } = require("@notionhq/client");

// Initialise notion client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

// Gets called from index.js
module.exports = getRaces = async () => {
  const payload = {
    path: `databases/${process.env.NOTION_DATABASE_ID}/query`,
    method: "POST",
  };

  //   Get data from notion
  const { results } = await notion.request(payload);

  //   Map through result and create race object for each calendar entry
  const races = results.map((page) => {
    return {
      id: page.id,
      round: page.properties.Round.rich_text[0].text.content,
      title: page.properties.Name.title[0].text.content,
      date: page.properties.Date.date.start,
      circuit: page.properties.Circuit.rich_text[0].text.content,
      country: page.properties.Country.rich_text[0].text.content,
      country_code: page.properties.Code.rich_text[0].text.content,
    };
  });

  // Notion returns latest calendar entry first - need to reverse to have races in round order
  const racesInOrder = races.slice().reverse();

  return racesInOrder;
};
