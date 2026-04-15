const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("접속 IP:", req.ip);
  res.send("환영합니다 😎");
});

app.listen(3000, () => {
  console.log("서버 실행중");
});
