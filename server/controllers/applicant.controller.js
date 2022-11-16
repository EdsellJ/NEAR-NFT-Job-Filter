const db = require("../models");
const Applicant = db.applicants;

exports.create = async (req, res) => {
	const now = new Date().toISOString().replace("T", " ").substring(0, 19);
	const { body } = req;
	try {
		await Applicant.save({ ...body, bidAt: now });
		res.status(200).send("success");
	} catch (err) {
		res.staus(500).send(err.message);
	}
};

exports.getApplicantsByJobId = async (req, res) => {};
