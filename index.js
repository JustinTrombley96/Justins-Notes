const server = require("./server.js");

const port = 5000 || process.env.PORT;

server.listen(port, () => {
  console.log(`Server is currently running on port: ${port}. `);
});
