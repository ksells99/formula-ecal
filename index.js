const express = require("express");
const cors = require("cors");
const getRaces = require("./services/notion");
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

// Frontend
app.use(express.static("public"));

app.get("https://formula-e-cal.herokuapp.com/races", async (req, res) => {
  const races = await getRaces();
  res.json(races);
});

app.listen(PORT, console.log(`Server running on port ${PORT}`));

// (async () => {
//   const nRaces = await getRaces();
//   console.log(nRaces);
// })();
