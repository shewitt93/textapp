const http = require("http");
const requestListener = (req, res) => {
  console.log(req.url);
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (req.url === "/reverseString") {
    res.statusCode = 200;
    var name;
    req.on("data", (chunk) => (name = chunk.toString(`utf-8`)));
    req.on("end", () => {
      
      let funny = [];

      for (let i = 0; i < name.length; i++) {
        let letter = name[i];
        if (letter === " ") {
          funny.push(letter);
        } else {
          if (i % 2 === 0) {
            funny.push(letter.toUpperCase());
          } else {
            funny.push(letter.toLowerCase());
          }
        }
      }
      funny = funny.join("");
      res.end(JSON.stringify(funny));
    });
  }
};
const host = "localhost";
const port = 8000;
const server = http.createServer(requestListener);
server.listen(port, host, () =>
  console.log(`hello there http://${host}:${port}`)
);
