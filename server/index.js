const app = require("express")();
const http = require("http").createServer(app);
const cors = require("cors");
// io with front-end cors config
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("Le socket " + socket.id + " est connecté");
  socket.on("message", ({ name, message }) => {
    io.emit("message", { name, message });
  });
});

http.listen(4000, function () {
  console.log("listening on port 4000");
});
