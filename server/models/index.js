const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.companies = require("./company.model")(mongoose);
db.industries = require("./industry.model")(mongoose);
db.companySizes = require("./companySize.model")(mongoose);
db.skills = require("./skill.model")(mongoose);
db.jobTypes = require("./jobType.model")(mongoose);
db.jobs = require("./job.model")(mongoose);
db.applicants = require("./applicant.model")(mongoose);

module.exports = db;
