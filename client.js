const net = require("net");
const { setInterval } = require("timers");

//// establish a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "10.0.2.15",
    port: 50541,
  });
  //interpret incoming data as text
  conn.setEncoding("utf8");
  //send messages to client console and server upon connection
  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
    conn.write("Name: SO");
  });
  //handle incoming data upon connection
  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};

module.exports = { connect };
