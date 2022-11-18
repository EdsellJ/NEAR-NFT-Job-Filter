const db = require("../models");
const Job = db.jobs;
const Skill = db.skills;
const JobType = db.jobTypes;

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
		res.status(200).send();
	} catch (err) {
		console.log(err);
		res.status(500).send(err.message);
	}
};

exports.getAllJobs = async (req, res) => {
	const { badges } = req.body;
	try {
		let result = [];
		if (badges[0] === "") {
			result = await Job.find().sort({ postedAt: -1 }).populate(["companyId", "type"]);
		} else {
			result = await Job.find().populate(["companyId", "type"]);
			const masteredCount = (skill) => {
				return skill.filter(key => badges.includes(key)).length;
			}
			result = result.sort((lhs, rhs) => {
				const leftCount = masteredCount(lhs.skill);
				const rightCount = masteredCount(rhs.skill);
				if (leftCount != rightCount) return rightCount - leftCount;
				return new Date(rhs.postedAt) - new Date(lhs.postedAt);
			});
		}
		res.status(200).send(result);
	} catch (err) {
		res.status(500).send(err.message);
	}
};

exports.getTypes = async (req, res) => {
	try {
		const result = await JobType.find();
		res.status(200).send(result);
	} catch (err) {
		res.status(500).send(err.message);
	}
};
