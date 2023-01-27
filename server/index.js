const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// const mongoose = require("./database/mongoose");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// mongoose.init();

app.use("/api", routes);

const PORT = 8080;

app.listen(PORT, () => {
	console.log(`Server is running in port ${PORT}`);
});
