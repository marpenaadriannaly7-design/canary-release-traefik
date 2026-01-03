const express = require("express");
const path = require("path");

const app = express();
const PORT = 8080;

const VERSION = process.env.VERSION || "unknown";
const STATUS = process.env.STATUS || "unknown";

app.use(express.static(__dirname));

app.get("/version", (req, res) => {
  res.json({
    version: VERSION,
    status: STATUS
  });
});

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
