const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));
app.use("/", require("./controlers"));
// cau hinh cho phep truy cau api
const POST = process.env.PORT || 5000;
app.listen(POST, () => {
  console.log("port POST");
});
