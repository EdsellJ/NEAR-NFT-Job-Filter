const db = require("../models");
const Skill = db.skills;

exports.getAllSkills = async (req, res) => {
	try {
		const result = await Skill.find();
		res.status(200).send(result);
	} catch (err) {
		res.status(500).send(err.message);
	}
};
