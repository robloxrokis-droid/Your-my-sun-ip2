const express = require("express");
const app = express();

app.get("/", async (req, res) => {
  const ip =
    (req.headers["x-forwarded-for"] || "").split(",")[0] ||
    req.socket.remoteAddress;

  const agent = req.headers["user-agent"];

  // 🤖 봇이면 그냥 끝
  if (agent && agent.includes("UptimeRobot")) {
    console.log("👉 봇 접속");
    return res.send("OK");
  }

  console.log("🔥 진짜 사람 접속");
  console.log("IP:", ip);

  // 🔥 위치 API
  try {
    const response = await fetch(`https://ipapi.co/${ip}/json`);
    const data = await response.json();

    console.log("나라:", data.country_name);
    console.log("도시:", data.city);
    console.log("위도:", data.latitude);
    console.log("경도:", data.longitude);

  } catch (err) {
    console.log("위치 조회 실패");
  }

  res.send("OK");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("server running");
});
