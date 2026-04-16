const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const ip =
    (req.headers["x-forwarded-for"] || "").split(",")[0] ||
    req.socket.remoteAddress;

  const agent = req.headers["user-agent"];

  console.log("IP:", ip);
  console.log("AGENT:", agent);

  if (agent && agent.includes("UptimeRobot")) {
    console.log("👉 봇 접속");
  } else {
    console.log("🔥 진짜 사람 접속");
  }

  res.send("OK");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("server running");
});
