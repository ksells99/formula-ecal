const dotenv = require("dotenv").config();
const { Client } = require("@notionhq/client");

// Initialise notion client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

// Gets called from index.js
module.exports = getRaces = async () => {
  const databaseId = process.env.NOTION_DATABASE_ID;

  // Get race data from notion - sort by round asc
  const { results } = await notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        property: "Round",
        direction: "ascending",
      },
    ],
  });

  //   Map through result and create race object for each calendar entry
  const races = results.map((page) => {
    return {
      id: page.id,
      round: page.properties.Round.number,
      title: page.properties.Name.title[0].text.content,
      date: page.properties.Date.date.start,
      circuit: page.properties.Circuit.rich_text[0].text.content,
      country: page.properties.Country.rich_text[0].text.content,
      country_code: page.properties.Code.rich_text[0].text.content,
      url: page.properties.Info.url,
    };
  });

  return races;
};
