const express = require("express");
const { urlencoded } = require("express");
const app = express();
const morgan = require("morgan");

const port = process.env.PORT || 4000;

app.use(morgan("dev"));
app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use(require("./Routes/index.js"));

app.listen(port, () => {
  console.log(`run in port ${port}`);
});
