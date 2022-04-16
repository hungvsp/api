const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));
app.use("/", require("./controlers"));
// cau hinh cho phep truy cau api

app.listen(5000, () => {
  console.log("port 5000");
});
