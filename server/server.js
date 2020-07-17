const http = require("http");
const requestListener = (req, res) => {
  console.log(req.url);
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (req.url === "/reverseString") {
    res.statusCode = 200;
    var name;
    req.on("data", (chunk) => (name = chunk.toString(`utf-8`)));
    req.on("end", () => {
      
      let nameArray = name.split("");
      
      let reverseArray = nameArray.reverse();
     
      name = reverseArray.join("");
      res.end(JSON.stringify(name));
    });
    
  }
  
  

  //res.setHeader('Content-Type', 'application/json');
};
const host = "localhost";
const port = 8000;
const server = http.createServer(requestListener);
server.listen(port, host, () =>
  console.log(`hello there http://${host}:${port}`)
);
