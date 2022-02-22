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
    const durations = [1000, 3000, 5000, 8000, 10000];
    for (const duration of durations) {
      setTimeout(() => {
        conn.write("Move: up");
      }, duration);
    }
  });
  //handle incoming data upon connection
  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};

console.log("Connecting...");

module.exports = { connect };
