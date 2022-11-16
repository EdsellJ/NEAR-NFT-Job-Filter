require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const industry = require("./industry");
const companySize = require("./companySize");
const skill = require("./skill");
const jobType = require("./jobType");
// industry();
// companySize();
// skill();
jobType();
