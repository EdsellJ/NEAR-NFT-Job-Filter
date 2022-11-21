const db = require("../models");
const types = require("../database/jobType.json");

module.exports = async () => {
	const JobType = db.jobTypes;

	for (let type of types) {
		const jobType = new JobType({
			type: type,
		});
		await jobType.save();
	}

	console.log("Job Type Seeds Generated Successfully!");
};
