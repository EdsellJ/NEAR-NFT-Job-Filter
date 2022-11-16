const db = require("../models");
const Job = db.jobs;
const Skill = db.skills;

exports.getAllSkills = async (req, res) => {
	try {
		const result = await Skill.find();
		res.status(200).send(result);
	} catch (err) {
		res.status(500).send(err.message);
	}
};

exports.post = async (req, res) => {
	const now = new Date().toISOString().replace("T", " ").substring(0, 19);
	const { body } = req;
	try {
		await Job.create({ ...body, postedAt: now });
	} catch (err) {
		res.status(500).send(err.message);
	}
};

exports.getAllJobs = async (req, res) => {
	try {
		const result = await Job.find().populate(["company", "type"]);
		res.status(200).send(result);
	} catch (err) {
		res.staus(500).send(err);
	}
};
