const express = require("express");
const getRaces = require("./services/notion");
const PORT = process.env.PORT || 5000;

const app = express();

// Frontend
app.use(express.static("public"));

app.get("/races", async (req, res) => {
  const races = await getRaces();
  res.json(races);
});

app.listen(PORT, console.log(`Server running on port ${PORT}`));

// (async () => {
//   const nRaces = await getRaces();
//   console.log(nRaces);
// })();
