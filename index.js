const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const ip =
    req.headers["x-forwarded-for"] ||
    req.socket.remoteAddress;

  console.log("IP:", ip);

  res.send("OK");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("server running");
});
