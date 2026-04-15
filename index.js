app.get("/", (req, res) => {
  const ip =
    req.headers["x-forwarded-for"] ||
    req.socket.remoteAddress;

  console.log("IP:", ip);

  res.send("OK");
});
