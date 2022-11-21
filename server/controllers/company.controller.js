const db = require("../models");
const Company = db.companies;
const Industry = db.industries;
const CompanySize = db.companySizes;

exports.register = async (req, res) => {
	try {
		await Company.create(req.body);
		res.status(200).json("success");
	} catch (err) {
		res.status(500).send(err.message);
	}
};

exports.getAllCompanies = async (req, res) => {
	try {
		const result = await Company.find().populate(["type", "size"]);
		res.status(200).send(result);
	} catch (err) {
		res.status(500).send(err.message);
	}
};

exports.getIndustries = async (req, res) => {
	try {
		const result = await Industry.find();
		res.status(200).send(result);
	} catch (err) {
		res.status(500).send(err.message);
	}
};

exports.getCompanySizes = async (req, res) => {
	try {
		const result = await CompanySize.find();
		res.status(200).send(result);
	} catch (err) {
		res.status(500).send(err.message);
	}
};
